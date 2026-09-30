"use client";

import React, { useState } from "react";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/config/site";
import { BookingInquiryModal } from "@/components/booking/BookingInquiryModal";
import {
  buildWhatsAppGeneralUrl,
  buildWhatsAppCustomTripUrl,
  buildWhatsAppExperienceInquiryUrl,
} from "@/lib/whatsapp";
import { MessageCircle, Mail, MapPin, Clock, Compass, ArrowUpRight, Send } from "lucide-react";

interface ContactViewProps {
  locale: Locale;
}

export function ContactView({ locale }: ContactViewProps) {
  const dict = getDictionary(locale);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <Breadcrumb items={[{ label: dict.nav.contact }]} locale={locale} />

        <SectionHeader
          badge={locale === "id" ? "Hubungi Kami" : "Connect & Inquire"}
          title={
            locale === "id"
              ? "Konsultasi & Reservasi Trip"
              : "Booking Inquiries & Expedition Planning"
          }
          description={
            locale === "id"
              ? "Seluruh proses reservasi, konfirmasi ketersediaan jadwal, dan penyesuaian custom expedition dapat dilakukan melalui WhatsApp resmi atau Formulir Email kami."
              : "Inquire directly about upcoming departure dates, private vessel charters, or equipment requirements via WhatsApp or our formal Booking Inquiry Form."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 Cols): Quick Booking Option Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-white">
              {locale === "id" ? "Pilihan Konsultasi Cepat" : "Choose Your Inquiry Channel"}
            </h2>

            {/* Email Form Trigger Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
                  {locale === "id" ? "Formulir Resmi" : "Formal Inquiry"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {locale === "id" ? "Kirim Formulir Booking Online" : "Submit an Online Booking Inquiry Form"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {locale === "id"
                  ? "Lengkapi detail jumlah tamu, tanggal perjalanan, dan preferensi aktivitas untuk menerima penawaran resmi via email."
                  : "Fill in guest details, target dates, and activity preferences to receive a comprehensive itinerary quote via email."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-md shadow-cyan-950/50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{dict.common.sendInquiry}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={buildWhatsAppCustomTripUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300">
                  {locale === "id" ? "Custom & Private Trip" : "Custom & Private Charters"}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {locale === "id"
                    ? "Rancang ekspedisi privat untuk grup, keluarga, atau komunitas dengan jadwal fleksibel."
                    : "Design bespoke multi-day private voyages for groups, clubs, or research teams."}
                </p>
              </a>

              <a
                href={buildWhatsAppExperienceInquiryUrl("Spearfishing", locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300">
                  Spearfishing Desk
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {locale === "id"
                    ? "Tanya ketersediaan armada boat, panduan spot perburuan karang, dan sewa speargun."
                    : "Inquire regarding offshore vessel availability, gear hire, and current reports."}
                </p>
              </a>

              <a
                href={buildWhatsAppExperienceInquiryUrl("Freediving", locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300">
                  Freediving Clinic & Depth
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {locale === "id"
                    ? "Daftar sesi latihan tali kedalaman (line training) atau kelas pengenalan apnea pemula."
                    : "Book depth buoy coaching sessions, beginner discovery workshops, or reef safaris."}
                </p>
              </a>

              <a
                href={buildWhatsAppExperienceInquiryUrl("Scuba Diving", locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300">
                  Scuba Fun Dive & DSD
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {locale === "id"
                    ? "Informasi penyelaman bersertifikat, sewa tabung, dan Discovery Scuba Diving untuk non-license."
                    : "Certified diver bookings, equipment rental, and non-certified Discovery Scuba."}
                </p>
              </a>
            </div>
          </div>

          {/* Right Column (5 Cols): Operational Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white">
                {locale === "id" ? "Informasi Kontak Resmi" : "Official Contact Information"}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">WhatsApp Direct:</span>
                    <strong className="text-white text-base">{SITE_CONFIG.whatsappDisplay}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Email Desk:</span>
                    <strong className="text-white">{SITE_CONFIG.email}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">Operational Region:</span>
                    <strong className="text-white">{SITE_CONFIG.location[locale]}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs">
                      {locale === "id" ? "Jam Layanan Pesan:" : "Response Hours:"}
                    </span>
                    <strong className="text-white">Monday – Sunday (07:00 – 21:00 WIB / UTC+7)</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <a
                  href={buildWhatsAppGeneralUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-950/50"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === "id" ? "Chat WhatsApp Sekarang" : "Start WhatsApp Chat"}</span>
                </a>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{dict.common.sendInquiry}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}
