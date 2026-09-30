import { Locale } from "./locale";

export type ActivityType = "spearfishing" | "freediving" | "scuba-diving";

export interface ExperienceLevelInfo {
  level: string;
  badge: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  description: string;
  prerequisites: string[];
}

export interface SafetyProtocol {
  title: string;
  description: string;
}

export interface ExperienceCondition {
  season: string;
  visibility: string;
  waterTemp: string;
  currents: string;
}

export interface ExperienceContent {
  name: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  whoIsThisFor: {
    title: string;
    description: string;
  }[];
  skillLevels: ExperienceLevelInfo[];
  safetyProtocols: SafetyProtocol[];
  equipment: {
    provided: string[];
    requiredOrRecommended: string[];
  };
  whatToExpect: string[];
  typicalConditions: ExperienceCondition;
}

export interface Experience {
  slug: string;
  activity: ActivityType;
  heroImage: string;
  gallery: string[];
  relatedPackageSlugs: string[];
  relatedDiveSiteSlugs: string[];
  translations: Record<Locale, ExperienceContent>;
}
