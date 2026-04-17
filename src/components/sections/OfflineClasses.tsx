import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export default function OfflineClasses() {
  return (
    <section
      id="offline-classes"
      className="section-padding bg-warm-white"
      aria-label="Offline guitar classes announcement"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto warm-card border border-gold/30 gold-border-top overflow-hidden">
          {/* Group class photo */}
          <div className="relative h-56 md:h-72 w-full">
            <Image
              src="/images/group-class.webp"
              alt="Group guitar class with instructor and students"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 896px"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-10">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-light text-gold-dark border border-gold/30 mb-4">
            New Batch Announcement
          </p>
          <h2 className="font-playfair font-bold text-2xl md:text-3xl text-dark-text mb-4 whitespace-nowrap">
            Offline Guitar Classes Starting 15th May 2026
          </h2>
          <p className="text-muted text-lg leading-relaxed mb-3">
            New offline classes are opening in Sector 7, Dwarka.
          </p>
          <p className="text-muted text-base leading-relaxed mb-8">
            Parents can contact us for class timings, fees, and seat availability.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              aria-label="Chat with us on WhatsApp for offline class details"
            >
              Contact on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-xl hover:bg-gold hover:text-white transition-colors"
              aria-label={`Call us at ${BUSINESS.phoneDisplay} for offline class details`}
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
