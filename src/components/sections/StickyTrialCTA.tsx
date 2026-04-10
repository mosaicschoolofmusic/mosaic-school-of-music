"use client";

import { useEffect, useState } from "react";

export default function StickyTrialCTA() {
  const [showCta, setShowCta] = useState(false);
  const [hasContactForm, setHasContactForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if contact form exists on this page
    const contactForm = document.getElementById("contact");
    setHasContactForm(!!contactForm);

    const onScroll = () => {
      setShowCta(window.scrollY > window.innerHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted || !showCta) return null;

  // Link to contact form if it exists on this page, otherwise link to home
  const href = hasContactForm ? "#contact" : "/#contact";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-4 w-full max-w-sm">
      <a
        href={href}
        className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gold text-white font-semibold shadow-xl hover:bg-gold-dark transition-colors"
      >
        Book a Free Trial Class
      </a>
    </div>
  );
}
