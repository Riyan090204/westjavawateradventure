"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/types/locale";
import { getAlternateLanguagePath } from "@/lib/i18n";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
  variant?: "desktop" | "mobile";
}

export function LanguageSwitcher({
  currentLocale,
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${currentLocale}`;

  const languages: { code: Locale; label: string; short: string }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "id", label: "Bahasa Indonesia", short: "ID" },
  ];

  if (variant === "mobile") {
    return (
      <div className={`flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 ${className}`}>
        <Globe className="w-4 h-4 text-cyan-400 ml-1 flex-shrink-0" />
        <div className="grid grid-cols-2 gap-1 w-full">
          {languages.map((lang) => {
            const isActive = currentLocale === lang.code;
            const targetHref = getAlternateLanguagePath(pathname, lang.code);

            return (
              <Link
                key={lang.code}
                href={targetHref}
                className={`flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
                aria-label={`Switch to ${lang.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                {lang.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-xl bg-slate-900/90 border border-slate-800 p-1 backdrop-blur-md shadow-sm ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-cyan-400 ml-2 mr-1.5 flex-shrink-0" />
      {languages.map((lang) => {
        const isActive = currentLocale === lang.code;
        const targetHref = getAlternateLanguagePath(pathname, lang.code);

        return (
          <Link
            key={lang.code}
            href={targetHref}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              isActive
                ? "bg-cyan-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-slate-800/80"
            }`}
            title={`Switch to ${lang.label}`}
            aria-label={`Switch to ${lang.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            {lang.short}
          </Link>
        );
      })}
    </div>
  );
}
