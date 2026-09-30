import React from "react";
import { TripSchedule, Package } from "@/types/package";
import { Locale } from "@/types/locale";
import { formatScheduleAvailability } from "@/lib/availability";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { Calendar, Users, MessageCircle, AlertCircle, Sparkles } from "lucide-react";

interface DepartureScheduleListProps {
  pkg: Package;
  schedules?: TripSchedule[];
  locale?: Locale;
  selectedScheduleId?: string;
  onSelectSchedule?: (schedule: TripSchedule) => void;
}

export function DepartureScheduleList({
  pkg,
  schedules,
  locale = "en",
  selectedScheduleId,
  onSelectSchedule,
}: DepartureScheduleListProps) {
  const isId = locale === "id";
  const content = pkg.translations[locale] || pkg.translations.en;

  if (!schedules || schedules.length === 0) {
    if (pkg.format === "custom") {
      return (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-700 flex items-center justify-center text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isId ? "Jadwal Fleksibel (Private & Custom Charter)" : "Custom & On-Demand Departure Dates"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {isId
                  ? "Tentukan sendiri tanggal keberangkatan dan durasi trip sesuai kenyamanan rombongan Anda."
                  : "Choose your own departure dates, trip duration, and customized route on demand."}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
          {isId ? "Jadwal & Ketersediaan Slot" : "Upcoming Departures & Availability"}
        </span>
        <h2 className="text-2xl font-bold text-white mt-1">
          {isId ? "Pilih Tanggal Keberangkatan" : "Select Your Preferred Departure Date"}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          {isId
            ? "Status kuota terupdate secara manual oleh admin setelah konfirmasi booking via WhatsApp."
            : "Live availability status. Confirmed manually by our expedition desk via WhatsApp."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {schedules.map((sch) => {
          const availability = formatScheduleAvailability(
            sch.remainingSpots,
            sch.maxParticipants,
            locale
          );
          const dateText = sch.dateDisplay[locale] || sch.dateDisplay.en;
          const noteText = sch.note ? sch.note[locale] || sch.note.en : undefined;
          const isSelected = selectedScheduleId === sch.id;

          const scheduleWhatsAppUrl = buildWhatsAppBookingUrl({
            packageName: content.name,
            activity: pkg.activity,
            duration: content.duration,
            location: content.location,
            meetingPoint: content.meetingPoint,
            startPoint: content.startPoint,
            format: pkg.format,
            level: pkg.level,
            locale,
            selectedDate: dateText,
            isFullyBooked: sch.remainingSpots === 0,
          });

          return (
            <div
              key={sch.id}
              onClick={() => onSelectSchedule && onSelectSchedule(sch)}
              className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? "bg-slate-900/95 border-cyan-400 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/50"
                  : "bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              <div className="space-y-3">
                {/* Top Row: Date & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                    <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{dateText}</span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${availability.colorClasses.badge}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${availability.colorClasses.dot}`} />
                    <span>{availability.label}</span>
                  </span>
                </div>

                {/* Note if present */}
                {noteText && (
                  <p className="text-xs text-slate-300 font-medium">{noteText}</p>
                )}

                {/* Capacity & Quota Info */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      {isId ? "Kapasitas Maksimal:" : "Maximum Capacity:"}{" "}
                      <strong className="text-slate-200">
                        {sch.maxParticipants} {isId ? "Peserta" : "Guests"}
                      </strong>
                    </span>
                  </div>

                  {sch.remainingSpots > 0 && sch.remainingSpots <= 2 && (
                    <div className="flex items-center gap-1 text-amber-400 text-[11px] font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{isId ? "Segera Pesan" : "Fast Filling"}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Booking Action for this date */}
              <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  {sch.remainingSpots === 0
                    ? isId
                      ? "Slot pada tanggal ini penuh"
                      : "No spots left on this date"
                    : isId
                    ? "Konfirmasi instan via WhatsApp"
                    : "Direct booking via WhatsApp"}
                </span>

                <a
                  href={scheduleWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                    sch.remainingSpots === 0
                      ? "bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/40"
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>
                    {sch.remainingSpots === 0
                      ? isId
                        ? "Tanya Waitlist"
                        : "Contact Us"
                      : isId
                      ? "Pilih Tanggal Ini"
                      : "Book This Date"}
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
