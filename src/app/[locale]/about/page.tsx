import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { constructMetadata } from "@/lib/seo";
import { ShieldCheck, Anchor, Waves, Users, MessageCircle } from "lucide-react";

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
        ? "Tentang Kami — Operator Petualangan Bawah Laut Jawa Barat"
        : "About Us — Premier West Java Underwater Adventure Operator",
    description:
      currentLocale === "id"
        ? "Mengenal visi, standar operasional, keselamatan, dan dedikasi kami dalam menghadirkan pengalaman spearfishing, freediving, dan scuba diving terbaik di Jawa Barat."
        : "Learn about our safety ethos, certified dive guides, vessel fleet, and commitment to marine conservation in West Java, Indonesia.",
    locale: currentLocale,
    path: "/about",
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <div className="bg-slate-950 py-16 sm:py-24 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumb items={[{ label: dict.nav.about }]} locale={currentLocale} />

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/60">
              <Anchor className="w-3.5 h-3.5" />
              <span>{currentLocale === "id" ? "Visi & Etika Kami" : "Our Vision & Ethos"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {currentLocale === "id"
                ? "Membuka Potensi Petualangan Bawah Laut di Jawa Barat"
                : "Unlocking West Java's World-Class Underwater Potential"}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {currentLocale === "id"
                ? "Kami didirikan oleh para penggiat laut yang berdedikasi untuk memperkenalkan keindahan, tantangan, dan kekayaan ekosistem perairan Jawa Barat melalui pendekatan yang aman, beretika, dan profesional."
                : "Founded by passionate ocean practitioners, we are dedicated to showcasing the raw beauty, biodiversity, and dynamic underwater terrain of West Java through uncompromising safety standards, certified guiding, and ethical exploration."}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {currentLocale === "id"
                ? "Jawa Barat memiliki kekayaan garis pantai yang membentang dari teluk-teluk terlindung hingga perairan Samudra Hindia yang menantang. Kami memadukan pemahaman mendalam tentang karakter arus lokal dengan protokol keselamatan diving bertaraf internasional."
                : "Spanning sheltered fringing coral bays to deep oceanic upwellings in the Indian Ocean, our expeditions combine intimate local sea knowledge with international dive safety and emergency medical preparedness."}
            </p>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
              alt="About West Java Ocean Operator"
              fill
              className="object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                {currentLocale === "id" ? "Komitmen Keselamatan" : "Safety Commitment"}
              </span>
              <p className="text-xs text-slate-200 mt-0.5">
                {currentLocale === "id"
                  ? "Penyelaman terencana, rasio rasional, dan perlengkapan cadangan di setiap armada."
                  : "Planned dive profiles, small guest-to-guide ratios, and redundant safety equipment on every vessel."}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <section className="space-y-8">
          <SectionHeader
            badge={currentLocale === "id" ? "Prinsip Kerja" : "Core Values"}
            title={
              currentLocale === "id"
                ? "Nilai Utama yang Kami Pegang Teguh"
                : "Principles Guiding Every Expedition"
            }
            description={
              currentLocale === "id"
                ? "Tiga pilar utama dalam setiap pelayaran dan ekspedisi bawah laut kami."
                : "Three fundamental pillars embedded in every voyage and open-water session we operate."
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                1. Uncompromising Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Kami tidak pernah berkompromi dengan keselamatan di laut. Setiap penyelaman diawasi oleh buddy terlatih, dilengkapi floatline, emergency oxygen kit, dan verifikasi cuaca maritim."
                  : "Safety is non-negotiable. Every dive profile is managed under strict buddy protocols, surface floatlines, certified safety divers, and onboard medical oxygen units."}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                2. Ethical & Sustainable Harvesting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Pada divisi spearfishing, kami menjunjung tinggi kode etik: hanya mengambil spesies layak konsumsi dengan batas ukuran matang, tidak menembak ikan karang hias/dilindungi, dan menjaga kelestarian terumbu karang."
                  : "In spearfishing, we enforce selective harvesting: targeting only mature table species, strictly zero harvest of protected marine species, and total protection of living reef structures."}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                3. Local Community Partnership
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Kami bermitra erat dengan nelayan lokal dan kapten kapal pesisir Jawa Barat. Kolaborasi ini memberikan dampak ekonomi positif bagi masyarakat lokal sekaligus meningkatkan keselamatan pelayaran berkat kearifan maritim setempat."
                  : "We partner directly with local coastal skippers and fishermen across West Java, creating sustainable economic opportunities while ensuring unmatched navigation insights in local waters."}
              </p>
            </div>
          </div>
        </section>

        {/* Direct CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              {currentLocale === "id"
                ? "Ingin Bergabung di Ekspedisi Berikutnya?"
                : "Ready to Join an Upcoming Ocean Expedition?"}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              {currentLocale === "id"
                ? "Hubungi kami untuk mengetahui jadwal open trip terdekat, merancang private expedition, atau konsultasi perlengkapan selam."
                : "Contact our team to check upcoming trip dates, discuss custom vessel charters, or ask about gear requirements."}
            </p>
          </div>

          <a
            href={buildWhatsAppGeneralUrl(currentLocale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-lg shadow-emerald-950/50 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{dict.common.bookWhatsApp}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
