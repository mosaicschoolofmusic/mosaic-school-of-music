import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";
import StickyTrialCTA from "@/components/sections/StickyTrialCTA";
import Badge from "@/components/ui/Badge";
import { getBreadcrumbSchema, getOnlineCourseSchema, getFAQSchema } from "@/lib/schemas";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Online Guitar Classes India — Live 1:1 Lessons | Mosaic School of Music",
  description:
    "Live 1:1 online guitar classes from anywhere in India. Experienced instructors, flexible scheduling, all levels welcome. Acoustic, electric & classical guitar. Book a free trial today!",
  alternates: {
    canonical: `${BUSINESS.domain}/online-guitar-classes`,
  },
  openGraph: {
    title: "Online Guitar Classes India — Live 1:1 Lessons",
    description:
      "Live 1:1 online guitar classes from anywhere in India. Flexible scheduling, all levels & ages. Book a free trial today!",
    url: `${BUSINESS.domain}/online-guitar-classes`,
  },
};

const onlineFaqs = [
  {
    question: "How do online guitar classes work at Mosaic?",
    answer:
      "Our online classes are conducted live via video call (Google Meet or Zoom — your choice). You and your instructor see each other in real-time, just like an in-person session. The instructor can watch your hand position, correct your technique, and respond instantly to your questions. Sessions are typically 45–60 minutes.",
  },
  {
    question: "What equipment do I need for online guitar classes?",
    answer:
      "You'll need: (1) A guitar — acoustic, electric, or classical. (2) A stable internet connection — at least 5 Mbps. (3) A laptop, tablet, or smartphone with a working camera and microphone. That's it! For electric guitar, you'll also need an amp or can connect directly to your device with an interface.",
  },
  {
    question: "Is live 1:1 online better than YouTube guitar tutorials?",
    answer:
      "Yes, significantly. YouTube is great for inspiration but it can't correct your technique, answer your specific questions, or adapt to your pace. With live 1:1 lessons, your instructor watches your exact hand position and playing style, catches bad habits before they become ingrained, designs lessons specifically for your goals, and provides real-time feedback. Most self-taught guitarists plateau because of bad habits — proper instruction prevents this.",
  },
  {
    question: "Can online classes match the quality of in-person lessons?",
    answer:
      "Absolutely. Thousands of students learn instruments online with excellent results. The key advantages of our online format are the same as in-person: 1:1 attention, personalized curriculum, and experienced instructors. The only difference is location — and for online classes, that's actually an advantage.",
  },
  {
    question: "Do you offer online classes for kids?",
    answer:
      "Yes! We teach children as young as 6 years old online. For young children, we recommend a parent or guardian be present in the room during the first few sessions to help with setup and to reinforce practice between lessons. Our instructors are trained to make online learning fun and engaging for kids.",
  },
  {
    question: "Is a free trial class available for all types of classes?",
    answer:
      "No, free trial classes are only available for online classes and group classes, and not for offline 1:1 home tuitions. However, you can still get in touch with us to discuss your requirements, and we'll be happy to help you find the best learning option.",
  },
];

