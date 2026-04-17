"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCookie } from "@/lib/cookieUtils";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

function OnlineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10" aria-hidden="true">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  );
}

interface ModeCard {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  highlight?: boolean;
}

const offlineOneToOneCard: ModeCard = {
  id: "offline",
  icon: <HomeIcon />,
  badge: "Dwarka, Delhi-NCR",
  title: "Group Classes",
  subtitle: "In-person guitar classes in Sector 7, Dwarka",
  bullets: [
    "Group classes starting from 15th May 2026",
    "Structured learning with focused instructor attention",
    "Parents can contact us for timings and fee details",
    "Limited seats for the new batch",
  ],
  ctaText: "Enquire Offline Class",
  ctaHref: "/#offline-classes",
  highlight: false,
};

const onlineCard: ModeCard = {
  id: "online",
  icon: <OnlineIcon />,
  badge: "Pan-India",
  title: "Online Classes",
  subtitle: "Learn from anywhere in India",
  bullets: [
    "Live 1:1 video sessions — face-to-face with your instructor",
    "Flexible scheduling — morning, evening, or weekend slots",
    "All levels welcome — beginner to advanced",
    "Just need a guitar, internet connection & a device",
  ],
  ctaText: "Start Learning Online",
  ctaHref: "/online-guitar-classes",
  highlight: false,
};

const homeCard: ModeCard = {
  id: "home",
  icon: <HomeIcon />,
  badge: "Dwarka, Delhi",
  title: "Home Tuitions in Delhi",
  subtitle: "Personalized 1:1 lessons at your doorstep",
  bullets: [
    "In-home tutoring in Dwarka & nearby areas",
    "Learn on your own guitar — no travel needed",
    "Customized curriculum based on your goals",
    "Convenient scheduling around your routine",
  ],
  ctaText: "Book Home Tuition",
  ctaHref: "/guitar-classes-delhi",
  highlight: false,
};

export default function LearningModes() {
  const [cards, setCards] = useState<ModeCard[]>([homeCard, onlineCard, offlineOneToOneCard]);

  useEffect(() => {
    // Read user-region cookie client-side to show region-aware mode cards.
    const region = getCookie("user-region");
    if (region === "delhi") {
      setCards([offlineOneToOneCard]);
    } else {
      setCards([homeCard, onlineCard, offlineOneToOneCard]);
    }
  }, []);

  return (
    <section
      id="learning-modes"
      className="section-padding bg-cream"
      aria-label="Learning modes"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="How You Learn"
            subtitle="Region-aware options: Delhi-NCR visitors see our 1:1 offline class focus, while others see Delhi home tuition first with online classes below."
          />
        </motion.div>

        <div
          className={[
            "grid grid-cols-1 gap-8 mx-auto",
            cards.length === 1 ? "max-w-2xl" : "md:grid-cols-2 max-w-5xl",
          ].join(" ")}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={
                cards.length === 3 && index === 2
                  ? "md:col-span-2 md:max-w-xl md:w-full md:mx-auto"
                  : ""
              }
            >
              <div className="warm-card h-full flex flex-col p-8 border border-gold-light/40 hover:border-gold/40 transition-colors">
                {/* Badge */}
                <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-light text-gold-dark border border-gold/30 mb-5">
                  {card.badge}
                </span>

                {/* Icon */}
                <div className="text-gold mb-4">{card.icon}</div>

                {/* Title */}
                <h3 className="font-playfair font-bold text-2xl text-dark-text mb-2">
                  {card.title}
                </h3>
                <p className="text-muted text-base mb-5">{card.subtitle}</p>

                {/* Guitar string divider */}
                <div
                  className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-5"
                  aria-hidden="true"
                />

                {/* Bullets */}
                <ul className="space-y-3 mb-8 flex-1">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-dark-text">
                      <svg
                        className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Button as="link" href={card.ctaHref} variant="secondary" className="w-full justify-center">
                  {card.ctaText}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
