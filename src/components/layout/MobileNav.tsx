"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ChevronDown, Compass, MessageCircle } from "lucide-react";

interface MobileNavProps {
  locale?: Locale;
}

export function MobileNav({ locale = "en" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const dict = getDictionary(locale);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const navLinks = [
    {
      title: dict.nav.experiences,
      href: `/${locale}/experiences`,
      children: [
        { title: "Spearfishing", href: `/${locale}/experiences/spearfishing` },
        { title: "Freediving", href: `/${locale}/experiences/freediving` },
        { title: "Scuba Diving", href: `/${locale}/experiences/scuba-diving` },
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
    {
      title: dict.nav.contact,
      href: `/${locale}/contact`,
    },
  ];

  return (
    <div className="lg:hidden flex items-center gap-2">
      <LanguageSwitcher currentLocale={locale} />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/80 backdrop-blur-md z-40 transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-full max-w-sm bg-slate-950 border-l border-slate-800/80 p-6 overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="pb-2">
            <LanguageSwitcher currentLocale={locale} variant="mobile" />
          </div>

          {navLinks.map((link) => (
            <div key={link.title} className="border-b border-slate-900 pb-3">
              {link.children ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(link.title)}
                    className="flex items-center justify-between w-full py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 text-left"
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSubmenu === link.title ? "rotate-180 text-cyan-400" : "text-slate-500"
                      }`}
                    />
                  </button>
                  {openSubmenu === link.title && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-cyan-900/40">
                      {link.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={closeMenu}
                          className="block py-1.5 text-sm text-slate-400 hover:text-cyan-300"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}

          {/* Quick CTA inside Mobile Menu */}
          <div className="pt-4 space-y-3">
            <Link
              href={`/${locale}/trips`}
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-cyan-950/50"
            >
              <Compass className="w-4 h-4" />
              <span>{dict.nav.exploreTrips}</span>
            </Link>

            <a
              href={buildWhatsAppGeneralUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-emerald-950/50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{dict.common.bookWhatsApp}</span>
            </a>
          </div>

          <div className="pt-6 text-xs text-slate-500 text-center">
            <p>{SITE_CONFIG.location[locale]}</p>
            <p className="mt-1">{SITE_CONFIG.whatsappDisplay}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
