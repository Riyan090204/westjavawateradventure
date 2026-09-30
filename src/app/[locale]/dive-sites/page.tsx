import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DiveSiteGrid } from "@/components/dive-site/DiveSiteGrid";
import { DIVE_SITES_DATA } from "@/data/dive-sites";
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

  return constructMetadata({
    title:
      currentLocale === "id"
        ? "Direktori Dive Sites — Lokasi & Titik Selam Jawa Barat"
        : "Dive Sites Directory — West Java, Indonesia Dive Spots",
    description:
      currentLocale === "id"
        ? "Direktori lokasi selam, gugusan karang, offshore pinnacle, dan titik drop-off di perairan Jawa Barat untuk spearfishing, freediving, dan scuba diving."
        : "Comprehensive directory of dive sites, volcanic pinnacles, fringing coral reefs, and drop-off walls across West Java, Indonesia.",
    locale: currentLocale,
    path: "/dive-sites",
  });
}

export default async function DiveSitesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: dict.nav.diveSites }]} locale={currentLocale} />

        <SectionHeader
          badge={currentLocale === "id" ? "Direktori Destinasi" : "Destinations Directory"}
          title={
            currentLocale === "id"
              ? "Direktori Dive Sites Jawa Barat"
              : "West Java Dive Sites Directory"
          }
          description={
            currentLocale === "id"
              ? "Eksplorasi spot-spot fisik penyelaman di seluruh kawasan pesisir, kepulauan, dan lautan lepas Jawa Barat dengan rincian dive point, kedalaman, dan karakter arusnya."
              : "Discover physical dive sites across coastal reefs, outer island walls, and offshore pinnacles in West Java with depth profiles and marine life summaries."
          }
        />

        <DiveSiteGrid diveSites={DIVE_SITES_DATA} locale={currentLocale} />
      </div>
    </div>
  );
}
