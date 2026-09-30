import React from "react";
import { DiveSite } from "@/types/dive-site";
import { Locale } from "@/types/locale";
import { DiveSiteCard } from "./DiveSiteCard";

interface DiveSiteGridProps {
  diveSites: DiveSite[];
  locale?: Locale;
}

export function DiveSiteGrid({ diveSites, locale = "en" }: DiveSiteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {diveSites.map((site) => (
        <DiveSiteCard key={site.slug} diveSite={site} locale={locale} />
      ))}
    </div>
  );
}
