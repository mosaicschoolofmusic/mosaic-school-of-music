import { BUSINESS } from "@/lib/constants";

export default function OfflineClasses() {
  return (
    <section
      id="offline-classes"
      className="section-padding bg-warm-white"
      aria-label="Offline guitar classes announcement"
    >
      <div className="container-max">
        <div className="max-w-4xl mx-auto warm-card p-8 md:p-10 border border-gold/30 gold-border-top">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold-light text-gold-dark border border-gold/30 mb-4">
            New Batch Announcement
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-dark-text mb-4">
            Offline Guitar Classes Starting 2nd May 2026
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
    </section>
  );
}
