import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types/experience";
import { Package } from "@/types/package";
import { DiveSite } from "@/types/dive-site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { PackageCard } from "@/components/package/PackageCard";
import { DiveSiteCard } from "@/components/dive-site/DiveSiteCard";
import { buildWhatsAppExperienceInquiryUrl } from "@/lib/whatsapp";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Eye,
  Wind,
  Calendar,
} from "lucide-react";

interface ExperienceDetailViewProps {
  experience: Experience;
  relatedPackages: Package[];
  relatedDiveSites: DiveSite[];
  locale?: Locale;
}

export function ExperienceDetailView({
  experience,
  relatedPackages,
  relatedDiveSites,
  locale = "en",
}: ExperienceDetailViewProps) {
  const content = experience.translations[locale] || experience.translations.en;
  const dict = getDictionary(locale);

  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Hero Header */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={experience.heroImage}
            alt={content.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumb
            items={[
              { label: dict.nav.experiences, href: `/${locale}/experiences` },
              { label: content.name },
            ]}
            locale={locale}
            className="mb-6"
          />

          <div className="max-w-3xl space-y-4">
            <Badge variant="activity" value={experience.activity} className="text-sm px-3 py-1" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {content.name}
            </h1>
            <p className="text-lg sm:text-xl text-cyan-300 font-medium">
              {content.tagline}
            </p>
            <p className="text-base text-slate-300 leading-relaxed">
              {content.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppExperienceInquiryUrl(content.name, locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {locale === "id" ? "Tanya Program via WhatsApp" : "Inquire via WhatsApp"}
                </span>
              </a>

              <Link
                href={`/${locale}/trips?activity=${experience.activity}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <span>
                  {locale === "id" ? `Lihat Trip ${content.name}` : `View ${content.name} Trips`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Section 1: Overview & Who Is This For */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{locale === "id" ? "Tentang Aktivitas" : "Activity Overview"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {locale === "id" ? `Memahami Esensi ${content.name}` : `Understanding ${content.name}`}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {content.overview}
            </p>

            {/* Conditions Box */}
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-4 shadow-lg">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {locale === "id" ? "Karakteristik Perairan Jawa Barat" : "West Java Ocean Conditions"}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Musim Terbaik:" : "Best Season:"}</span>
                    <strong className="text-white">{content.typicalConditions.season}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Eye className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Visibilitas:" : "Visibility:"}</span>
                    <strong className="text-white">{content.typicalConditions.visibility}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Thermometer className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Suhu Air:" : "Water Temp:"}</span>
                    <strong className="text-white">{content.typicalConditions.waterTemp}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Wind className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Karakter Arus:" : "Currents:"}</span>
                    <strong className="text-white">{content.typicalConditions.currents}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">
              {locale === "id"
                ? `Siapa Saja yang Cocok Mengikuti ${content.name}?`
                : `Who is ${content.name} Best Suited For?`}
            </h3>
            <div className="space-y-4">
              {content.whoIsThisFor.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-1.5"
                >
                  <h4 className="text-base font-semibold text-cyan-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Skill Levels & Requirements */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {locale === "id" ? "Jenjang & Kemahiran" : "Skill Levels & Pathways"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === "id" ? "Tingkatan Level & Prasyarat" : "Levels, Requirements & Prerequisites"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.skillLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="level" value={lvl.badge.toLowerCase()} />
                    <span className="text-xs font-mono text-slate-500">Level 0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {lvl.level}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {locale === "id" ? "Prasyarat Minimum:" : "Minimum Prerequisites:"}
                  </span>
                  <ul className="space-y-1.5">
                    {lvl.prerequisites.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Equipment Breakdown */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-8">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {locale === "id" ? "Perlengkapan Selam" : "Equipment & Gear"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Equipment Provided & Recommended
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <h3 className="text-base font-bold text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>{locale === "id" ? "Disediakan Oleh Operator:" : "Provided by Operator:"}</span>
              </h3>
              <ul className="space-y-2.5">
                {content.equipment.provided.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>{locale === "id" ? "Wajib / Disarankan Dibawa Peserta:" : "Required / Recommended to Bring:"}</span>
              </h3>
              <ul className="space-y-2.5">
                {content.equipment.requiredOrRecommended.map((eq, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Safety Protocols */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-rose-400" />
              <span>{locale === "id" ? "Prioritas Utama" : "Uncompromising Standards"}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === "id" ? `Protokol Keselamatan ${content.name}` : `${content.name} Safety Protocols`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.safetyProtocols.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-950 text-rose-400 border border-rose-800 flex items-center justify-center text-xs font-bold font-mono">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-8">
                  {sec.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Related Trips / Packages */}
        {relatedPackages.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {dict.common.relatedTrips}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {locale === "id" ? `Trip & Paket Terkait ${content.name}` : `Featured ${content.name} Trips & Packages`}
                </h2>
              </div>
              <Link
                href={`/${locale}/trips?activity=${experience.activity}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>{dict.common.viewAllTrips}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} locale={locale} />
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Related Dive Sites */}
        {relatedDiveSites.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {dict.common.relatedDiveSites}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {locale === "id" ? `Dive Sites Terbaik untuk ${content.name}` : `Prime Dive Sites for ${content.name}`}
                </h2>
              </div>
              <Link
                href={`/${locale}/dive-sites`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                <span>{locale === "id" ? "Lihat Semua Dive Sites" : "View All Dive Sites"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDiveSites.map((site) => (
                <DiveSiteCard key={site.slug} diveSite={site} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
