import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { getExperienceBySlug } from "@/data/experiences";
import { PACKAGES_DATA } from "@/data/packages";
import { DIVE_SITES_DATA } from "@/data/dive-sites";
import { ExperienceDetailView } from "@/components/experience/ExperienceDetailView";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const currentLocale = locale as Locale;
  const experience = getExperienceBySlug("spearfishing");
  if (!experience) return {};

  const content = experience.translations[currentLocale] || experience.translations.en;

  return constructMetadata({
    title:
      currentLocale === "id"
        ? "Spearfishing Jawa Barat — Panduan Berburu Karang & Blue Water"
        : "Spearfishing in West Java, Indonesia — Bluewater & Reef Hunting Guide",
    description: content.shortDescription,
    image: experience.heroImage,
    locale: currentLocale,
    path: "/experiences/spearfishing",
  });
}

export default async function SpearfishingPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const experience = getExperienceBySlug("spearfishing");
  if (!experience) notFound();

  const relatedPackages = PACKAGES_DATA.filter((pkg) =>
    experience.relatedPackageSlugs.includes(pkg.slug)
  );

  const relatedDiveSites = DIVE_SITES_DATA.filter((site) =>
    experience.relatedDiveSiteSlugs.includes(site.slug)
  );

  return (
    <ExperienceDetailView
      experience={experience}
      relatedPackages={relatedPackages}
      relatedDiveSites={relatedDiveSites}
      locale={currentLocale}
    />
  );
}
