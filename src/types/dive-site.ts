import { Locale } from "./locale";
import { ActivityType } from "./experience";

export interface DivePointContent {
  name: string;
  bottomType: string;
  highlight: string;
}

export interface DivePoint {
  id: string;
  depthRange: string;
  currentLevel: "Gentle" | "Moderate" | "Strong" | "Variable";
  visibilityRange: string;
  suitableActivities: ActivityType[];
  translations: Record<Locale, DivePointContent>;
}

export interface DiveSiteConditions {
  bestSeason: string;
  waterTemp: string;
  visibility: string;
  currents: string;
}

export interface DiveSiteContent {
  name: string;
  region: string;
  shortDescription: string;
  description: string;
  conditions: DiveSiteConditions;
  marineLife: string[];
  access: string;
  safetyNotes: string[];
}

export interface DiveSite {
  slug: string;
  heroImage: string;
  gallery: string[];
  activities: ActivityType[];
  divePoints: DivePoint[];
  relatedPackageSlugs: string[];
  translations: Record<Locale, DiveSiteContent>;
}
