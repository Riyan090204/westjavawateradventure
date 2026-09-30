export type Locale = "en" | "id";

export const LOCALES: Locale[] = ["en", "id"];
export const DEFAULT_LOCALE: Locale = "en";

export interface LocalizedString {
  en: string;
  id: string;
}

export interface LocalizedArray {
  en: string[];
  id: string[];
}
