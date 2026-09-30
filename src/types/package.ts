import { Locale } from "./locale";
import { ActivityType } from "./experience";

export type TripFormat = "join-trip" | "private" | "custom";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "all-levels";
export type ScheduleAvailabilityStatus = "available" | "limited" | "fully-booked";

export interface TripSchedule {
  id: string;
  dateDisplay: Record<Locale, string>;
  startDate: string; // ISO format e.g. "2026-10-24"
  endDate: string; // ISO format e.g. "2026-10-25"
  maxParticipants: number;
  /**
   * SINGLE SOURCE OF TRUTH FOR QUOTA:
   * Update this number manually after admin confirms a booking via WhatsApp.
   * - remainingSpots > 2: Available
   * - remainingSpots === 1 || 2: Limited Spots
   * - remainingSpots === 0: Fully Booked
   */
  remainingSpots: number;
  note?: Record<Locale, string>;
}

export interface ItineraryItem {
  dayOrTime: string;
  title: string;
  activities: string[];
}

export interface PackageFAQ {
  question: string;
  answer: string;
}

export interface PackageContent {
  name: string;
  location: string;
  meetingPoint?: string;
  startPoint?: string;
  duration: string;
  shortDescription: string;
  description: string;
  priceDisplay: string;
  priceNote?: string;
  highlights: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  requirements: string[];
  safetyNotes: string[];
  faqs: PackageFAQ[];
}

export interface Package {
  slug: string;
  activity: ActivityType;
  format: TripFormat;
  level: SkillLevel;
  duration: string;
  location: string;
  diveSiteSlug?: string;
  groupSize: string;
  priceDisplay: string;
  heroImage: string;
  gallery: string[];
  isFeatured?: boolean;
  available: boolean;
  schedules?: TripSchedule[];
  translations: Record<Locale, PackageContent>;
}
