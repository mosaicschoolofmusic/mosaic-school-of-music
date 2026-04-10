"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const floatingNotes = [
  { note: "♩", x: "10%", delay: 0, duration: 3.5 },
  { note: "♪", x: "25%", delay: 1.2, duration: 4 },
  { note: "♫", x: "60%", delay: 0.6, duration: 3.2 },
  { note: "♬", x: "80%", delay: 1.8, duration: 4.2 },
  { note: "♩", x: "45%", delay: 2.4, duration: 3.8 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    const formEl = document.getElementById("contact");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1600&q=80"
          alt="Guitar being played in a warm music studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(27,67,50,0.85) 0%, rgba(27,67,50,0.7) 40%, rgba(212,160,23,0.4) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Floating music notes */}
      <div
        className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {floatingNotes.map((item, i) => (
          <motion.span
            key={i}
            className="absolute bottom-0 text-white/30 text-3xl select-none"
            style={{ left: item.x }}
            animate={{
              y: [0, -400],
              opacity: [0, 0.6, 0],
              rotate: [0, 15, -10],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            {item.note}
          </motion.span>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-20 mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl leading-tight mb-4 md:whitespace-nowrap">
            Learn Guitar.{" "}
            <span className="text-gold">Your Way.</span>
          </h1>

          <p className="text-white text-xl sm:text-2xl font-medium mb-3 tracking-wide">
            Acoustic &bull; Electric &bull; Classical
          </p>

          <p className="text-white/95 text-base sm:text-lg font-medium mb-10 max-w-none mx-auto md:whitespace-nowrap">
            All Levels, All Ages — Personalized 1:1 lessons online across India
            or at your home in Delhi
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-3 text-white/90 text-sm mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <img
                src="/images/trinity-college-london.jpg"
                alt="Trinity College London logo"
                className="h-6 w-auto"
              />
              <span className="font-medium text-white">Trinity Certified Instructors</span>
            </div>
          </motion.div>

          <div className="flex items-center justify-center">
            <Button
              size="lg"
              variant="primary"
              onClick={scrollToForm}
              className="w-full sm:w-auto shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clipRule="evenodd" />
              </svg>
              Book a Free Trial Class
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-6 max-w-sm mx-auto"
        >
          {[
            { value: "1:1", label: "Personal Lessons" },
            { value: "All Ages", label: "Welcome" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-playfair font-bold text-gold-light text-2xl sm:text-3xl mb-1"
                dangerouslySetInnerHTML={{ __html: stat.value }}
              />
              <div className="text-white text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
