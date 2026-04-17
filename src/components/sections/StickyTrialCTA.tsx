"use client";

import { useEffect, useState } from "react";

export default function StickyTrialCTA() {
  const [showCta, setShowCta] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [hasContactForm, setHasContactForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const contactForm = document.getElementById("contact");
    setHasContactForm(!!contactForm);

    const onScroll = () => {
      setShowCta(window.scrollY > window.innerHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Hide when the contact/lead form section is visible in viewport
    let observer: IntersectionObserver | null = null;
    if (contactForm) {
      observer = new IntersectionObserver(
        ([entry]) => setContactVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(contactForm);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  // Hide if not scrolled far enough, or if the contact form is already visible
  if (!mounted || !showCta || contactVisible) return null;

  const href = hasContactForm ? "#contact" : "/#contact";

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag!("event", "generate_lead", {
        event_category: "CTA",
        event_label: "Sticky - Book a Free Trial Class",
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 w-full max-w-sm">
      <a
        href={href}
        onClick={handleClick}
        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gold text-white font-semibold shadow-xl hover:bg-gold-dark transition-colors"
      >
        Book a Free Trial Class
      </a>
    </div>
  );
}
