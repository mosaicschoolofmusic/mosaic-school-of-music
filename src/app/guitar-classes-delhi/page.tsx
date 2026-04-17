import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";
import StickyTrialCTA from "@/components/sections/StickyTrialCTA";
import Badge from "@/components/ui/Badge";
import { getBreadcrumbSchema, getInPersonCourseSchema, getFAQSchema } from "@/lib/schemas";
import { BUSINESS, AREAS_SERVED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guitar Classes in Dwarka, Delhi — 1:1 Home Tuitions | Mosaic School of Music",
  description:
    "Personalized 1:1 guitar home tuitions in Dwarka, Delhi. Expert instructors visit your home in Dwarka, Uttam Nagar, Janakpuri, Palam & nearby areas. All ages & levels. Book a free trial!",
  alternates: {
    canonical: `${BUSINESS.domain}/guitar-classes-delhi`,
  },
  openGraph: {
    title: "Guitar Classes in Dwarka, Delhi — 1:1 Home Tuitions",
    description:
      "Personalized 1:1 guitar home tuitions in Dwarka & nearby areas, Delhi. Expert instructors, flexible schedules, all ages welcome.",
    url: `${BUSINESS.domain}/guitar-classes-delhi`,
  },
};

const delhiFaqs = [
  {
    question: "Which areas in Delhi do you cover for home guitar tuitions?",
    answer:
      "We cover Dwarka (all sectors 1–23), Janakpuri, Vasant Vihar, Vasant Kunj, and Gurgaon. If you're in a nearby area not listed here, contact us and we'll check availability.",
  },
  {
    question: "Do I need to own a guitar before starting lessons?",
    answer:
      "For home tuitions, yes — you'll learn on your own instrument, which is actually ideal for building comfort with your guitar. If you don't have one yet, we can guide you on choosing the right beginner guitar for your budget (starting ₹2,500–₹5,000 for a decent starter).",
  },
  {
    question: "How many days a week are lessons scheduled?",
    answer:
      "Most students start with 2 sessions per week (recommended for faster progress). We also offer 1 session per week for those with busier schedules. Each session is typically 45–60 minutes.",
  },
  {
    question: "Can my child take guitar lessons at home in Delhi?",
    answer:
      "Absolutely. We teach kids as young as 6 years old. Our instructors are trained to work with young learners — lessons are fun, engaging, and structured to build good habits from the start.",
  },
  {
    question: "Do you teach Bollywood/Hindi songs?",
    answer:
      "Yes! Many students specifically want to learn Bollywood songs, and we're happy to include them. We blend the songs you love with the foundational skills you need — chords, strumming, rhythm — so you progress musically while playing songs that inspire you.",
  },
  {
    question: "Is a free trial class available for all types of classes?",
    answer:
      "No, free trial classes are only available for online classes and group classes, and not for offline 1:1 home tuitions. However, you can still get in touch with us to discuss your requirements, and we'll be happy to help you find the best learning option.",
  },
];

