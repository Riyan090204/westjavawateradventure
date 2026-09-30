import React from "react";
import { Experience } from "@/types/experience";
import { Locale } from "@/types/locale";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceGridProps {
  experiences: Experience[];
  locale?: Locale;
}

export function ExperienceGrid({ experiences, locale = "en" }: ExperienceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.slug} experience={exp} locale={locale} />
      ))}
    </div>
  );
}
