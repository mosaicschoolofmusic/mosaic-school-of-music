import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { BUSINESS } from "@/lib/constants";
import StickyTrialCTA from "@/components/sections/StickyTrialCTA";

export const metadata: Metadata = {
  title: "About Mosaic School of Music — Guitar Education in Delhi & Online",
  description:
    "Learn about Mosaic School of Music — our story, our mission, and the experienced guitar instructors behind personalized 1:1 lessons in Delhi and online across India.",
  alternates: {
    canonical: `${BUSINESS.domain}/about`,
  },
  openGraph: {
    title: "About Mosaic School of Music",
    description:
      "The story behind Mosaic — guitar education with heart. Meet our instructors and learn about our mission.",
    url: `${BUSINESS.domain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "About", url: `${BUSINESS.domain}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #1B4332 100%)" }}
        aria-label="About page hero"
      >
        <div className="container-max relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gold font-medium">About</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              About Mosaic School of Music
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              A guitar school founded on the belief that music education should
              be personal, accessible, and genuinely transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream" aria-label="Our story">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-playfair font-bold text-3xl md:text-4xl text-dark-text mb-6">
                  Our Story
                </h2>
                {/* PLACEHOLDER TEXT — Replace with actual school story */}
                <div className="space-y-4 text-muted text-lg leading-relaxed">
                  <p>
                    Mosaic School of Music was founded with a single, passionate
                    conviction: that learning guitar should be a deeply personal
                    experience. Not a classroom. Not a YouTube video. Not a
                    one-size-fits-all curriculum.
                  </p>
                  <p>
                    Born in the heart of Dwarka, Delhi, Mosaic grew from the
                    frustration of watching talented students plateau in group
                    classes — not because they lacked ability, but because the
                    teaching wasn&rsquo;t tailored to <em>them</em>. We decided to do
                    things differently.
                  </p>
                  <p>
                    Our name — Mosaic — reflects our philosophy. Every student
                    is a unique piece of a larger picture. Our job is to help
                    each individual piece shine, in its own right, in its own
                    time.
                  </p>
                  <p>
                    Today, Mosaic serves students in Dwarka and across Delhi
                    through in-home tuitions, and students across India through
                    our online live 1:1 classes. We&rsquo;ve also built Teacher Eddie,
                    a free AI guitar chatbot, to make guitar learning accessible
                    even between lessons.
                  </p>
                </div>
              </div>

              <div className="relative h-72 lg:h-full min-h-72 rounded-2xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
                  alt="Guitar instructor in a warm music studio setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Mission */}
            <div className="warm-card p-8 border-2 border-gold/30 mb-16 text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🎸</div>
              <h2 className="font-playfair font-bold text-2xl text-dark-text mb-4">
                Our Mission
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
                {/* PLACEHOLDER — Replace with actual mission statement */}
                To make world-class guitar education accessible to every student
                in India — through personalized instruction, flexible formats,
                and technology that supports learning between lessons.
              </p>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="font-playfair font-bold text-3xl text-dark-text mb-8 text-center">
                What We Stand For
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: "👤",
                    title: "Personalization",
                    desc: "Every student is different. Every lesson plan should be too.",
                  },
                  {
                    icon: "❤️",
                    title: "Passion",
                    desc: "We teach guitar because we love it — and that passion is contagious.",
                  },
                  {
                    icon: "🌱",
                    title: "Growth",
                    desc: "We measure success by your progress, your confidence, and your joy in playing.",
                  },
                ].map((value) => (
                  <div key={value.title} className="warm-card p-6 text-center">
                    <div className="text-3xl mb-3" aria-hidden="true">{value.icon}</div>
                    <h3 className="font-playfair font-bold text-lg text-dark-text mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)" }}
            >
              <h2 className="font-playfair font-bold text-3xl text-white mb-4">
                Ready to Start Your Guitar Journey?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Book a free trial class and experience the Mosaic difference.
                No commitment — just great guitar teaching.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors shadow-warm w-full sm:w-auto text-center"
                >
                  Book a Free Trial
                </Link>
                <a
                  href={BUSINESS.teacherEddieUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-dark transition-colors w-full sm:w-auto text-center"
                  aria-label="Try Teacher Eddie AI Guitar Buddy (opens in new tab)"
                >
                  Try Eddie — AI Guitar Buddy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyTrialCTA />
    </>
  );
}