export default function GuitarClassesDelhiPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Guitar Classes Delhi", url: `${BUSINESS.domain}/guitar-classes-delhi` },
  ]);
  const courseSchema = getInPersonCourseSchema();
  const faqSchema = getFAQSchema(delhiFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #1B4332 100%)",
        }}
        aria-label="Guitar classes Delhi hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&q=70"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
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
              <li className="text-gold font-medium">Guitar Classes Delhi</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Dwarka, Delhi · Home Tuitions
            </Badge>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Guitar Classes in Dwarka &amp; Delhi — Personalized Home Tuitions
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Expert 1:1 guitar lessons at your doorstep — no commute, no
              classroom, just focused learning tailored to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors shadow-warm"
              >
                Book a Free Trial
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-dark transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="section-padding bg-cream">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="prose-custom mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-dark-text mb-6">
                Why Learn Guitar at Home in Delhi?
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Delhi is a city that runs on a busy schedule. Between commutes,
                  work, school, and family, finding time to travel to a music
                  school can be a genuine barrier to learning. That&rsquo;s exactly why
                  home guitar tuitions make so much sense — your instructor comes
                  to <em>you</em>, and you learn in the most comfortable, familiar
                  environment possible.
                </p>
                <p>
                  At <strong>Mosaic School of Music</strong>, we believe that
                  personalized, 1:1 in-home guitar lessons are the most effective
                  way to learn. Unlike group classes where everyone progresses at
                  the same pace, your home tuition sessions are built entirely
                  around <em>your</em> goals, <em>your</em> schedule, and{" "}
                  <em>your</em> musical interests.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-card">
              <Image
                src="/images/offline-class.webp"
                alt="Guitar instructor teaching a student at home in Delhi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Benefits of 1:1 */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-3xl text-dark-text mb-6">
                Benefits of 1:1 Home Tuitions vs. Classroom Learning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Fully Personalized",
                    desc: "Every lesson is designed around your goals, skill level, and preferred music styles. No one else to slow you down or rush you forward.",
                  },
                  {
                    title: "No Travel, No Hassle",
                    desc: "Your instructor comes to your home. No commuting, no parking, no time wasted traveling.",
                  },
                  {
                    title: "Learn on Your Own Guitar",
                    desc: "You practice on the instrument you actually own, building real familiarity with your guitar from day one.",
                  },
                  {
                    title: "Flexible Scheduling",
                    desc: "Morning, evening, weekday, or weekend — we work around your schedule, not the other way around.",
                  },
                  {
                    title: "Comfortable Environment",
                    desc: "Your home is your comfort zone. No performance anxiety in front of strangers. Learn at your own pace.",
                  },
                  {
                    title: "Family Can Watch & Participate",
                    desc: "Parents can sit in on their child's lessons. Siblings can get inspired. Music learning becomes a family experience.",
                  },
                ].map((benefit) => (
                  <div
                    key={benefit.title}
                    className="warm-card p-5 gold-border-left"
                  >
                    <h3 className="font-semibold text-dark-text mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas served */}
            <div className="mb-12 warm-card p-8 bg-gold-light/30 border border-gold/20">
              <h2 className="font-playfair font-bold text-2xl text-dark-text mb-4">
                Areas We Cover in Delhi
              </h2>
              <p className="text-muted text-base mb-5 leading-relaxed">
                Our guitar instructors currently cover the following areas in
                Delhi. Don&rsquo;t see your area? Contact us — coverage may be
                possible.
              </p>
              <div className="flex flex-wrap gap-2">
                {AREAS_SERVED.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-full bg-white border border-gold/30 text-green-dark text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Teaching approach */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-3xl text-dark-text mb-6">
                Our Teaching Approach for In-Person Classes
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Our instructors begin every new student relationship with a
                  comprehensive assessment — your current skill level, your
                  musical background, the style of music you love, and your
                  short-term and long-term goals. From there, we build a
                  curriculum that&rsquo;s uniquely yours.
                </p>
                <p>
                  We use a blended approach combining technical fundamentals
                  (posture, hand position, music theory) with practical, song-based
                  learning. You&rsquo;ll always be working on pieces you actually want
                  to play — not just exercises. This keeps motivation high and
                  progress visible.
                </p>
                <p>
                  Whether you want to strum Bollywood songs around a family
                  gathering, play Western pop and rock, or pursue the discipline of
                  classical guitar, our Delhi instructors bring the same level of
                  professionalism and passion to every session.
                </p>
              </div>
            </div>

            {/* Instruments */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-2xl text-dark-text mb-4">
                Instruments We Teach (Home Tuitions)
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Acoustic Guitar", "Electric Guitar", "Classical Guitar", "Bass Guitar (on request)"].map(
                  (instrument) => (
                    <Badge key={instrument} variant="green">
                      {instrument}
                    </Badge>
                  )
                )}
              </div>
            </div>

            {/* Internal links */}
            <div className="p-6 rounded-2xl bg-warm-white border border-gold-light/40 mb-12">
              <p className="text-dark-text font-medium mb-3">
                Looking for online guitar classes instead?
              </p>
              <Link
                href="/online-guitar-classes"
                className="text-gold font-semibold hover:text-gold-dark transition-colors"
              >
                Explore our Online Guitar Classes →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Delhi-specific FAQ */}
      <FAQ
        faqs={delhiFaqs}
        title="FAQs — Home Guitar Tuitions in Delhi"
        subtitle="Common questions about our in-home guitar lessons in Dwarka and nearby Delhi areas."
      />

      {/* Lead Form */}
      <LeadForm defaultMode="home-tuition" />

      <StickyTrialCTA />
    </>
  );
}
