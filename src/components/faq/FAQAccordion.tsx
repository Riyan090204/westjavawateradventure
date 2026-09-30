"use client";

import React, { useState } from "react";
import { FAQItem, FAQCategory } from "@/types/faq";
import { Locale } from "@/types/locale";
import { ChevronDown, Search } from "lucide-react";

interface FAQAccordionProps {
  items: FAQItem[];
  locale?: Locale;
}

export function FAQAccordion({ items, locale = "en" }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all");
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: { id: FAQCategory; label: string }[] =
    locale === "id"
      ? [
          { id: "all", label: "Semua Kategori" },
          { id: "general", label: "Umum & Persiapan" },
          { id: "spearfishing", label: "Spearfishing" },
          { id: "freediving", label: "Freediving" },
          { id: "scuba-diving", label: "Scuba Diving" },
          { id: "booking-logistics", label: "Booking & Logistik" },
          { id: "safety", label: "Keselamatan Laut" },
        ]
      : [
          { id: "all", label: "All Topics" },
          { id: "general", label: "General & Prerequisites" },
          { id: "spearfishing", label: "Spearfishing" },
          { id: "freediving", label: "Freediving" },
          { id: "scuba-diving", label: "Scuba Diving" },
          { id: "booking-logistics", label: "Booking & Logistics" },
          { id: "safety", label: "Ocean Safety" },
        ];

  const filteredItems = items.filter((item) => {
    const content = item.translations[locale] || item.translations.en;
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchQuery =
      searchQuery.trim() === "" ||
      content.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchQuery;
  });

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Search Input & Category Pills */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={
              locale === "id"
                ? "Cari pertanyaan seputar peralatan, jadwal, lisensi..."
                : "Search questions about gear, certifications, seasons, safety..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 text-sm transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-950"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const content = item.translations[locale] || item.translations.en;
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {content.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-950 text-cyan-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    <p>{content.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-slate-400 text-sm">
            {locale === "id"
              ? "Tidak ada pertanyaan yang sesuai dengan pencarian Anda."
              : "No matching questions found for your search query."}
          </div>
        )}
      </div>
    </div>
  );
}
