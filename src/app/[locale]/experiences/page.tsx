import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale, LOCALES } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EXPERIENCES_DATA } from "@/data/experiences";
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
        ? "Pengalaman Selam — Spearfishing, Freediving & Scuba Diving"
        : "Underwater Experiences — Spearfishing, Freediving & Scuba Diving",
    description:
      currentLocale === "id"
        ? "Pelajari tiga pilar utama petualangan bawah laut di Jawa Barat: Spearfishing beretika, Freediving apnea, dan Scuba Diving eksplorasi terumbu karang."
        : "Explore the three core underwater adventure pillars in West Java, Indonesia: Ethical Spearfishing, Apnea Freediving, and Scuba Diving reef exploration.",
    locale: currentLocale,
    path: "/experiences",
  });
}

export default async function ExperiencesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: dict.nav.experiences }]} locale={currentLocale} />

        <SectionHeader
          badge={currentLocale === "id" ? "Edukasi & Pengenalan" : "Overview & Educational Guides"}
          title={
            currentLocale === "id"
              ? "Tiga Pilar Pengalaman Bawah Laut"
              : "Three Core Ocean Experiences"
          }
          description={
            currentLocale === "id"
              ? "Halaman edukasi dan panduan untuk memahami disiplin setiap aktivitas, kualifikasi level, peralatan yang dibutuhkan, serta standar keselamatan laut."
              : "Comprehensive educational guides explaining disciplines, prerequisites, required equipment, and safety standards for each underwater activity."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} locale={currentLocale} />
          ))}
        </div>
      </div>
    </div>
  );
}
