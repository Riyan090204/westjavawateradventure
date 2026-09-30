import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Locale } from "@/types/locale";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import { HeroSection } from "@/components/hero/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { PackageCard } from "@/components/package/PackageCard";
import { DiveSiteCard } from "@/components/dive-site/DiveSiteCard";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { EXPERIENCES_DATA } from "@/data/experiences";
import { getFeaturedPackages } from "@/data/packages";
import { DIVE_SITES_DATA } from "@/data/dive-sites";
import { GALLERY_DATA } from "@/data/gallery";
import { FAQS_DATA } from "@/data/faqs";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { constructMetadata } from "@/lib/seo";
import {
  ShieldCheck,
  Award,
  LifeBuoy,
  Anchor,
  Compass,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return constructMetadata({
    locale: locale as Locale,
    path: "/",
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);
  const featuredPackages = getFeaturedPackages();
  const previewGallery = GALLERY_DATA.slice(0, 6);
  const previewFaqs = FAQS_DATA.slice(0, 5);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <HeroSection locale={currentLocale} />

      {/* 2. CHOOSE YOUR EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={currentLocale === "id" ? "Pilar Aktivitas" : "Core Experiences"}
          title={
            currentLocale === "id"
              ? "Tiga Pengalaman Utama Bawah Laut"
              : "Three Core Underwater Experiences"
          }
          description={
            currentLocale === "id"
              ? "Pahami esensi setiap aktivitas sebelum menentukan trip yang tepat. Dari seni berburu selektif hingga ketenangan apnea dan eksplorasi terumbu karang."
              : "Understand the philosophy, requirements, and safety protocols of each activity before choosing your expedition."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES_DATA.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} locale={currentLocale} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED TRIPS & PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLocale === "id" ? "Produk Komersial" : "Commercial Expeditions"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {currentLocale === "id" ? "Trip & Paket Unggulan" : "Featured Trips & Packages"}
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              {currentLocale === "id"
                ? "Pilihan paket ekspedisi siap pesan dengan rincian jadwal, akomodasi, dan perahu operasional lengkap di Jawa Barat."
                : "Curated multi-day expeditions, private charters, and day safaris in West Java with clear itineraries and transparent inclusions."}
            </p>
          </div>

          <Link
            href={`/${currentLocale}/trips`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-cyan-400 text-sm font-semibold transition-colors flex-shrink-0"
          >
            <span>{dict.common.viewAllTrips}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} locale={currentLocale} />
          ))}
        </div>
      </section>

      {/* 4. EXPLORE DIVE SITES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>{currentLocale === "id" ? "Destinasi Fisik" : "Destinations & Spot Points"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {currentLocale === "id" ? "Jelajahi Dive Sites Jawa Barat" : "Explore West Java Dive Sites"}
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              {currentLocale === "id"
                ? "Dari perairan karang dangkal hingga formasi pinnacle lepas pantai dan dinding jurang laut dalam."
                : "From sheltered fringing coral bays to offshore volcanic pinnacles and sheer ocean drop-off walls."}
            </p>
          </div>

          <Link
            href={`/${currentLocale}/dive-sites`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-cyan-400 text-sm font-semibold transition-colors flex-shrink-0"
          >
            <span>{dict.nav.diveSites}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DIVE_SITES_DATA.map((site) => (
            <DiveSiteCard key={site.slug} diveSite={site} locale={currentLocale} />
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US / STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 space-y-12">
          <SectionHeader
            badge={currentLocale === "id" ? "Standar Profesional" : "Operational Standards"}
            title={
              currentLocale === "id"
                ? "Mengapa Memilih Ekspedisi Kami?"
                : "Why Choose West Java Ocean Expeditions?"
            }
            description={
              currentLocale === "id"
                ? "Kami menggabungkan pengetahuan kearifan lokal perairan Jawa Barat dengan standar keselamatan internasional."
                : "We blend profound local maritime knowledge with internationally recognized dive safety protocols and small group guest attention."
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {currentLocale === "id" ? "Protokol Keselamatan Teruji" : "Uncompromising Safety"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Unit oksigen darurat (DAN Kit), P3K laut, float marker buoy, dan briefing arus detail di setiap trip."
                  : "Onboard emergency oxygen (DAN Kit), marine first aid, high-visibility dive floats, and real-time current checks."}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {currentLocale === "id" ? "Guide & Instruktur Bersertifikat" : "Certified Guides & Instructors"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Didampingi oleh Divemaster PADI/SSI dan instruktur freedive berpengalaman jam selam tinggi."
                  : "Escorted by certified PADI/SSI Divemasters, certified freedive instructors, and seasoned ocean spearos."}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {currentLocale === "id" ? "Perahu Khusus & Kapten Lokal" : "Dedicated Vessels & Local Skippers"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Armada perahu ekspedisi siap laut dengan kapten lokal yang memahami pola ombak dan pasang surut."
                  : "Sea-worthy expedition vessels helmed by local master skippers who know West Java's currents and reefs intimately."}
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                {currentLocale === "id" ? "Konservasi & Ethical Harvest" : "Conservation & Ethical Harvesting"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentLocale === "id"
                  ? "Prinsip selektif dan pelestarian karang untuk menjaga keberlanjutan ekosistem laut Jawa Barat."
                  : "Strict selective hunting guidelines and leave-no-trace practices preserving West Java's pristine marine life."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={currentLocale === "id" ? "Alur Pemesanan" : "Booking Journey"}
          title={
            currentLocale === "id"
              ? "Bagaimana Memulai Trip Anda?"
              : "How to Plan Your Expedition"
          }
          description={
            currentLocale === "id"
              ? "Langkah praktis dan terstruktur dari pemilihan paket hingga hari keberangkatan."
              : "Seamless steps from choosing your activity to meeting our dive crew in West Java."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {(currentLocale === "id"
            ? [
                {
                  step: "01",
                  title: "Pilih Aktivitas & Paket",
                  desc: "Pelajari rincian pengalaman (Spearfishing, Freedive, Scuba) dan pilih paket sesuai durasi serta level Anda.",
                },
                {
                  step: "02",
                  title: "Konsultasi WhatsApp / Email",
                  desc: "Hubungi tim kami untuk konfirmasi tanggal ketersediaan jadwal, custom permintaan, dan verifikasi lisensi.",
                },
                {
                  step: "03",
                  title: "Konfirmasi & Gear Prep",
                  desc: "Dapatkan briefing titik kumpul, rekomendasi perlengkapan, dan invoice pembayaran resmi.",
                },
                {
                  step: "04",
                  title: "Ekspedisi Laut",
                  desc: "Tiba di dermaga, nikmati petualangan laut terbuka dengan pendampingan tim profesional kami.",
                },
              ]
            : [
                {
                  step: "01",
                  title: "Select Activity & Trip",
                  desc: "Review experience guides (Spearfishing, Freediving, Scuba) and select a package matching your schedule.",
                },
                {
                  step: "02",
                  title: "WhatsApp or Email Inquiry",
                  desc: "Connect directly with our expedition coordinator for date availability, charter customisation, and quotes.",
                },
                {
                  step: "03",
                  title: "Confirmation & Gear Briefing",
                  desc: "Receive clear meeting point logistics, gear checklists, and an official digital reservation invoice.",
                },
                {
                  step: "04",
                  title: "Set Sail & Dive",
                  desc: "Arrive at the harbour basecamp and embark on an unforgettable underwater ocean expedition.",
                },
              ]
          ).map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 relative group hover:border-cyan-500/40 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-3xl font-black font-mono text-cyan-400/40 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionHeader
              badge={currentLocale === "id" ? "Galeri Lapangan" : "Visual Log"}
              title={
                currentLocale === "id"
                  ? "Dokumentasi Bawah Air & Ekspedisi"
                  : "Underwater & Expedition Gallery"
              }
              description={
                currentLocale === "id"
                  ? "Potret nyata keindahan biota laut, aksi spearo, dan keheningan freediver di perairan Jawa Barat."
                  : "Real footage and underwater captures from our spearfishing, freediving, and scuba expeditions."
              }
              align="left"
              className="mb-0"
            />
          </div>

          <Link
            href={`/${currentLocale}/gallery`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-slate-800 text-cyan-400 text-sm font-semibold transition-colors flex-shrink-0"
          >
            <span>{dict.nav.gallery}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewGallery.map((item) => {
            const galContent = item.translations[currentLocale] || item.translations.en;
            return (
              <div
                key={item.id}
                className="group relative h-72 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800"
              >
                <Image
                  src={item.image}
                  alt={galContent.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider block">
                    {galContent.location}
                  </span>
                  <h3 className="text-sm font-bold text-white truncate">
                    {galContent.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. FAQ PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={currentLocale === "id" ? "Pertanyaan Umum" : "Help & FAQ"}
          title="Frequently Asked Questions"
          description={
            currentLocale === "id"
              ? "Jawaban seputar perizinan, kelayakan fisik, perlengkapan, dan prosedur reservasi."
              : "Common questions regarding travel preparation, gear hire, certification requirements, and bookings."
          }
        />

        <FAQAccordion items={previewFaqs} locale={currentLocale} />

        <div className="text-center pt-8">
          <Link
            href={`/${currentLocale}/faq`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>{currentLocale === "id" ? "Lihat Semua FAQ" : "View All Frequently Asked Questions"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 9. FINAL BOOKING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-900 via-blue-900 to-slate-950 border border-cyan-700/50 p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold tracking-wider uppercase">
              {currentLocale === "id" ? "Rencanakan Petualangan Anda" : "Plan Your Expedition"}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {currentLocale === "id"
                ? "Siap Menjelajahi Kedalaman Laut Jawa Barat?"
                : "Ready to Explore the Waters of West Java?"}
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {currentLocale === "id"
                ? "Diskusikan rencana trip, private charter, maupun pertanyaan mengenai persiapan alat langsung bersama tim operasional kami."
                : "Discuss your expedition dates, private vessel charter, or gear questions directly with our dive desk via WhatsApp or Email."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={buildWhatsAppGeneralUrl(currentLocale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-colors shadow-xl shadow-emerald-950/60"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{dict.common.bookWhatsApp}</span>
            </a>

            <Link
              href={`/${currentLocale}/trips`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 font-semibold text-base transition-colors"
            >
              <span>{dict.common.viewAllTrips}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
