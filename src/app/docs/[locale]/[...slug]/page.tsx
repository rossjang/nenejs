import { notFound, redirect } from "next/navigation";
import { getDocBySlug, getDocSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import { TableOfContents } from "@/components/docs/toc";
import { DocContent } from "@/components/docs/doc-content";
import { isValidLocale, LOCALES, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export default async function DocPage({ params }: PageProps) {
  const { locale, slug } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    // If locale is invalid, redirect to default locale
    redirect(`/docs/en/${locale}/${slug.join("/")}`);
  }

  const doc = await getDocBySlug(
    locale as Locale,
    slug,
    mdxComponents as Record<string, React.ComponentType<unknown>>
  );

  if (!doc) {
    notFound();
  }

  return (
    <>
      <DocContent
        title={doc.frontmatter.title}
        description={doc.frontmatter.description}
        locale={locale as Locale}
      >
        {doc.content}
      </DocContent>
      <TableOfContents items={doc.toc} />
    </>
  );
}

export async function generateStaticParams() {
  const paths: { locale: string; slug: string[] }[] = [];

  for (const locale of LOCALES) {
    const slugs = getDocSlugs(locale);
    for (const slug of slugs) {
      paths.push({
        locale,
        slug,
      });
    }
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Not Found | nene.js Docs",
    };
  }

  const doc = await getDocBySlug(
    locale as Locale,
    slug,
    mdxComponents as Record<string, React.ComponentType<unknown>>
  );

  if (!doc) {
    return {
      title: "Not Found | nene.js Docs",
    };
  }

  const slugPath = slug.join("/");

  return {
    title: `${doc.frontmatter.title} | nene.js Docs`,
    description: doc.frontmatter.description,
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l, `/docs/${l}/${slugPath}`])
      ),
    },
  };
}
