"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem, GalleryCategory } from "@/types/gallery";
import { Locale } from "@/types/locale";
import { MapPin } from "lucide-react";

interface GalleryFilterProps {
  items: GalleryItem[];
  locale?: Locale;
}

export function GalleryFilter({ items, locale = "en" }: GalleryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const categories: { id: GalleryCategory; label: string }[] =
    locale === "id"
      ? [
          { id: "all", label: "Semua Foto" },
          { id: "spearfishing", label: "Spearfishing" },
          { id: "freediving", label: "Freediving" },
          { id: "scuba-diving", label: "Scuba Diving" },
          { id: "underwater", label: "Biota Bawah Laut" },
          { id: "trip-documentation", label: "Dokumentasi Trip" },
        ]
      : [
          { id: "all", label: "All Photos" },
          { id: "spearfishing", label: "Spearfishing" },
          { id: "freediving", label: "Freediving" },
          { id: "scuba-diving", label: "Scuba Diving" },
          { id: "underwater", label: "Marine Life" },
          { id: "trip-documentation", label: "Trip Documentation" },
        ];

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-950 font-bold"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const content = item.translations[locale] || item.translations.en;
          return (
            <div
              key={item.id}
              className="group relative h-80 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-xl"
            >
              <Image
                src={item.image}
                alt={content.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{content.location}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {content.title}
                </h3>
                {content.caption && (
                  <p className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {content.caption}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
