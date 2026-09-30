"use client";

import React, { useState } from "react";
import { Package } from "@/types/package";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { buildWhatsAppBookingUrl } from "@/lib/whatsapp";
import { BookingInquiryModal } from "./BookingInquiryModal";
import { MessageCircle, Mail } from "lucide-react";

interface BookingFloatingBarProps {
  pkg: Package;
  locale?: Locale;
  selectedDate?: string;
  isFullyBooked?: boolean;
}

export function BookingFloatingBar({
  pkg,
  locale = "en",
  selectedDate,
  isFullyBooked = false,
}: BookingFloatingBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const content = pkg.translations[locale] || pkg.translations.en;
  const dict = getDictionary(locale);
  const isId = locale === "id";

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
    selectedDate,
    isFullyBooked,
  });

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-3.5 px-4 sm:px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="hidden sm:flex flex-col">
            <span className="text-xs text-slate-400 font-medium truncate max-w-md">
              {content.name} ({content.duration}) {selectedDate ? `• ${selectedDate}` : ""}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">
                {content.priceDisplay}
              </span>
              {content.priceNote && (
                <span className="text-[11px] text-slate-400">
                  {content.priceNote}
                </span>
              )}
            </div>
          </div>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2.5">
            <div className="sm:hidden flex flex-col">
              <span className="text-[10px] text-slate-400">{dict.common.startingFrom}</span>
              <span className="text-xs font-bold text-white truncate max-w-[130px]">
                {content.priceDisplay}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-1 sm:flex-none justify-end">
              {/* Secondary CTA: Send Email Inquiry */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{dict.common.sendInquiry}</span>
              </button>

              {/* Primary CTA: WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-lg ${
                  isFullyBooked
                    ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/50"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {isFullyBooked
                    ? isId
                      ? "Penuh • Tanya Waitlist"
                      : "Fully Booked • Waitlist"
                    : dict.common.bookWhatsApp}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <BookingInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultPackageName={content.name}
        locale={locale}
      />
    </>
  );
}
