import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { Locale, DEFAULT_LOCALE } from "@/types/locale";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string; // Path without locale prefix (e.g. "/experiences/spearfishing" or "/trips/3d2n")
  locale?: Locale;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  image = SITE_CONFIG.ogImage,
  path = "",
  locale = DEFAULT_LOCALE,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  const defaultDesc = SITE_CONFIG.descriptions[locale] || SITE_CONFIG.descriptions.en;
  const pageDescription = description || defaultDesc;

  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.taglines[locale] || SITE_CONFIG.taglines.en}`;

  const currentUrl = `${SITE_CONFIG.url}/${locale}${cleanPath}`;
  const enUrl = `${SITE_CONFIG.url}/en${cleanPath}`;
  const idUrl = `${SITE_CONFIG.url}/id${cleanPath}`;

  return {
    title: fullTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: enUrl,
        id: idUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: currentUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema(locale: Locale = DEFAULT_LOCALE) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.descriptions[locale] || SITE_CONFIG.descriptions.en,
    url: `${SITE_CONFIG.url}/${locale}`,
    telephone: SITE_CONFIG.whatsappDisplay,
    email: SITE_CONFIG.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: locale === "id" ? "Jawa Barat, Indonesia" : "West Java, Indonesia",
    },
    sameAs: [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.youtube,
      SITE_CONFIG.socials.tiktok,
    ],
  };
}

export function generatePackageSchema(
  pkg: {
    name: string;
    description: string;
    priceDisplay: string;
    heroImage: string;
    location: string;
    slug: string;
  },
  locale: Locale = DEFAULT_LOCALE
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.description,
    image: pkg.heroImage,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "0",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/ListPrice",
        description: pkg.priceDisplay,
      },
      availability: "https://schema.org/InStock",
      url: `${SITE_CONFIG.url}/${locale}/trips/${pkg.slug}`,
    },
  };
}

export function generateDiveSiteSchema(
  site: {
    name: string;
    description: string;
    region: string;
    heroImage: string;
    slug: string;
  },
  locale: Locale = DEFAULT_LOCALE
) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: site.name,
    description: site.description,
    image: site.heroImage,
    address: {
      "@type": "PostalAddress",
      addressRegion: site.region,
      addressCountry: "ID",
    },
    url: `${SITE_CONFIG.url}/${locale}/dive-sites/${site.slug}`,
  };
}
