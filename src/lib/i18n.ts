import { Locale, LOCALES, DEFAULT_LOCALE } from "@/types/locale";
import { UI_DICTIONARY } from "@/config/site";

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getDictionary(locale: Locale = DEFAULT_LOCALE) {
  return UI_DICTIONARY[locale] || UI_DICTIONARY.en;
}

export function formatLocalizedActivity(activity: string, locale: Locale = DEFAULT_LOCALE): string {
  switch (activity) {
    case "spearfishing":
      return "Spearfishing";
    case "freediving":
      return "Freediving";
    case "scuba-diving":
      return locale === "id" ? "Scuba Diving" : "Scuba Diving";
    default:
      return activity;
  }
}

export function formatLocalizedTripFormat(format: string, locale: Locale = DEFAULT_LOCALE): string {
  if (locale === "id") {
    switch (format) {
      case "join-trip":
        return "Join Trip";
      case "private":
        return "Private Trip";
      case "custom":
        return "Custom Expedition";
      default:
        return format;
    }
  }

  switch (format) {
    case "join-trip":
      return "Join Trip / Open Group";
    case "private":
      return "Private Charter";
    case "custom":
      return "Custom Expedition";
    default:
      return format;
  }
}

export function formatLocalizedSkillLevel(level: string, locale: Locale = DEFAULT_LOCALE): string {
  if (locale === "id") {
    switch (level) {
      case "beginner":
        return "Pemula / Beginner";
      case "intermediate":
        return "Menengah / Intermediate";
      case "advanced":
        return "Mahir / Advanced";
      case "all-levels":
        return "Semua Level";
      default:
        return level;
    }
  }

  switch (level) {
    case "beginner":
      return "Beginner";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    case "all-levels":
      return "All Levels";
    default:
      return level;
  }
}

/**
 * Given a pathname (with or without locale), generates the path for the target locale.
 * Example:
 * /en/trips/3d2n-spearfishing -> /id/trips/3d2n-spearfishing
 * /trips -> /en/trips
 */
export function getAlternateLanguagePath(pathname: string, targetLocale: Locale): string {
  let cleanPath = pathname;

  for (const loc of LOCALES) {
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    } else if (cleanPath === `/${loc}`) {
      cleanPath = "/";
      break;
    }
  }

  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  if (cleanPath === "/") {
    return `/${targetLocale}`;
  }

  return `/${targetLocale}${cleanPath}`;
}
