import type { Metadata } from "next";
import { BUSINESS } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/images/og-default.jpg",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${BUSINESS.domain}${path}`;
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${BUSINESS.domain}${ogImage}`;

  return {
    title,
    description,
    metadataBase: new URL(BUSINESS.domain),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
