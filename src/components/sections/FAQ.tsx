"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { FAQS } from "@/lib/constants";

interface FAQProps {
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  faqs = FAQS,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before starting your guitar journey with us.",
}: FAQProps) {
  return (
    <section
      id="faq"
      className="section-padding bg-cream"
      aria-label="Frequently asked questions"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={title} subtitle={subtitle} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}
