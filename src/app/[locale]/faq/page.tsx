import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQS_DATA } from "@/data/faqs";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { constructMetadata } from "@/lib/seo";
import { MessageCircle } from "lucide-react";

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
        ? "Frequently Asked Questions (FAQ) — Informasi & Persiapan Trip"
        : "Frequently Asked Questions (FAQ) — Trip Preparation & Policies",
    description:
      currentLocale === "id"
        ? "Pertanyaan umum seputar persiapan trip spearfishing, freediving, scuba diving, penyewaan alat, kualifikasi fisik, dan kebijakan pemesanan di Jawa Barat."
        : "Answers to common questions regarding gear rental, certification requirements, ocean safety protocols, and international payment policies in West Java, Indonesia.",
    locale: currentLocale,
    path: "/faq",
  });
}

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ label: dict.nav.faq }]} locale={currentLocale} />

        <SectionHeader
          badge={currentLocale === "id" ? "Pusat Bantuan & Edukasi" : "Help & Preparation"}
          title="Frequently Asked Questions"
          description={
            currentLocale === "id"
              ? "Temukan jawaban cepat mengenai prosedur operasional, sewa perlengkapan, standar kualifikasi penyelaman, hingga kebijakan keselamatan laut kami."
              : "Find direct answers regarding gear provisions, certification prerequisites, weather management, and booking procedures."
          }
        />

        <FAQAccordion items={FAQS_DATA} locale={currentLocale} />

        {/* Bottom Help Box */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-2xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-xl font-bold text-white">
            {currentLocale === "id"
              ? "Punya Pertanyaan Khusus yang Belum Terjawab?"
              : "Have a Specific Question Not Listed Here?"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentLocale === "id"
              ? "Tim kami siap membantu menjelaskan detail teknis penyelaman, rekomendasi spot sesuai musim, dan estimasi biaya ekspedisi privat."
              : "Our expedition coordinators are available to clarify gear logistics, season recommendations, and custom group quotes."}
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppGeneralUrl(currentLocale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{dict.common.bookWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
