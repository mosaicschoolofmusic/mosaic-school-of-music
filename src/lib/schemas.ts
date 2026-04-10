import { BUSINESS, FAQS } from "./constants";

export function getMusicSchoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MusicSchool", "LocalBusiness"],
    name: BUSINESS.name,
    description:
      "Guitar classes in Delhi and online across India. Personalized 1:1 lessons for acoustic, electric, and classical guitar. All ages and levels welcome.",
    url: BUSINESS.domain,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dwarka",
      addressLocality: "Dwarka",
      addressRegion: "Delhi",
      postalCode: "110078",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5921",
      longitude: "77.0460",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [BUSINESS.socials.facebook, BUSINESS.socials.instagram],
    priceRange: "$$",
    image: `${BUSINESS.domain}/images/logo.png`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Guitar Classes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Guitar Classes",
            description:
              "Live 1:1 online guitar lessons via video call for students across India",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Guitar Tuitions Delhi",
            description:
              "Personalized 1:1 guitar lessons at your home in Dwarka and nearby areas, Delhi",
          },
        },
      ],
    },
  };
}

export function getFAQSchema(faqs?: ReadonlyArray<{ question: string; answer: string }>) {
  const faqItems = faqs ?? FAQS;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getOnlineCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Online Guitar Classes — Live 1:1",
    description:
      "Live 1:1 online guitar lessons for students across India. Learn acoustic, electric, or classical guitar from experienced instructors via video call.",
    provider: {
      "@type": "MusicSchool",
      name: BUSINESS.name,
      url: BUSINESS.domain,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Online",
      serviceUrl: `${BUSINESS.domain}/online-guitar-classes`,
    },
    courseMode: "Online",
    inLanguage: ["en", "hi"],
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${BUSINESS.domain}/online-guitar-classes`,
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        instructor: {
          "@type": "Person",
          name: "Mosaic School of Music Instructors",
        },
      },
    ],
  };
}

export function getInPersonCourseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Guitar Classes in Dwarka, Delhi — 1:1 Home Tuitions",
    description:
      "Personalized 1:1 in-home guitar tuitions in Dwarka and nearby areas of Delhi. Acoustic, electric, and classical guitar for all ages and skill levels.",
    provider: {
      "@type": "MusicSchool",
      name: BUSINESS.name,
      url: BUSINESS.domain,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "In-person",
      serviceUrl: `${BUSINESS.domain}/guitar-classes-delhi`,
      availableLanguage: ["en", "hi"],
    },
    courseMode: "In-person",
    inLanguage: ["en", "hi"],
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `${BUSINESS.domain}/guitar-classes-delhi`,
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: {
          "@type": "Place",
          name: "At your home",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dwarka",
            addressRegion: "Delhi",
            addressCountry: "IN",
          },
        },
      },
    ],
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.domain,
    description:
      "Learn guitar with personalized 1:1 lessons — online across India or home tuitions in Dwarka, Delhi.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.domain}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
