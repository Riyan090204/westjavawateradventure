import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types/experience";
import { Locale } from "@/types/locale";
import { ArrowRight, Shield, Target, Waves, Compass } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  locale?: Locale;
}

export function ExperienceCard({ experience, locale = "en" }: ExperienceCardProps) {
  const content = experience.translations[locale] || experience.translations.en;

  const getActivityIcon = () => {
    switch (experience.activity) {
      case "spearfishing":
        return <Target className="w-5 h-5 text-amber-400" />;
      case "freediving":
        return <Waves className="w-5 h-5 text-cyan-400" />;
      case "scuba-diving":
        return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  const getAccentColor = () => {
    switch (experience.activity) {
      case "spearfishing":
        return "group-hover:border-amber-500/50 group-hover:shadow-amber-950/30";
      case "freediving":
        return "group-hover:border-cyan-500/50 group-hover:shadow-cyan-950/30";
      case "scuba-diving":
        return "group-hover:border-blue-500/50 group-hover:shadow-blue-950/30";
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${getAccentColor()}`}
    >
      {/* Image Header with Gradient */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={experience.heroImage}
          alt={content.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-semibold">
          {getActivityIcon()}
          <span>{content.name}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
            {content.tagline}
          </p>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {content.name}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {content.shortDescription}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>
              {locale === "id"
                ? "Tersedia: Beginner hingga Advanced"
                : "Levels: Beginner to Advanced"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>
              {locale === "id" ? "Musim terbaik:" : "Optimal Season:"}{" "}
              {content.typicalConditions.season}
            </span>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2">
          <Link
            href={`/${locale}/experiences/${experience.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-800/90 hover:bg-cyan-600 text-slate-200 hover:text-white text-sm font-semibold transition-all group-hover:shadow-md"
          >
            <span>{locale === "id" ? "Pelajari Experience Ini" : "Explore This Experience"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
