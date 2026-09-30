import { SITE_CONFIG } from "@/config/site";
import { Locale } from "@/types/locale";
import { formatLocalizedActivity, formatLocalizedTripFormat } from "./i18n";

export interface PackageBookingContext {
  packageName: string;
  activity: string;
  duration: string;
  location: string;
  meetingPoint?: string;
  startPoint?: string;
  format?: string;
  level?: string;
  locale?: Locale;
  selectedDate?: string;
  guestCount?: string | number;
  isFullyBooked?: boolean;
}

/**
 * Builds a direct WhatsApp link with a formatted inquiry message respecting the active locale and selected schedule
 */
export function buildWhatsAppBookingUrl(context: PackageBookingContext): string {
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  const locale = context.locale || "en";
  const isId = locale === "id";

  let message: string;

  if (context.isFullyBooked) {
    if (isId) {
      message = [
        `Halo ${SITE_CONFIG.name}, saya melihat jadwal trip *${context.packageName}*${
          context.selectedDate ? ` pada tanggal *${context.selectedDate}*` : ""
        } saat ini sudah Penuh (Fully Booked).`,
        ``,
        `Apakah saya bisa masuk daftar tunggu (waitlist) jika ada pembatalan, atau ada rekomendasi tanggal keberangkatan alternatif lainnya? Terima kasih!`,
      ].join("\n");
    } else {
      message = [
        `Hello ${SITE_CONFIG.name}, I noticed that the trip *${context.packageName}*${
          context.selectedDate ? ` on *${context.selectedDate}*` : ""
        } is currently Fully Booked.`,
        ``,
        `Could you please let me know if there is a cancellation waitlist or an upcoming alternative departure date available? Thank you!`,
      ].join("\n");
    }
  } else if (isId) {
    message = [
      `Halo ${SITE_CONFIG.name}, saya tertarik untuk reservasi / cek ketersediaan trip berikut:`,
      ``,
      `📌 *Trip*: ${context.packageName}`,
      context.selectedDate ? `📅 *Tanggal Pilihan*: ${context.selectedDate}` : null,
      context.guestCount ? `👥 *Jumlah Peserta*: ${context.guestCount} Orang` : null,
      `🌊 *Aktivitas*: ${formatLocalizedActivity(context.activity, "id")}`,
      `⏱️ *Durasi*: ${context.duration}`,
      `📍 *Lokasi*: ${context.location}`,
      context.meetingPoint ? `🚩 *Titik Kumpul (MEPO)*: ${context.meetingPoint}` : null,
      context.startPoint ? `⚓ *Dermaga Berangkat*: ${context.startPoint}` : null,
      context.format ? `👥 *Format*: ${formatLocalizedTripFormat(context.format, "id")}` : null,
      ``,
      `Saya ingin menanyakan ketersediaan slot dan rincian prosedur booking. Terima kasih!`,
    ]
      .filter((line) => line !== null)
      .join("\n");
  } else {
    message = [
      `Hello ${SITE_CONFIG.name}, I would like to check availability and inquire about the following trip:`,
      ``,
      `📌 *Trip*: ${context.packageName}`,
      context.selectedDate ? `📅 *Preferred Date*: ${context.selectedDate}` : null,
      context.guestCount ? `👥 *Number of Guests*: ${context.guestCount}` : null,
      `🌊 *Activity*: ${formatLocalizedActivity(context.activity, "en")}`,
      `⏱️ *Duration*: ${context.duration}`,
      `📍 *Location*: ${context.location}`,
      context.meetingPoint ? `🚩 *Meeting Point*: ${context.meetingPoint}` : null,
      context.startPoint ? `⚓ *Departure Pier*: ${context.startPoint}` : null,
      context.format ? `👥 *Trip Format*: ${formatLocalizedTripFormat(context.format, "en")}` : null,
      ``,
      `Could you please share the remaining availability and booking details? Thank you!`,
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function buildWhatsAppExperienceInquiryUrl(experienceName: string, locale: Locale = "en"): string {
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");

  let message: string;
  if (locale === "id") {
    message = [
      `Halo ${SITE_CONFIG.name}, saya tertarik untuk mengetahui lebih lanjut mengenai aktivitas *${experienceName}* di Jawa Barat.`,
      ``,
      `Bisa tolong berikan informasi mengenai persiapan, jadwal trip terdekat, atau program pengenalan yang tersedia? Terima kasih!`,
    ].join("\n");
  } else {
    message = [
      `Hello ${SITE_CONFIG.name}, I am interested in learning more about *${experienceName}* in West Java, Indonesia.`,
      ``,
      `Could you please share details on upcoming trips, prerequisites, gear requirements, or training clinics? Thank you!`,
    ].join("\n");
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppCustomTripUrl(locale: Locale = "en"): string {
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");

  let message: string;
  if (locale === "id") {
    message = [
      `Halo ${SITE_CONFIG.name}, saya ingin merancang *Custom Trip / Private Expedition* di Jawa Barat.`,
      ``,
      `Detail rencana kami:`,
      `- Aktivitas yang diinginkan: [Spearfishing / Freediving / Scuba]`,
      `- Jumlah peserta: [Contoh: 4 Orang]`,
      `- Rencana tanggal / durasi: [Contoh: Akhir pekan / 3D2N]`,
      `- Lokasi tujuan pilihan (jika ada): [...]`,
      ``,
      `Mohon info ketersediaan boat, instruktur/guide, dan penawaran biayanya. Terima kasih!`,
    ].join("\n");
  } else {
    message = [
      `Hello ${SITE_CONFIG.name}, I would like to design a *Custom / Private Underwater Expedition* in West Java, Indonesia.`,
      ``,
      `Our group details:`,
      `- Preferred Activities: [Spearfishing / Freediving / Scuba Diving]`,
      `- Number of Guests: [e.g. 4 people]`,
      `- Target Dates / Duration: [e.g. 3 Days / 2 Nights]`,
      `- Destination Preferences (if any): [...]`,
      ``,
      `Please provide information regarding private charter availability, guides, and an itinerary quote. Thank you!`,
    ].join("\n");
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppGeneralUrl(locale: Locale = "en"): string {
  const cleanPhone = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");

  const message =
    locale === "id"
      ? `Halo ${SITE_CONFIG.name}, saya ingin bertanya mengenai layanan trip dan kegiatan underwater adventure di Jawa Barat.`
      : `Hello ${SITE_CONFIG.name}, I have a general question regarding your diving, spearfishing, and underwater adventure trips in West Java, Indonesia.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
