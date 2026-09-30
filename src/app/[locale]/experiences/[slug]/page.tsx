import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { EXPERIENCES_DATA, getExperienceBySlug } from "@/data/experiences";
import { PACKAGES_DATA } from "@/data/packages";
import { DIVE_SITES_DATA } from "@/data/dive-sites";
import { ExperienceDetailView } from "@/components/experience/ExperienceDetailView";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    EXPERIENCES_DATA.map((exp) => ({
      locale,
      slug: exp.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};

  const currentLocale = locale as Locale;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return constructMetadata({ title: "Experience Not Found", noIndex: true });
  }

  const content = experience.translations[currentLocale] || experience.translations.en;

  return constructMetadata({
    title:
      currentLocale === "id"
        ? `${content.name} Jawa Barat — Panduan & Informasi Lengkap`
        : `${content.name} in West Java, Indonesia — Comprehensive Guide & Safety`,
    description: `${content.shortDescription} ${content.overview.slice(0, 120)}...`,
    image: experience.heroImage,
    locale: currentLocale,
    path: `/experiences/${experience.slug}`,
  });
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

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
