import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { getMusicSchoolSchema, getWebsiteSchema } from "@/lib/schemas";
import { BUSINESS } from "@/lib/constants";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default:
      "Mosaic School of Music — Guitar Classes in Delhi & Online | Acoustic, Electric, Classical",
    template: "%s | Mosaic School of Music",
  },
  description:
    "Learn guitar with personalized 1:1 lessons — online across India or home tuitions in Dwarka, Delhi. Acoustic, electric & classical guitar for all ages and levels. Book a free trial class!",
  keywords: [
    "guitar classes Delhi",
    "guitar classes Dwarka",
    "online guitar classes India",
    "guitar teacher Delhi",
    "guitar lessons Dwarka",
    "learn guitar Delhi",
    "acoustic guitar classes",
    "electric guitar lessons",
    "classical guitar Delhi",
    "1:1 guitar lessons",
    "home guitar tuition Delhi",
    "guitar classes for beginners",
    "Mosaic School of Music",
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.domain }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title:
      "Mosaic School of Music — Guitar Classes in Delhi & Online",
    description:
      "Learn guitar with personalized 1:1 lessons — online across India or home tuitions in Dwarka, Delhi. All ages, all levels. Book a free trial class!",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Mosaic School of Music — Guitar Classes in Delhi & Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosaic School of Music — Guitar Classes in Delhi & Online",
    description:
      "Learn guitar with personalized 1:1 lessons — online across India or home tuitions in Dwarka, Delhi.",
    images: ["/images/og-default.png"],
  },
  alternates: {
    canonical: BUSINESS.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1B4332",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const musicSchoolSchema = getMusicSchoolSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicSchoolSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Preconnect hints */}
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="bg-cream antialiased">
        {/* Skip to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
