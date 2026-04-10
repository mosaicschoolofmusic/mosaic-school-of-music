import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  mode: "online" | "home-tuition";
  message?: string;
}

// Simple in-memory rate limiting (resets on cold start — appropriate for serverless)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "unknown";
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
        },
      }
    );
  }

  let body: Partial<LeadPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Validate required fields
  const { name, phone, email, mode, message } = body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Name is required and must be at least 2 characters." },
      { status: 400 }
    );
  }

  if (!phone || typeof phone !== "string") {
    return NextResponse.json(
      { error: "Phone number is required." },
      { status: 400 }
    );
  }

  // Validate Indian phone format
  const phoneClean = phone.replace(/\s|-/g, "");
  if (!/^[6-9]\d{9}$/.test(phoneClean)) {
    return NextResponse.json(
      { error: "Please provide a valid 10-digit Indian mobile number." },
      { status: 400 }
    );
  }

  if (!mode || !["online", "home-tuition", "group-offline"].includes(mode)) {
    return NextResponse.json(
      { error: "Please select a preferred learning mode." },
      { status: 400 }
    );
  }

  // Sanitize inputs
  const sanitizedData = {
    name: name.trim().slice(0, 100),
    phone: phoneClean,
    email: typeof email === "string" ? email.trim().slice(0, 200) : "",
    mode,
    message: typeof message === "string" ? message.trim().slice(0, 1000) : "",
    ip_address: clientIp,
  };

  // Insert into Supabase
  try {
    const { error: leadError } = await supabase
      .from("leads")
      .insert([sanitizedData]);

    if (leadError) {
      console.error("Failed to insert lead:", leadError.message);
      // Don't fail the user request if Supabase fails
    } else {
      // Track successful form submission
      try {
        await supabase.from("analytics_events").insert([
          {
            event_type: "form_submit",
            page_path: request.headers.get("referer") || "/",
            mode: mode,
            timestamp: new Date().toISOString(),
          },
        ]);
      } catch (analyticsError) {
        console.warn("Failed to track analytics event:", analyticsError);
      }
    }
  } catch (err) {
    console.error("Database request failed:", err);
    // Don't fail the user request if database fails
  }

  return NextResponse.json(
    { success: true, message: "Thank you! We'll be in touch soon." },
    {
      status: 200,
      headers: {
        "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
        "X-RateLimit-Remaining": "1",
      },
    }
  );
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
