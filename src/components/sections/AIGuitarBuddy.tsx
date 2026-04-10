"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function AIGuitarBuddy() {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #F5E6B8 0%, #FFF8F0 60%, #F5E6B8 100%)" }}
      aria-label="AI Guitar Buddy — Teacher Eddie"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="warm-card border-2 border-gold/40 bg-warm-white p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative background note */}
            <span
              className="absolute top-4 right-8 text-8xl text-gold/10 font-playfair select-none pointer-events-none"
              aria-hidden="true"
            >
              ♪
            </span>
            <span
              className="absolute bottom-4 left-8 text-6xl text-gold/10 font-playfair select-none pointer-events-none"
              aria-hidden="true"
            >
              ♫
            </span>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-dark text-white text-sm font-semibold mb-6">
              <span aria-hidden="true">🤖</span>
              Free AI Tool
            </span>

            {/* Big emoji */}
            <div className="text-6xl mb-4" aria-hidden="true">
              🎸
            </div>

            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-dark-text mb-4">
              Meet Eddie — Your AI Guitar Buddy
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-6 max-w-xl mx-auto">
              Got a quick guitar question between lessons? Eddie is our free
              AI-powered guitar chatbot. Learn chords, scales, strumming
              patterns, music theory, and more — instantly, any time of day.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {[
                "Chord Diagrams",
                "Scales & Theory",
                "Strumming Patterns",
                "Song Tutorials",
                "Practice Tips",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gold-light text-gold-dark text-xs font-semibold border border-gold/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              as="link"
              href={BUSINESS.teacherEddieUrl}
              size="lg"
              variant="primary"
              target="_blank"
              className="shadow-warm"
            >
              <span aria-hidden="true">💬</span>
              Chat with Eddie — It&apos;s Free!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </Button>

            <p className="text-muted text-sm mt-4">
              No sign-up required · Available 24/7 · Completely free
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
