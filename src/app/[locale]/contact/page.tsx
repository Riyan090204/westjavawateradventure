import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { constructMetadata } from "@/lib/seo";
import { ContactView } from "@/components/contact/ContactView";

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
        ? "Kontak & Reservasi Trip — WhatsApp & Formulir Booking"
        : "Contact & Reservations — WhatsApp & Online Booking Inquiry",
    description:
      currentLocale === "id"
        ? "Hubungi tim West Java Diving untuk konsultasi jadwal, ketersediaan perahu ekspedisi, custom charter, dan reservasi spearfishing, freediving, atau scuba diving."
        : "Connect with the West Java Diving expedition desk for private vessel charters, seasonal availability, equipment rentals, and custom expedition planning in West Java, Indonesia.",
    locale: currentLocale,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <ContactView locale={locale as Locale} />;
}
