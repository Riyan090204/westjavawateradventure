import React from "react";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { PACKAGES_DATA, getPackageBySlug } from "@/data/packages";
import { getDiveSiteBySlug } from "@/data/dive-sites";
import { PackageDetailView } from "@/components/package/PackageDetailView";
import { constructMetadata, generatePackageSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    PACKAGES_DATA.map((pkg) => ({
      locale,
      slug: pkg.slug,
    }))
  );
}

const LEGACY_SLUG_MAP: Record<string, string> = {
  "1day-spearfishing-reef-hunt": "2d1n-spearfishing-trip",
  "2d1n-west-java-scuba-fundive": "2d1n-scuba-diving-safari",
  "private-custom-spearfishing-charter": "custom-spearfishing-charter",
  "1day-freediving-clinic-fundive": "2d1n-freedive-depth-reef",
  "1day-discovery-scuba-experience": "2d1n-scuba-diving-safari",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};

  const currentLocale = locale as Locale;
  const resolvedSlug = LEGACY_SLUG_MAP[slug] || slug;
  const pkg = getPackageBySlug(resolvedSlug);

  if (!pkg) {
    return constructMetadata({ title: "Package Not Found", noIndex: true });
  }

  const content = pkg.translations[currentLocale] || pkg.translations.en;

  return constructMetadata({
    title:
      currentLocale === "id"
        ? `${content.name} — ${content.duration} di Jawa Barat`
        : `${content.name} — ${content.duration} in West Java, Indonesia`,
    description: `${content.shortDescription} ${content.description.slice(0, 120)}...`,
    image: pkg.heroImage,
    locale: currentLocale,
    path: `/trips/${pkg.slug}`,
  });
}

export default async function TripDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  // Handle backward-compatible redirects for previous slugs
  if (LEGACY_SLUG_MAP[slug]) {
    redirect(`/${locale}/trips/${LEGACY_SLUG_MAP[slug]}`);
  }

  const currentLocale = locale as Locale;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const content = pkg.translations[currentLocale] || pkg.translations.en;

  const relatedDiveSite = pkg.diveSiteSlug
    ? getDiveSiteBySlug(pkg.diveSiteSlug)
    : undefined;

  const productSchema = generatePackageSchema(
    {
      name: content.name,
      description: content.description,
      priceDisplay: content.priceDisplay,
      heroImage: pkg.heroImage,
      location: content.location,
      slug: pkg.slug,
    },
    currentLocale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PackageDetailView
        pkg={pkg}
        relatedDiveSite={relatedDiveSite}
        locale={currentLocale}
      />
    </>
  );
}
