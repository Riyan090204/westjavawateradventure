import React from "react";
import { notFound } from "next/navigation";
import { LOCALES, Locale } from "@/types/locale";
import { isValidLocale } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/seo";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const orgSchema = generateOrganizationSchema(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar locale={locale as Locale} />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
