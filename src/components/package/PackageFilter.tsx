"use client";

import React, { useState, useMemo } from "react";
import { Package } from "@/types/package";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { PackageCard } from "./PackageCard";
import { Filter, RotateCcw } from "lucide-react";

interface PackageFilterProps {
  initialPackages: Package[];
  initialActivity?: string;
  initialFormat?: string;
  locale?: Locale;
}

export function PackageFilter({
  initialPackages,
  initialActivity = "all",
  initialFormat = "all",
  locale = "en",
}: PackageFilterProps) {
  const [selectedActivity, setSelectedActivity] = useState<string>(initialActivity);
  const [selectedFormat, setSelectedFormat] = useState<string>(initialFormat);
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const dict = getDictionary(locale);

  const filteredPackages = useMemo(() => {
    return initialPackages.filter((pkg) => {
      const matchActivity = selectedActivity === "all" || pkg.activity === selectedActivity;
      const matchFormat = selectedFormat === "all" || pkg.format === selectedFormat;
      const matchLevel =
        selectedLevel === "all" ||
        pkg.level === selectedLevel ||
        pkg.level === "all-levels";

      return matchActivity && matchFormat && matchLevel;
    });
  }, [initialPackages, selectedActivity, selectedFormat, selectedLevel]);

  const resetFilters = () => {
    setSelectedActivity("all");
    setSelectedFormat("all");
    setSelectedLevel("all");
  };

  const isFiltered =
    selectedActivity !== "all" || selectedFormat !== "all" || selectedLevel !== "all";

  return (
    <div className="space-y-8">
      {/* Filter Control Bar */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span>
              {locale === "id" ? "Filter Trip & Paket" : "Filter Trips & Expeditions"}
            </span>
          </div>

          {isFiltered && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{dict.common.resetFilters}</span>
            </button>
          )}
        </div>

        {/* Filter Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Activity Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              1. {dict.common.activity}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: dict.common.allActivities },
                { id: "spearfishing", label: "Spearfishing" },
                { id: "freediving", label: "Freediving" },
                { id: "scuba-diving", label: "Scuba Diving" },
              ].map((act) => (
                <button
                  key={act.id}
                  onClick={() => setSelectedActivity(act.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedActivity === act.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-950"
                      : "bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {act.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Format Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              2. {dict.common.format}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: dict.common.allFormats },
                { id: "join-trip", label: locale === "id" ? "Join Trip" : "Join Trip" },
                { id: "private", label: locale === "id" ? "Private Trip" : "Private Charter" },
                { id: "custom", label: locale === "id" ? "Custom Expedition" : "Custom Expedition" },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setSelectedFormat(fmt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedFormat === fmt.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-950"
                      : "bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Skill Level Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              3. {dict.common.level}
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: dict.common.allLevels },
                { id: "beginner", label: "Beginner" },
                { id: "intermediate", label: "Intermediate" },
                { id: "advanced", label: "Advanced" },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedLevel === lvl.id
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-950"
                      : "bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Package Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          {dict.common.showing} <strong className="text-white">{filteredPackages.length}</strong> {dict.common.availableTrips}
        </span>
      </div>

      {/* Grid Display */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
          <p className="text-slate-300 text-base">
            {dict.common.noResults}
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors"
          >
            {dict.common.viewAllTrips}
          </button>
        </div>
      )}
    </div>
  );
}
