import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DiveSite } from "@/types/dive-site";
import { Package } from "@/types/package";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { PackageCard } from "@/components/package/PackageCard";
import {
  MapPin,
  Waves,
  Fish,
  Navigation,
  Shield,
  Calendar,
  Thermometer,
  Eye,
  Wind,
  ArrowRight,
} from "lucide-react";

interface DiveSiteDetailViewProps {
  diveSite: DiveSite;
  relatedPackages: Package[];
  locale?: Locale;
}

export function DiveSiteDetailView({
  diveSite,
  relatedPackages,
  locale = "en",
}: DiveSiteDetailViewProps) {
  const content = diveSite.translations[locale] || diveSite.translations.en;
  const dict = getDictionary(locale);

  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-end pb-16 pt-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={diveSite.heroImage}
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
              { label: dict.nav.diveSites, href: `/${locale}/dive-sites` },
              { label: content.name },
            ]}
            locale={locale}
            className="mb-6"
          />

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-lg w-fit">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{content.region}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {content.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {content.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {diveSite.activities.map((act) => (
                <Badge key={act} variant="activity" value={act} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Overview & Ocean Conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              {locale === "id" ? "Karakteristik & Geografi Spot" : "Geography & Environmental Characteristics"}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {content.description}
            </p>

            {/* Marine Life Highlights */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Fish className="w-4 h-4" />
                <span>{dict.common.marineLife}</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {content.marineLife.map((marine, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium"
                  >
                    {marine}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Conditions & Logistics Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Waves className="w-5 h-5 text-cyan-400" />
                <span>{dict.common.conditions}</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Musim Terbaik:" : "Best Season:"}</span>
                    <strong className="text-slate-200">{content.conditions.bestSeason}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Eye className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Visibilitas Rata-rata:" : "Average Visibility:"}</span>
                    <strong className="text-slate-200">{content.conditions.visibility}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Thermometer className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Suhu Air:" : "Water Temperature:"}</span>
                    <strong className="text-slate-200">{content.conditions.waterTemp}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wind className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{locale === "id" ? "Karakter Arus:" : "Current Profiles:"}</span>
                    <strong className="text-slate-200">{content.conditions.currents}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <Navigation className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">{dict.common.access}:</span>
                    <strong className="text-slate-200">{content.access}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Dive Points Matrix */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {dict.common.divePoints}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {locale === "id"
                ? `Daftar Titik Selam (${diveSite.divePoints.length} Dive Points)`
                : `Recorded Dive Points (${diveSite.divePoints.length} Spots)`}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {locale === "id"
                ? "Rincian kedalaman, arus, dan keunikan kontur dasar laut pada masing-masing dive point."
                : "Topographical breakdown, depth profiles, bottom substrate, and current behaviors for each point."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diveSite.divePoints.map((dp, idx) => {
              const dpContent = dp.translations[locale] || dp.translations.en;
              return (
                <div
                  key={dp.id}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 shadow-lg hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                        POINT 0{idx + 1}
                      </span>
                      <span className="text-xs text-slate-400">
                        {locale === "id" ? "Arus:" : "Currents:"} <strong className="text-slate-200">{dp.currentLevel}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {dpContent.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {dpContent.highlight}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{locale === "id" ? "Kedalaman:" : "Depth:"}</span>
                      <strong className="text-white">{dp.depthRange}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{locale === "id" ? "Visibilitas:" : "Visibility:"}</span>
                      <strong className="text-white">{dp.visibilityRange}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{locale === "id" ? "Tipe Dasar:" : "Bottom Type:"}</span>
                      <strong className="text-white">{dpContent.bottomType}</strong>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        {locale === "id" ? "Aktivitas Sesuai:" : "Suitable Activities:"}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {dp.suitableActivities.map((act) => (
                          <Badge key={act} variant="activity" value={act} className="text-[10px] py-0.5" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Safety Guidelines */}
        <section className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-400" />
            <span>{locale === "id" ? "Panduan Keselamatan Khusus Lokasi Ini" : "Site-Specific Safety Guidelines"}</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {content.safetyNotes.map((sn, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span>{sn}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Related Trips */}
        {relatedPackages.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-slate-900">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {dict.common.relatedTrips}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {locale === "id" ? `Trip yang Mengunjungi ${content.name}` : `Expeditions Visiting ${content.name}`}
                </h2>
              </div>
              <Link
                href={`/${locale}/trips`}
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
      </div>
    </div>
  );
}