export default function OnlineGuitarClassesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BUSINESS.domain },
    { name: "Online Guitar Classes", url: `${BUSINESS.domain}/online-guitar-classes` },
  ]);
  const courseSchema = getOnlineCourseSchema();
  const faqSchema = getFAQSchema(onlineFaqs);

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
        aria-label="Online guitar classes hero"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1600&q=70"
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
              <li className="text-gold font-medium">Online Guitar Classes</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">
              Pan-India · Live 1:1 Online
            </Badge>
            <h1 className="font-playfair font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Online Guitar Classes — Learn Live 1:1 From Anywhere in India
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Professional guitar instruction from the comfort of your home —
              whether you&rsquo;re in Mumbai, Bengaluru, Hyderabad, or anywhere
              across India.
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

      {/* Main Content */}
      <article className="section-padding bg-cream">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* How it works */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-dark-text mb-6">
                How Online Guitar Classes Work at Mosaic
              </h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>
                  Our online guitar classes are live, face-to-face sessions
                  conducted over video call. Think of it as having your guitar
                  teacher sitting right across from you — but from anywhere in
                  India.
                </p>
                <p>
                  Once you book a free trial class, we match you with one of our
                  experienced guitar instructors based on your musical goals and
                  preferred style. Your instructor will assess your current level,
                  understand your goals, and from the very first session, design a
                  curriculum tailored specifically for you.
                </p>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-12">
              <h3 className="font-playfair font-bold text-2xl text-dark-text mb-6">
                Getting Started — It&rsquo;s Simple
              </h3>
              <div className="space-y-4">
                {[
                  { step: "01", title: "Book Your Free Trial", desc: "Fill out the form below or WhatsApp us. We'll schedule your free first session within 24 hours." },
                  { step: "02", title: "Meet Your Instructor", desc: "We match you with the right instructor for your goals. Your first session is a trial — no commitment." },
                  { step: "03", title: "Get Your Personalized Plan", desc: "Your instructor designs a curriculum just for you — your pace, your goals, your favourite music." },
                  { step: "04", title: "Practice with Eddie Between Lessons", desc: "Use our free AI Guitar Buddy (Teacher Eddie) to practice chords, learn theory, and get answers anytime." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 warm-card p-5">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-gold text-white font-playfair font-bold text-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-text mb-1">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-card">
              <Image
                src="/images/online-class.webp"
                alt="Guitar instructor teaching an online class via video call"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                loading="lazy"
              />
            </div>

            {/* Why live 1:1 */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-3xl text-dark-text mb-6">
                Why Live 1:1 is Better Than YouTube Tutorials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🎯",
                    title: "Technique Correction",
                    desc: "Your instructor watches your exact hand position and playing in real-time, catching and correcting bad habits immediately.",
                  },
                  {
                    icon: "💬",
                    title: "Instant Answers",
                    desc: "Ask any question the moment it comes up. No pausing, rewinding, or searching for a different video.",
                  },
                  {
                    icon: "📈",
                    title: "Structured Progression",
                    desc: "YouTube is random. Your lessons follow a deliberate curriculum designed to build skills systematically.",
                  },
                  {
                    icon: "🎵",
                    title: "Songs You Actually Want",
                    desc: "Your instructor teaches the songs you love, not a fixed syllabus. Your motivation stays high.",
                  },
                ].map((item) => (
                  <div key={item.title} className="warm-card p-5 gold-border-top">
                    <div className="text-2xl mb-2" aria-hidden="true">{item.icon}</div>
                    <h3 className="font-semibold text-dark-text mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-12 warm-card p-8 bg-gold-light/20 border border-gold/20">
              <h2 className="font-playfair font-bold text-2xl text-dark-text mb-5">
                What You Need to Get Started
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { icon: "🎸", title: "A Guitar", desc: "Acoustic, electric, or classical — any playable guitar will do for your first lesson." },
                  { icon: "📶", title: "Stable Internet", desc: "At least 5 Mbps for smooth video. A wired connection is better for audio quality." },
                  { icon: "💻", title: "A Device", desc: "Laptop, tablet, or smartphone with a working camera and microphone." },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="text-4xl mb-2" aria-hidden="true">{item.icon}</div>
                    <h3 className="font-semibold text-dark-text mb-1 text-sm">{item.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teacher Eddie promo */}
            <div className="mb-12 warm-card p-8 border-2 border-gold/30 bg-warm-white">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0" aria-hidden="true">🤖</div>
                <div>
                  <h3 className="font-playfair font-bold text-xl text-dark-text mb-2">
                    Practice Anytime with Teacher Eddie AI
                  </h3>
                  <p className="text-muted text-base leading-relaxed mb-4">
                    Between lessons, use our free AI Guitar Buddy to practice chords, learn theory, get strumming patterns, or just ask guitar questions. Available 24/7, completely free.
                  </p>
                  <a
                    href={BUSINESS.teacherEddieUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-semibold rounded-xl hover:bg-gold-dark transition-colors text-sm"
                    aria-label="Try Teacher Eddie AI Guitar Buddy (opens in new tab)"
                  >
                    Try Eddie Free
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Instruments */}
            <div className="mb-12">
              <h2 className="font-playfair font-bold text-2xl text-dark-text mb-4">
                Instruments &amp; Styles Taught Online
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Acoustic Guitar", "Electric Guitar", "Classical Guitar", "Pop & Rock", "Bollywood", "Blues & Jazz", "Fingerstyle", "Classical & Flamenco"].map(
                  (item) => (
                    <Badge key={item} variant="green">
                      {item}
                    </Badge>
                  )
                )}
              </div>
            </div>

            {/* Internal links */}
            <div className="p-6 rounded-2xl bg-warm-white border border-gold-light/40">
              <p className="text-dark-text font-medium mb-3">
                Based in Delhi and prefer in-home lessons?
              </p>
              <Link
                href="/guitar-classes-delhi"
                className="text-gold font-semibold hover:text-gold-dark transition-colors"
              >
                Explore our Guitar Classes in Dwarka, Delhi →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Online-specific FAQ */}
      <FAQ
        faqs={onlineFaqs}
        title="FAQs — Online Guitar Classes"
        subtitle="Everything you need to know about learning guitar online with Mosaic."
      />

      {/* Lead Form */}
      <LeadForm defaultMode="online" />

      <StickyTrialCTA />
    </>
  );
}
