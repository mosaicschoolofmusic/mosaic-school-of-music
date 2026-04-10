import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StickyTrialCTA from "@/components/sections/StickyTrialCTA";
import LearningModes from "@/components/sections/LearningModes";
import OfflineClasses from "@/components/sections/OfflineClasses";
import AIGuitarBuddy from "@/components/sections/AIGuitarBuddy";
import WhatWeTeach from "@/components/sections/WhatWeTeach";
import WhyMosaic from "@/components/sections/WhyMosaic";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import LeadForm from "@/components/sections/LeadForm";
import { getFAQSchema } from "@/lib/schemas";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Mosaic School of Music — Guitar Classes in Delhi & Online | Acoustic, Electric, Classical",
  description:
    "Learn guitar with personalized 1:1 lessons — online across India or home tuitions in Dwarka, Delhi. Acoustic, electric & classical guitar for all ages and levels. Book a free trial class!",
  alternates: {
    canonical: BUSINESS.domain,
  },
};

export default function HomePage() {
  const faqSchema = getFAQSchema();

  return (
    <>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <StickyTrialCTA />
      <WhyMosaic />
      <Testimonials />
      <LearningModes />
      <OfflineClasses />
      <WhatWeTeach />
      <FAQ />
      <AIGuitarBuddy />
      <LeadForm />
    </>
  );
}
