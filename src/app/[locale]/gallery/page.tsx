import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryFilter } from "@/components/gallery/GalleryFilter";
import { GALLERY_DATA } from "@/data/gallery";
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
        ? "Galeri Bawah Laut & Trip — Dokumentasi Petualangan"
        : "Underwater & Expedition Gallery — West Java Adventures",
    description:
      currentLocale === "id"
        ? "Galeri foto dokumentasi aktivitas spearfishing, freediving, scuba diving, dan keindahan terumbu karang bawah laut di Jawa Barat."
        : "Visual log and photo gallery of spearfishing, freediving, scuba diving, and coral reef exploration in West Java, Indonesia.",
    locale: currentLocale,
    path: "/gallery",
  });
}

export default async function GalleryPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: dict.nav.gallery }]} locale={currentLocale} />

        <SectionHeader
          badge={currentLocale === "id" ? "Dokumentasi Visual" : "Visual Expedition Log"}
          title={
            currentLocale === "id"
              ? "Galeri Petualangan Bawah Laut"
              : "Underwater Adventure Gallery"
          }
          description={
            currentLocale === "id"
              ? "Eksplorasi dokumentasi visual ekspedisi kami di berbagai zona perairan Jawa Barat, dari pesisir hingga laut lepas."
              : "Captures and real footage from our ocean expeditions across coastal bays, island drop-offs, and offshore pinnacles."
          }
        />

        <GalleryFilter items={GALLERY_DATA} locale={currentLocale} />
      </div>
    </div>
  );
}
