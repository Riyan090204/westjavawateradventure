import React from "react";
import Link from "next/link";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale?: Locale;
  className?: string;
}

export function Breadcrumb({ items, locale = "en", className = "" }: BreadcrumbProps) {
  const dict = getDictionary(locale);

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-slate-400 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="flex items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors text-slate-400"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{dict.common.home}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-cyan-400 transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
