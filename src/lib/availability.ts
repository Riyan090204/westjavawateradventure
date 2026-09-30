import { TripSchedule, ScheduleAvailabilityStatus, Package } from "@/types/package";
import { Locale } from "@/types/locale";

/**
 * Calculates the availability status from remainingSpots
 */
export function getScheduleStatus(remainingSpots: number): ScheduleAvailabilityStatus {
  if (remainingSpots <= 0) {
    return "fully-booked";
  }
  if (remainingSpots <= 2) {
    return "limited";
  }
  return "available";
}

export interface FormattedAvailability {
  status: ScheduleAvailabilityStatus;
  label: string;
  badgeText: string;
  isAvailable: boolean;
  colorClasses: {
    badge: string;
    text: string;
    border: string;
    bg: string;
    dot: string;
  };
}

/**
 * Formats natural, professional availability wording respecting the active locale
 */
export function formatScheduleAvailability(
  remainingSpots: number,
  _maxParticipants: number,
  locale: Locale = "en"
): FormattedAvailability {
  const status = getScheduleStatus(remainingSpots);
  const isId = locale === "id";

  if (status === "fully-booked") {
    return {
      status: "fully-booked",
      label: isId ? "Penuh" : "Fully Booked",
      badgeText: isId ? "Penuh" : "Fully Booked",
      isAvailable: false,
      colorClasses: {
        badge: "bg-rose-950/80 text-rose-300 border-rose-800/80",
        text: "text-rose-400",
        border: "border-rose-900/60",
        bg: "bg-rose-950/30",
        dot: "bg-rose-500",
      },
    };
  }

  if (status === "limited") {
    const text =
      remainingSpots === 1
        ? isId
          ? "Tersisa 1 Slot"
          : "Only 1 Spot Remaining"
        : isId
        ? `Tersisa ${remainingSpots} Slot`
        : `${remainingSpots} Spots Remaining`;

    return {
      status: "limited",
      label: text,
      badgeText: isId ? "Slot Terbatas" : "Limited Spots",
      isAvailable: true,
      colorClasses: {
        badge: "bg-amber-950/80 text-amber-300 border-amber-700/80",
        text: "text-amber-400",
        border: "border-amber-900/60",
        bg: "bg-amber-950/30",
        dot: "bg-amber-400 animate-pulse",
      },
    };
  }

  // Available (3 or more spots)
  const text = isId
    ? `${remainingSpots} Slot Tersedia`
    : `${remainingSpots} Spots Available`;

  return {
    status: "available",
    label: text,
    badgeText: isId ? "Tersedia" : "Available",
    isAvailable: true,
    colorClasses: {
      badge: "bg-emerald-950/80 text-emerald-300 border-emerald-700/80",
      text: "text-emerald-400",
      border: "border-emerald-900/60",
      bg: "bg-emerald-950/30",
      dot: "bg-emerald-400",
    },
  };
}

export interface PackageAvailabilitySummary {
  hasSchedules: boolean;
  nextSchedule?: TripSchedule;
  availabilityText: string;
  status: ScheduleAvailabilityStatus | "custom";
  badgeClasses: string;
}

/**
 * Computes a high-level availability summary for Package Cards across Home & Trips catalog
 */
export function getPackageAvailabilitySummary(
  pkg: Package,
  locale: Locale = "en"
): PackageAvailabilitySummary {
  const isId = locale === "id";

  if (pkg.format === "custom") {
    return {
      hasSchedules: false,
      status: "custom",
      availabilityText: isId ? "Jadwal Kustom / Sesuai Permintaan" : "Custom Dates on Request",
      badgeClasses: "bg-cyan-950/80 text-cyan-300 border-cyan-800/80",
    };
  }

  const schedules = pkg.schedules || [];
  if (schedules.length === 0) {
    return {
      hasSchedules: false,
      status: "available",
      availabilityText: isId ? "Hubungi untuk Jadwal Terdekat" : "Inquire for Next Dates",
      badgeClasses: "bg-slate-800 text-slate-300 border-slate-700",
    };
  }

  // Find next upcoming schedule that still has spots
  const availableSchedule = schedules.find((s) => s.remainingSpots > 0);

  if (!availableSchedule) {
    return {
      hasSchedules: true,
      status: "fully-booked",
      availabilityText: isId ? "Semua Jadwal Penuh" : "All Dates Fully Booked",
      badgeClasses: "bg-rose-950/80 text-rose-300 border-rose-800/80",
    };
  }

  const availabilityInfo = formatScheduleAvailability(
    availableSchedule.remainingSpots,
    availableSchedule.maxParticipants,
    locale
  );

  const dateText = availableSchedule.dateDisplay[locale] || availableSchedule.dateDisplay.en;

  return {
    hasSchedules: true,
    nextSchedule: availableSchedule,
    availabilityText: `${dateText} • ${availabilityInfo.label}`,
    status: availabilityInfo.status,
    badgeClasses: availabilityInfo.colorClasses.badge,
  };
}
