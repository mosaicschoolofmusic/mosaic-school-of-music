"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const usps = [
  {
    icon: "👤",
    title: "1:1 Personalized Lessons",
    description:
      "Every student gets undivided individual attention. No classroom distractions — your lessons are entirely focused on your progress, your questions, and your goals.",
  },
  {
    icon: "🎓",
    title: "Expert Instructors",
    description:
      "Our team includes experienced, Trinity Certified guitar instructors with diverse musical backgrounds and teaching specializations. We'll match you with the right teacher.",
  },
  {
    icon: "🕐",
    title: "Flexible Scheduling",
    description:
      "Learn at times that work for you — mornings, evenings, or weekends. No rigid timetables. Life gets busy; your guitar lessons should fit around it.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "All Ages Welcome",
    description:
      "Kids as young as 6, teenagers, working adults, and senior learners — everyone can learn guitar. Our instructors adapt their style to suit every age and learning pace.",
  },
  {
    icon: "🌐",
    title: "Online + Offline",
    description:
      "Choose your preferred mode — live 1:1 video classes from anywhere in India, or in-home tuitions if you're in Dwarka, Delhi. Or mix both!",
  },
  {
    icon: "🤖",
    title: "Free AI Guitar Buddy",
    description:
      "Practice anytime with Eddie, our free AI guitar chatbot. Available 24/7 to answer questions, teach chords, and help you practice between lessons.",
  },
];

export default function WhyMosaic() {
  return (
    <section
      id="why-mosaic"
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #F5E6B8 50%, #FFF8F0 100%)" }}
      aria-label="Why choose Mosaic School of Music"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Why Choose Mosaic?"
            subtitle="We're not just another music school. Here's what makes learning guitar with us different."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="warm-card p-6 gold-border-top"
            >
              <div
                className="text-4xl mb-4"
                aria-hidden="true"
              >
                {usp.icon}
              </div>
              <h3 className="font-playfair font-bold text-xl text-dark-text mb-3">
                {usp.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
