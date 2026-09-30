import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { Compass, BookOpen, Waves, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  locale?: Locale;
}

export function HeroSection({ locale = "en" }: HeroSectionProps) {
  const dict = getDictionary(locale);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Cinematic Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85"
          alt="West Java Underwater Ocean Adventure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75 scale-105 transform duration-1000"
        />
        {/* Multi-layered dark ocean gradients for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-cyan-950/50">
            <Waves className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{SITE_CONFIG.taglines[locale]}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
            {locale === "id" ? (
              <>
                Jelajahi Kedalaman <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                  Samudra Jawa Barat
                </span>
              </>
            ) : (
              <>
                Explore the Depths of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                  West Java, Indonesia
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Supporting copy */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
            {locale === "id" ? (
              <>
                Operator petualangan bawah laut terkemuka. Pengalaman terkurasi untuk{" "}
                <strong className="text-cyan-300 font-semibold">Spearfishing</strong>,{" "}
                <strong className="text-teal-300 font-semibold">Freediving</strong>, dan{" "}
                <strong className="text-blue-300 font-semibold">Scuba Diving</strong> dengan standar keselamatan profesional.
              </>
            ) : (
              <>
                Premier underwater expedition operator. Tailored international adventures in{" "}
                <strong className="text-cyan-300 font-semibold">Spearfishing</strong>,{" "}
                <strong className="text-teal-300 font-semibold">Freediving</strong>, and{" "}
                <strong className="text-blue-300 font-semibold">Scuba Diving</strong> with uncompromising safety protocols.
              </>
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href={`/${locale}/trips`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base transition-all shadow-xl shadow-cyan-950/60 group"
            >
              <Compass className="w-5 h-5 text-cyan-100 group-hover:rotate-45 transition-transform" />
              <span>{dict.nav.exploreTrips}</span>
            </Link>

            <Link
              href={`/${locale}/experiences`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base backdrop-blur-md transition-all group"
            >
              <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span>{locale === "id" ? "Explore Experiences" : "Explore Experiences"}</span>
            </Link>
          </div>

          {/* Core Pillars Quick Badge Bar */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-xl">
            <Link
              href={`/${locale}/experiences/spearfishing`}
              className="group p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90 transition-all text-left"
            >
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                01. Hunting
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center justify-between mt-0.5">
                Spearfishing <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </span>
            </Link>

            <Link
              href={`/${locale}/experiences/freediving`}
              className="group p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all text-left"
            >
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                02. Apnea
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between mt-0.5">
                Freediving <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
              </span>
            </Link>

            <Link
              href={`/${locale}/experiences/scuba-diving`}
              className="group p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all text-left"
            >
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                03. Exploration
              </span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between mt-0.5">
                Scuba Diving <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
