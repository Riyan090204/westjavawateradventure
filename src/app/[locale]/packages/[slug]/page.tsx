import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function PackageSlugRedirect({ params }: PageProps) {
  const { locale, slug } = await params;
  redirect(`/${locale}/trips/${slug}`);
}
