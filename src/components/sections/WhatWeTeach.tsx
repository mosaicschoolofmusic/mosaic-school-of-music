"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const courses = [
  {
    id: "acoustic",
    title: "Acoustic Guitar",
    emoji: "🎵",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80",
    imageAlt: "Person playing acoustic guitar",
    description:
      "From your first chord to fingerpicking melodies, our acoustic guitar curriculum covers everything — open chords, barre chords, strumming, fingerstyle, and popular songs across genres like pop, folk, Bollywood, and more.",
    topics: [
      "Open & barre chords",
      "Strumming & rhythm",
      "Fingerpicking & fingerstyle",
      "Popular songs & Bollywood",
    ],
  },
  {
    id: "electric",
    title: "Electric Guitar",
    emoji: "⚡",
    image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=600&q=80",
    imageAlt: "Electric guitar with musician",
    description:
      "Plug in and play. Our electric guitar lessons cover everything from basic power chords and pentatonic scales to lead guitar techniques, blues licks, and rock solos — with proper tone and gear guidance along the way.",
    topics: [
      "Power chords & riffs",
      "Pentatonic scales & solos",
      "Blues & rock techniques",
      "Gear basics & tone",
    ],
  },
  {
    id: "classical",
    title: "Classical Guitar",
    emoji: "🎼",
    image: "/images/classical guitar.png",
    imageAlt: "Woman playing classical guitar with proper technique",
    description:
      "Master the elegant art of classical guitar. Our classical curriculum follows a structured approach — proper technique, music reading, scales, arpeggios, and repertoire from classical composers including Spanish and Latin masters.",
    topics: [
      "Classical technique & posture",
      "Music notation & reading",
      "Scales & arpeggios",
      "Classical & flamenco repertoire",
    ],
  },
];

export default function WhatWeTeach() {
  return (
    <section
      id="what-we-teach"
      className="section-padding bg-warm-white"
      aria-label="What we teach"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="What You'll Learn"
            subtitle="Our curriculum is tailored to your goals — whether you want to strum campfire songs, shred solos, or master classical fingerpicking."
          />
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {courses.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="warm-card overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl -mx-6 -mt-6 mb-6">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-3 left-4 text-3xl"
                  aria-hidden="true"
                >
                  {course.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 pt-0 text-center px-2">
                <h3 className="font-playfair font-bold text-2xl text-dark-text mb-3">
                  {course.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1 mx-auto max-w-xs">
                  {course.description}
                </p>

                {/* Topics */}
                <ul className="space-y-2 mb-4 flex flex-col items-center mx-auto max-w-xs">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-dark-text justify-center"
                    >
                      <span className="text-gold" aria-hidden="true">♪</span>
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center">
                  <Badge variant="success" className="w-fit">
                    All levels — Beginner to Advanced
                  </Badge>
                </div>
              </div>
            </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted mt-10 text-base max-w-2xl mx-auto"
        >
          All courses are available as <strong className="text-dark-text">online classes</strong> across India or{" "}
          <strong className="text-dark-text">home tuitions in Dwarka, Delhi</strong>. Every lesson is
          personalized to your pace and goals.
        </motion.p>
      </div>
    </section>
  );
}
