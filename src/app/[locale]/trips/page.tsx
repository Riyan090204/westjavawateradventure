import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PackageFilter } from "@/components/package/PackageFilter";
import { PACKAGES_DATA } from "@/data/packages";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    activity?: string;
    format?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const currentLocale = locale as Locale;

  return constructMetadata({
    title:
      currentLocale === "id"
        ? "Trips & Paket — Spearfishing, Freediving & Scuba Diving"
        : "Trips & Expedition Packages — Spearfishing, Freediving & Scuba",
    description:
      currentLocale === "id"
        ? "Katalog paket trip komersial bawah laut di Jawa Barat: Join Trip, Private Charter, dan Custom Expedition dengan harga transparan dan reservasi via WhatsApp / Email."
        : "Catalog of commercial underwater expeditions in West Java, Indonesia. Join trips, private vessel charters, and custom diving expeditions.",
    locale: currentLocale,
    path: "/trips",
  });
}

export default async function TripsPage({ params, searchParams }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);
  const sParams = await searchParams;
  const initialActivity = sParams.activity || "all";
  const initialFormat = sParams.format || "all";

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: dict.nav.trips }]} locale={currentLocale} />

        <SectionHeader
          badge={currentLocale === "id" ? "Katalog Produk Komersial" : "Commercial Expeditions"}
          title={dict.nav.trips}
          description={
            currentLocale === "id"
              ? "Pilih petualangan bawah laut Anda di Jawa Barat. Setiap trip dirancang dengan standar keselamatan tinggi, pemandu tersertifikasi, dan fasilitas lengkap."
              : "Discover curated diving and spearfishing adventures in West Java, Indonesia. Uncompromising safety, certified safety guides, and seamless booking."
          }
        />

        <PackageFilter
          initialPackages={PACKAGES_DATA}
          initialActivity={initialActivity}
          initialFormat={initialFormat}
          locale={currentLocale}
        />
      </div>
    </div>
  );
}
