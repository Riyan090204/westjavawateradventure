import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Package } from "@/types/package";
import { Locale } from "@/types/locale";
import { Badge } from "@/components/ui/Badge";
import { getDictionary } from "@/lib/i18n";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { getPackageAvailabilitySummary } from "@/lib/availability";
import { Clock, MapPin, Users, ArrowRight, MessageCircle, Calendar, Navigation } from "lucide-react";

interface PackageCardProps {
  pkg: Package;
  locale?: Locale;
}

export function PackageCard({ pkg, locale = "en" }: PackageCardProps) {
  const content = pkg.translations[locale] || pkg.translations.en;
  const dict = getDictionary(locale);
  const availabilitySummary = getPackageAvailabilitySummary(pkg, locale);

  const selectedDateText = availabilitySummary.nextSchedule
    ? availabilitySummary.nextSchedule.dateDisplay[locale] || availabilitySummary.nextSchedule.dateDisplay.en
    : undefined;

  const whatsappUrl = buildWhatsAppBookingUrl({
    packageName: content.name,
    activity: pkg.activity,
    duration: content.duration,
    location: content.location,
    meetingPoint: content.meetingPoint,
    startPoint: content.startPoint,
    format: pkg.format,
    level: pkg.level,
    locale,
    selectedDate: selectedDateText,
    isFullyBooked: availabilitySummary.status === "fully-booked",
  });

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-cyan-950/20">
      {/* Hero Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={content.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="activity" value={pkg.activity} />
          <Badge variant="format" value={pkg.format} />
        </div>

        {/* Skill Level Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="level" value={pkg.level} />
        </div>

        {/* Duration Chip on bottom right */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-semibold">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>{content.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span className="truncate">{content.location}</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
            {content.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {content.shortDescription}
          </p>

          {/* Group Capacity & MEPO Info */}
          <div className="space-y-1 pt-1 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span>
                {dict.common.groupSize}: <strong className="text-slate-200">{pkg.groupSize}</strong>
              </span>
            </div>
            {content.meetingPoint && (
              <div className="flex items-center gap-2 text-[11px] text-slate-400 truncate">
                <Navigation className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate">MEPO: <strong className="text-slate-300 font-normal">{content.meetingPoint}</strong></span>
              </div>
            )}
          </div>

          {/* Departure & Availability Badge */}
          <div className="pt-2">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${availabilitySummary.badgeClasses}`}
            >
              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{availabilitySummary.availabilityText}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">
                {dict.common.startingFrom}
              </span>
              <span className="text-sm sm:text-base font-bold text-cyan-400">
                {content.priceDisplay}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href={`/${locale}/trips/${pkg.slug}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
            >
              <span>{locale === "id" ? "Detail Trip" : "Trip Details"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold transition-colors shadow-md ${
                availabilitySummary.status === "fully-booked"
                  ? "bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300"
                  : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-950/40"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>
                {availabilitySummary.status === "fully-booked"
                  ? locale === "id"
                    ? "Hubungi Kami"
                    : "Contact Us"
                  : "WhatsApp"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
