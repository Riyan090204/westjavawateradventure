import { Locale } from "./locale";

export type FAQCategory =
  | "all"
  | "general"
  | "spearfishing"
  | "freediving"
  | "scuba-diving"
  | "booking-logistics"
  | "safety";

export interface FAQItemContent {
  question: string;
  answer: string;
}

export interface FAQItem {
  id: string;
  category: "general" | "spearfishing" | "freediving" | "scuba-diving" | "booking-logistics" | "safety";
  translations: Record<Locale, FAQItemContent>;
}
