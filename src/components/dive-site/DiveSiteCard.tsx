import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DiveSite } from "@/types/dive-site";
import { Locale } from "@/types/locale";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Compass, ArrowRight } from "lucide-react";

interface DiveSiteCardProps {
  diveSite: DiveSite;
  locale?: Locale;
}

export function DiveSiteCard({ diveSite, locale = "en" }: DiveSiteCardProps) {
  const content = diveSite.translations[locale] || diveSite.translations.en;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
      {/* Hero Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={diveSite.heroImage}
          alt={content.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

        {/* Region Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-cyan-300 text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5" />
          <span>{content.region}</span>
        </div>

        {/* Dive Points Count */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-medium">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>{diveSite.divePoints.length} {locale === "id" ? "Titik Selam" : "Dive Points"}</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {content.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {content.shortDescription}
          </p>

          {/* Activities Supported */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              {locale === "id" ? "Aktivitas yang Didukung:" : "Supported Activities:"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {diveSite.activities.map((act) => (
                <Badge key={act} variant="activity" value={act} />
              ))}
            </div>
          </div>
        </div>

        {/* Conditions quick summary */}
        <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
          <div className="flex justify-between">
            <span>{locale === "id" ? "Visibilitas:" : "Visibility:"}</span>
            <strong className="text-slate-200">{content.conditions.visibility}</strong>
          </div>
          <div className="flex justify-between">
            <span>{locale === "id" ? "Musim Terbaik:" : "Best Season:"}</span>
            <strong className="text-slate-200">{content.conditions.bestSeason}</strong>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link
            href={`/${locale}/dive-sites/${diveSite.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <span>{locale === "id" ? "Eksplorasi Dive Site Ini" : "Explore This Dive Site"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
