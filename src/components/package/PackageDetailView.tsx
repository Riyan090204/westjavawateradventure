"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, TripSchedule } from "@/types/package";
import { DiveSite } from "@/types/dive-site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ItineraryTimeline } from "./ItineraryTimeline";
import { DepartureScheduleList } from "./DepartureScheduleList";
import { BookingFloatingBar } from "@/components/booking/BookingFloatingBar";
import { BookingInquiryModal } from "@/components/booking/BookingInquiryModal";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { formatScheduleAvailability } from "@/lib/availability";
import {
  Clock,
  MapPin,
  Users,
  Shield,
  Check,
  X,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
  Calendar,
  Anchor,
  Navigation,
} from "lucide-react";

interface PackageDetailViewProps {
  pkg: Package;
  relatedDiveSite?: DiveSite;
  locale?: Locale;
}

export function PackageDetailView({
  pkg,
  relatedDiveSite,
  locale = "en",
}: PackageDetailViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const content = pkg.translations[locale] || pkg.translations.en;
  const diveSiteContent = relatedDiveSite
    ? relatedDiveSite.translations[locale] || relatedDiveSite.translations.en
    : undefined;
  const dict = getDictionary(locale);
  const isId = locale === "id";

  const schedules = pkg.schedules || [];
  // Default to first available schedule if any, otherwise first schedule
  const defaultSchedule = schedules.find((s) => s.remainingSpots > 0) || schedules[0];
  const [selectedSchedule, setSelectedSchedule] = useState<TripSchedule | undefined>(defaultSchedule);
  const [guestCount, setGuestCount] = useState<number>(2);

  const selectedDateText = selectedSchedule
    ? selectedSchedule.dateDisplay[locale] || selectedSchedule.dateDisplay.en
    : undefined;

  const isCurrentScheduleFullyBooked = selectedSchedule ? selectedSchedule.remainingSpots === 0 : false;

  const currentAvailability = selectedSchedule
    ? formatScheduleAvailability(selectedSchedule.remainingSpots, selectedSchedule.maxParticipants, locale)
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
    guestCount,
    isFullyBooked: isCurrentScheduleFullyBooked,
  });

  return (
    <div className="bg-slate-950 text-slate-200 pb-28">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-16 pt-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.heroImage}
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
              { label: dict.nav.trips, href: `/${locale}/trips` },
              { label: content.name },
            ]}
            locale={locale}
            className="mb-6"
          />

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="activity" value={pkg.activity} />
              <Badge variant="format" value={pkg.format} />
              <Badge variant="level" value={pkg.level} />
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {content.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {content.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{content.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{content.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700/80">
                <Users className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{pkg.groupSize}</span>
              </div>
              {content.meetingPoint && (
                <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-cyan-700/60 text-cyan-300">
                  <Navigation className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="truncate max-w-[280px]">MEPO: {content.meetingPoint}</span>
                </div>
              )}
              {content.startPoint && (
                <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-blue-700/60 text-blue-300">
                  <Anchor className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="truncate max-w-[280px]">{isId ? "Dermaga:" : "Pier:"} {content.startPoint}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (8 Cols): Schedules, Overview, Itinerary, Inclusions */}
          <div className="lg:col-span-8 space-y-16">
            {/* Departure Schedules & Quota */}
            <section id="schedules">
              <DepartureScheduleList
                pkg={pkg}
                schedules={schedules}
                locale={locale}
                selectedScheduleId={selectedSchedule?.id}
                onSelectSchedule={(sch) => setSelectedSchedule(sch)}
              />
            </section>

            {/* Meeting Point & Logistics Card */}
            {(content.meetingPoint || content.startPoint) && (
              <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    {isId ? "Logistik & Titik Keberangkatan" : "Meeting Point & Departure Logistics"}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {isId ? "Rute Kumpul & Akses Pelabuhan" : "Assembly Point & Harbour Access"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {content.meetingPoint && (
                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                        <Navigation className="w-4 h-4" />
                        <span>{dict.common.meetingPoint}</span>
                      </div>
                      <p className="text-sm text-slate-200 font-medium">
                        {content.meetingPoint}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {isId
                          ? "Titik kumpul seluruh peserta untuk briefing awal dan cek peralatan."
                          : "Primary assembly point for team orientation and gear inspection."}
                      </p>
                    </div>
                  )}

                  {content.startPoint && (
                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                      <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                        <Anchor className="w-4 h-4" />
                        <span>{dict.common.startPoint}</span>
                      </div>
                      <p className="text-sm text-slate-200 font-medium">
                        {content.startPoint}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {isId
                          ? "Dermaga tempat kapal bersandar dan titik tolak navigasi ke spot laut."
                          : "Departure pier where vessels embark for open ocean navigation."}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Overview & Highlights */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                {locale === "id" ? "Tentang Trip Ini" : "Trip Overview"}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {content.description}
              </p>

              {content.highlights.length > 0 && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{dict.common.highlights}</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {content.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Itinerary Timeline */}
            <section className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {dict.common.itinerary}
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  {locale === "id" ? "Itinerary Perjalanan Lengkap" : "Detailed Day-by-Day Itinerary"}
                </h2>
              </div>

              <ItineraryTimeline itinerary={content.itinerary} />
            </section>

            {/* Inclusions & Exclusions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                {locale === "id" ? "Fasilitas & Layanan" : "What's Included & Excluded"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>{dict.common.inclusions}:</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {content.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
                    <X className="w-5 h-5" />
                    <span>{dict.common.exclusions}:</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {content.exclusions.map((exc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Requirements & Safety */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                {dict.common.requirements}
              </h2>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{locale === "id" ? "Syarat Keikutsertaan" : "Prerequisites & Health Conditions"}</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {content.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>{dict.common.safetyNotes}</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {content.safetyNotes.map((sn, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                        <span>{sn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQs */}
            {content.faqs.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-cyan-400" />
                  <span>{locale === "id" ? "Pertanyaan Seputar Trip Ini" : "Trip Questions & Answers"}</span>
                </h2>

                <div className="space-y-4">
                  {content.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-cyan-300">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column (4 Cols): Sticky Booking Widget */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Main Booking Summary Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {dict.common.startingFrom}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    {content.priceDisplay}
                  </div>
                  {content.priceNote && (
                    <p className="text-xs text-slate-400 mt-1">
                      {content.priceNote}
                    </p>
                  )}
                </div>

                {/* Departure Schedule Picker / Active Date Info */}
                {schedules.length > 0 && (
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{isId ? "Pilih Tanggal:" : "Selected Departure:"}</span>
                      </label>

                      {currentAvailability && (
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${currentAvailability.colorClasses.badge}`}
                        >
                          {currentAvailability.label}
                        </span>
                      )}
                    </div>

                    <select
                      value={selectedSchedule?.id || ""}
                      onChange={(e) => {
                        const match = schedules.find((s) => s.id === e.target.value);
                        if (match) setSelectedSchedule(match);
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
                    >
                      {schedules.map((sch) => {
                        const dateName = sch.dateDisplay[locale] || sch.dateDisplay.en;
                        const avail = formatScheduleAvailability(sch.remainingSpots, sch.maxParticipants, locale);
                        return (
                          <option key={sch.id} value={sch.id}>
                            {dateName} — ({avail.label})
                          </option>
                        );
                      })}
                    </select>

                    {/* Guest Count Selector */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-800/80 text-xs">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{isId ? "Jumlah Peserta:" : "Guests:"}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 6].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setGuestCount(num)}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition-colors ${
                              guestCount === num
                                ? "bg-cyan-600 text-white"
                                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="border-t border-slate-800 pt-4 space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{dict.common.activity}:</span>
                    <strong className="text-white capitalize">{pkg.activity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{dict.common.format}:</span>
                    <strong className="text-white capitalize">{pkg.format}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{dict.common.level}:</span>
                    <strong className="text-white capitalize">{pkg.level}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{dict.common.duration}:</span>
                    <strong className="text-white">{content.duration}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{dict.common.groupSize}:</span>
                    <strong className="text-white">{pkg.groupSize}</strong>
                  </div>
                  {content.meetingPoint && (
                    <div className="flex justify-between pt-1 border-t border-slate-800/60">
                      <span className="text-slate-400">MEPO:</span>
                      <strong className="text-cyan-300 text-right max-w-[170px] truncate">{content.meetingPoint}</strong>
                    </div>
                  )}
                  {content.startPoint && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isId ? "Dermaga:" : "Pier:"}</span>
                      <strong className="text-slate-200 text-right max-w-[170px] truncate">{content.startPoint}</strong>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  {/* Primary CTA: WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl font-bold text-sm transition-colors shadow-xl ${
                      isCurrentScheduleFullyBooked
                        ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/60"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>
                      {isCurrentScheduleFullyBooked
                        ? isId
                          ? "Penuh • Tanya Waitlist via WhatsApp"
                          : "Fully Booked • Inquire Waitlist"
                        : isId
                        ? "Book Jadwal Ini via WhatsApp"
                        : "Book This Date via WhatsApp"}
                    </span>
                  </a>

                  {/* Secondary CTA: Send Booking Inquiry (Email) */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{dict.common.sendInquiry}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    {locale === "id"
                      ? "Pemesanan & konfirmasi ketersediaan slot diverifikasi langsung dengan admin via WhatsApp."
                      : "Booking requests and remaining spots are confirmed directly with our admin via WhatsApp."}
                  </p>
                </div>
              </div>

              {/* Related Dive Site Widget */}
              {relatedDiveSite && diveSiteContent && (
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    {dict.common.location}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {diveSiteContent.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {diveSiteContent.shortDescription}
                  </p>
                  <Link
                    href={`/${locale}/dive-sites/${relatedDiveSite.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-1"
                  >
                    <span>{locale === "id" ? "Eksplorasi Detail Lokasi" : "Explore Location Details"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar */}
      <BookingFloatingBar
        pkg={pkg}
        locale={locale}
        selectedDate={selectedDateText}
        isFullyBooked={isCurrentScheduleFullyBooked}
      />

      {/* Booking Inquiry Modal */}
      <BookingInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPackageName={content.name}
        locale={locale}
      />
    </div>
  );
}
