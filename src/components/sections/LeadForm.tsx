"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { trackEvent, getSessionId } from "@/lib/analytics";

interface FormData {
  name: string;
  phone: string;
  email: string;
  mode: "online" | "home-tuition" | "group-offline";
  message: string;
  // Honeypot field — must remain empty
  website: string;
}

interface LeadFormProps {
  variant?: "section" | "inline";
  defaultMode?: "online" | "home-tuition" | "group-offline";
}

export default function LeadForm({
  variant = "section",
  defaultMode = "online",
}: LeadFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      mode: defaultMode,
    },
  });

  // Track form view on mount
  useEffect(() => {
    trackEvent({
      event_type: "form_view",
      mode: defaultMode,
      user_session_id: getSessionId(),
    });
  }, [defaultMode]);

  const onSubmit = async (data: FormData) => {
    // Honeypot check — if filled, silently "succeed" without doing anything
    if (data.website) {
      router.push("/thank-you");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Track form submission attempt
    trackEvent({
      event_type: "form_submit",
      mode: data.mode,
      user_session_id: getSessionId(),
    });

    // GA4 standard event
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag!("event", "generate_lead", {
        event_category: "Form",
        event_label: "Lead Form - Book My Free Trial",
      });
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || "",
          mode: data.mode,
          message: data.message || "",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or WhatsApp us directly."
      );
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Book a free trial guitar class"
      className="space-y-5"
    >
      {/* Honeypot — visually hidden, must be empty */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          opacity: 0,
          pointerEvents: "none",
          tabIndex: -1,
        } as React.CSSProperties}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          id="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register("website")}
        />
      </div>

      {/* Trial Info Callout */}
      <div className="p-4 rounded-xl bg-gold-light/50 border border-gold/40 text-gold-dark font-medium text-sm">
        <span className="mr-2">ℹ️</span>
        <strong>Free Trial Details:</strong> 30 minutes • Online or Group Class setup
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="form-label">
          Full Name <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          className={`form-input ${errors.name ? "error" : ""}`}
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
          {...register("name", {
            required: "Please enter your full name",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="form-label">
          Phone Number <span className="text-red-500" aria-label="required">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          className={`form-input ${errors.phone ? "error" : ""}`}
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          aria-invalid={!!errors.phone}
          {...register("phone", {
            required: "Please enter your phone number",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message:
                "Please enter a valid 10-digit Indian mobile number (starts with 6–9)",
            },
          })}
        />
        <p id="phone-hint" className="mt-1 text-xs text-muted">
          Indian mobile number, e.g. 9876543210
        </p>
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="form-label">
          Email Address{" "}
          <span className="text-muted text-xs font-normal">(optional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={`form-input ${errors.email ? "error" : ""}`}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Preferred Mode */}
      <fieldset>
        <legend className="form-label">
          Preferred Mode <span className="text-red-500" aria-label="required">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
          {[
            { value: "online", label: "🌐 Online Classes", sublabel: "Learn from anywhere in India" },
            { value: "home-tuition", label: "🏠 Home Tuition (Delhi)", sublabel: "Dwarka & nearby areas" },
            { value: "group-offline", label: "👥 Group Offline Classes", sublabel: "Learn in a group setting" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:border-gold/60 has-[:checked]:border-gold has-[:checked]:bg-gold-light/40"
            >
              <input
                type="radio"
                value={option.value}
                className="mt-0.5 w-4 h-4 accent-gold cursor-pointer"
                {...register("mode", { required: true })}
              />
              <span>
                <span className="font-semibold text-dark-text text-sm block">
                  {option.label}
                </span>
                <span className="text-muted text-xs">{option.sublabel}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="form-label">
          Message / Questions{" "}
          <span className="text-muted text-xs font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Any specific style you want to learn? Any questions for us?"
          className="form-input resize-none"
          {...register("message")}
        />
      </div>

      {/* Error */}
      {submitError && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
        >
          {submitError}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full justify-center text-base"
      >
        {isSubmitting ? "Sending..." : "Book My Free Trial 🎸"}
      </Button>

      <p className="text-center text-xs text-muted">
        We&rsquo;ll get back to you within 24 hours. No spam, ever.
      </p>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="warm-card p-6 md:p-8 border border-gold-light/40">
        {formContent}
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background:
          "linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #1B4332 100%)",
      }}
      aria-label="Contact form — Book a free trial class"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Start Your Guitar Journey Today"
            subtitle="Book a free trial class — we'll get back to you within 24 hours."
            accentColor="gold"
            className="[&_h2]:text-white [&_p]:text-white/70"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-warm-white rounded-2xl p-8 md:p-10 shadow-2xl">
            {formContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
