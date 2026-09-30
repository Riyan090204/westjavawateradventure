import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PackagesRedirect({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}/trips`);
}
