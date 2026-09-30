import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/i18n";
import { buildWhatsAppGeneralUrl } from "@/lib/whatsapp";
import { Anchor, ShieldCheck, MapPin, Mail, MessageCircle, ExternalLink } from "lucide-react";

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const dict = getDictionary(locale);

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400">
      {/* Top Banner: Ocean Safety & Sustainability */}
      <div className="border-b border-slate-900/80 bg-slate-900/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm sm:text-base">
                {dict.footer.safetyNotice}
              </h4>
              <p className="text-xs text-slate-400">
                {dict.footer.safetySub}
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppGeneralUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 hover:bg-cyan-900/80 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{dict.footer.quickWhatsApp}</span>
          </a>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white">
                <Anchor className="w-4 h-4 text-cyan-100" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.descriptions[locale]}
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{SITE_CONFIG.location[locale]}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{SITE_CONFIG.whatsappDisplay}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Experiences */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              {dict.nav.experiences}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/experiences/spearfishing`} className="hover:text-cyan-400 transition-colors">
                  Spearfishing
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences/freediving`} className="hover:text-cyan-400 transition-colors">
                  Freediving
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences/scuba-diving`} className="hover:text-cyan-400 transition-colors">
                  Scuba Diving
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`} className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1">
                  {locale === "id" ? "Lihat Semua Edukasi" : "View All Experiences"} <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Trips & Packages */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              {dict.nav.trips}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/trips?activity=spearfishing`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.spearfishingTrips}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/trips?activity=freediving`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.freedivingTrips}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/trips?activity=scuba-diving`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.scubaTrips}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/trips?format=private`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.privateTrips}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/trips`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.allTrips}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Destinations & Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/dive-sites`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.diveSites}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-cyan-400 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {dict.footer.rightsReserved}
          </p>
          <div className="flex items-center space-x-4">
            <Link href={`/${locale}/about`} className="hover:text-slate-300">
              {dict.nav.about}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/faq`} className="hover:text-slate-300">
              {dict.nav.faq}
            </Link>
            <span>•</span>
            <Link href={`/${locale}/contact`} className="hover:text-slate-300">
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
