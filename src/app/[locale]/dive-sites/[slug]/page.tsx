import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { DIVE_SITES_DATA, getDiveSiteBySlug } from "@/data/dive-sites";
import { PACKAGES_DATA } from "@/data/packages";
import { DiveSiteDetailView } from "@/components/dive-site/DiveSiteDetailView";
import { constructMetadata, generateDiveSiteSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    DIVE_SITES_DATA.map((site) => ({
      locale,
      slug: site.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};

  const currentLocale = locale as Locale;
  const site = getDiveSiteBySlug(slug);

  if (!site) {
    return constructMetadata({ title: "Dive Site Not Found", noIndex: true });
  }

  const content = site.translations[currentLocale] || site.translations.en;

  return constructMetadata({
    title:
      currentLocale === "id"
        ? `${content.name} (${content.region}) — Info Titik Selam & Kondisi`
        : `${content.name} (${content.region}) — Dive Points & Conditions`,
    description: `${content.shortDescription} ${content.description.slice(0, 120)}...`,
    image: site.heroImage,
    locale: currentLocale,
    path: `/dive-sites/${site.slug}`,
  });
}

export default async function DiveSiteDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const site = getDiveSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  const content = site.translations[currentLocale] || site.translations.en;

  const relatedPackages = PACKAGES_DATA.filter((pkg) =>
    site.relatedPackageSlugs.includes(pkg.slug)
  );

  const placeSchema = generateDiveSiteSchema(
    {
      name: content.name,
      description: content.description,
      region: content.region,
      heroImage: site.heroImage,
      slug: site.slug,
    },
    currentLocale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <DiveSiteDetailView
        diveSite={site}
        relatedPackages={relatedPackages}
        locale={currentLocale}
      />
    </>
  );
}
