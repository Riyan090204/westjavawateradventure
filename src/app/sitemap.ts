import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { LOCALES } from "@/types/locale";
import { PACKAGES_DATA } from "@/data/packages";
import { DIVE_SITES_DATA } from "@/data/dive-sites";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Base static sub-paths (without locale prefix)
  const staticPaths = [
    "",
    "/experiences",
    "/experiences/spearfishing",
    "/experiences/freediving",
    "/experiences/scuba-diving",
    "/trips",
    "/dive-sites",
    "/gallery",
    "/about",
    "/faq",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each static path across all supported locales
  staticPaths.forEach((path) => {
    LOCALES.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path === "" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${path === "" ? "" : path}`,
            id: `${baseUrl}/id${path === "" ? "" : path}`,
            "x-default": `${baseUrl}/en${path === "" ? "" : path}`,
          },
        },
      });
    });
  });

  // Package / Trip dynamic routes across all locales
  PACKAGES_DATA.forEach((pkg) => {
    LOCALES.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/trips/${pkg.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: {
            en: `${baseUrl}/en/trips/${pkg.slug}`,
            id: `${baseUrl}/id/trips/${pkg.slug}`,
            "x-default": `${baseUrl}/en/trips/${pkg.slug}`,
          },
        },
      });
    });
  });

  // Dive Site dynamic routes across all locales
  DIVE_SITES_DATA.forEach((site) => {
    LOCALES.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/dive-sites/${site.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en/dive-sites/${site.slug}`,
            id: `${baseUrl}/id/dive-sites/${site.slug}`,
            "x-default": `${baseUrl}/en/dive-sites/${site.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
