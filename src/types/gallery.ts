import { Locale } from "./locale";

export type GalleryCategory =
  | "all"
  | "spearfishing"
  | "freediving"
  | "scuba-diving"
  | "underwater"
  | "trip-documentation";

export interface GalleryItemContent {
  title: string;
  location: string;
  caption?: string;
}

export interface GalleryItem {
  id: string;
  category: "spearfishing" | "freediving" | "scuba-diving" | "underwater" | "trip-documentation";
  image: string;
  translations: Record<Locale, GalleryItemContent>;
}
