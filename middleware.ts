import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only set the cookie if it hasn't been set yet
  if (!request.cookies.has("user-region")) {
    // request.geo is available on Vercel Edge Runtime
    const geo = (request as NextRequest & { geo?: { region?: string; country?: string; city?: string } }).geo;

    let region = "other";

    if (geo) {
      const country = geo.country ?? "";
      const city = (geo.city ?? "").toLowerCase();
      const regionCode = (geo.region ?? "").toLowerCase();
      const ncrCities = [
        "delhi",
        "new delhi",
        "dwarka",
        "gurugram",
        "gurgaon",
        "noida",
        "greater noida",
        "ghaziabad",
        "faridabad",
      ];

      // Check if the user is in Delhi/NCR area (India)
      if (
        country === "IN" &&
        (ncrCities.some((ncrCity) => city.includes(ncrCity)) ||
          regionCode === "dl")
      ) {
        region = "delhi";
      }
    }

    response.cookies.set("user-region", region, {
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap).*)",
  ],
};
