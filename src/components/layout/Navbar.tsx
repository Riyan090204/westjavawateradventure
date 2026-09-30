import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { ChevronDown, Anchor, MessageCircle, Compass } from "lucide-react";

interface NavbarProps {
  locale?: Locale;
}

export function Navbar({ locale = "en" }: NavbarProps) {
  const dict = getDictionary(locale);

  const navLinks = [
    {
      title: dict.nav.experiences,
      href: `/${locale}/experiences`,
      children: [
        {
          title: "Spearfishing",
          href: `/${locale}/experiences/spearfishing`,
          description: "Ethical underwater hunting, blue water & reef stalking",
        },
        {
          title: "Freediving",
          href: `/${locale}/experiences/freediving`,
          description: "Apnea, breath-hold discipline & depth training",
        },
        {
          title: "Scuba Diving",
          href: `/${locale}/experiences/scuba-diving`,
          description: "Fun dive, discovery dive & coral reef exploration",
        },
      ],
    },
    {
      title: dict.nav.trips,
      href: `/${locale}/trips`,
      children: [
        { title: dict.nav.allTrips, href: `/${locale}/trips` },
        { title: dict.nav.spearfishingTrips, href: `/${locale}/trips?activity=spearfishing` },
        { title: dict.nav.freedivingTrips, href: `/${locale}/trips?activity=freediving` },
        { title: dict.nav.scubaTrips, href: `/${locale}/trips?activity=scuba-diving` },
        { title: dict.nav.privateTrips, href: `/${locale}/trips?format=private` },
      ],
    },
    {
      title: dict.nav.diveSites,
      href: `/${locale}/dive-sites`,
    },
    {
      title: dict.nav.gallery,
      href: `/${locale}/gallery`,
    },
    {
      title: dict.nav.about,
      href: `/${locale}/about`,
    },
    {
      title: dict.nav.faq,
      href: `/${locale}/faq`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-cyan-950/50 group-hover:scale-105 transition-transform">
              <Anchor className="w-5 h-5 text-cyan-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase mt-0.5">
                West Java Ocean Expeditions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.title} className="relative group py-2">
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
                    >
                      <span>{link.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full hidden group-hover:block w-64 pt-2">
                      <div className="rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-800 shadow-2xl p-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-3 py-2.5 rounded-lg hover:bg-slate-800/90 text-sm transition-colors"
                          >
                            <div className="font-medium text-slate-200 hover:text-cyan-400">
                              {child.title}
                            </div>
                            {"description" in child && child.description && (
                              <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions (Language Switcher + Booking CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />

            <Link
              href={`/${locale}/trips`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>{dict.nav.exploreTrips}</span>
            </Link>

            <a
              href={buildWhatsAppGeneralUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{dict.nav.bookTrip}</span>
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <MobileNav locale={locale} />
        </div>
      </div>
    </header>
  );
}
