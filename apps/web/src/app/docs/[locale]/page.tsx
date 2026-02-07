import { redirect, notFound } from "next/navigation";
import { isValidLocale, LOCALES } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocaleDocsPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    // If the locale is not valid, it might be a slug like "getting-started"
    // Redirect to default locale with the slug
    redirect(`/docs/en/${locale}`);
  }

  // Redirect to the default documentation page for this locale
  redirect(`/docs/${locale}/getting-started/installation`);
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Documentation | nene.js",
    };
  }

  return {
    title: "Documentation | nene.js",
    description: "Learn how to build full-stack applications with nene.js",
  };
}
