import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";
import { type Locale } from "@/lib/i18n";

const DOCS_PATH = path.join(process.cwd(), "content/docs");
const BLOG_PATH = path.join(process.cwd(), "content/blog");

export interface DocFrontmatter {
  title: string;
  description?: string;
  order?: number;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  category?: string;
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

/**
 * Get a documentation page by its slug
 */
export async function getDocBySlug(
  locale: Locale,
  slug: string[],
  components: Record<string, React.ComponentType<unknown>>
) {
  const filePath = path.join(DOCS_PATH, locale, ...slug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const { content: compiledContent } = await compileMDX<DocFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor"],
              },
            },
          ],
        ],
      },
    },
    components,
  });

  const toc = extractToc(content);

  return {
    content: compiledContent,
    frontmatter: data as DocFrontmatter,
    toc,
  };
}

/**
 * Get all documentation slugs for a locale
 */
export function getDocSlugs(locale: Locale): string[][] {
  const localePath = path.join(DOCS_PATH, locale);

  if (!fs.existsSync(localePath)) {
    return [];
  }

  const slugs: string[][] = [];

  function walkDir(dir: string, prefix: string[] = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath, [...prefix, file]);
      } else if (file.endsWith(".mdx")) {
        const slug = file.replace(/\.mdx$/, "");
        slugs.push([...prefix, slug]);
      }
    }
  }

  walkDir(localePath);
  return slugs;
}

/**
 * Get all blog posts
 */
export async function getBlogPosts(
  components: Record<string, React.ComponentType<unknown>>
) {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith(".mdx"));
  const posts = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const post = await getBlogPostBySlug(slug, components);
    if (post) {
      posts.push({ slug, ...post });
    }
  }

  // Sort by date, newest first
  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return posts;
}

/**
 * Get a blog post by its slug
 */
export async function getBlogPostBySlug(
  slug: string,
  components: Record<string, React.ComponentType<unknown>>
) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const { content: compiledContent } = await compileMDX<BlogFrontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor"],
              },
            },
          ],
        ],
      },
    },
    components,
  });

  const stats = readingTime(content);
  const toc = extractToc(content);

  return {
    content: compiledContent,
    frontmatter: data as BlogFrontmatter,
    readingTime: stats.text,
    toc,
  };
}

/**
 * Get blog post slugs
 */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_PATH)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Extract table of contents from markdown content
 */
function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  const slugger = new GithubSlugger();
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = slugger.slug(title);

    toc.push({ id, title, level });
  }

  return toc;
}

/**
 * Get documentation sidebar structure
 */
export function getDocsSidebar(locale: Locale) {
  const localePath = path.join(DOCS_PATH, locale);

  if (!fs.existsSync(localePath)) {
    return [];
  }

  interface SidebarSection {
    title: string;
    items: { title: string; slug: string; order: number }[];
    order: number;
  }

  const sections: SidebarSection[] = [];

  const directories = fs
    .readdirSync(localePath)
    .filter((f) => fs.statSync(path.join(localePath, f)).isDirectory());

  for (const dir of directories) {
    const dirPath = path.join(localePath, dir);
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

    const items: SidebarSection["items"] = [];

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const source = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(source);

      items.push({
        title: data.title || file.replace(/\.mdx$/, ""),
        slug: `${dir}/${file.replace(/\.mdx$/, "")}`,
        order: data.order || 999,
      });
    }

    // Sort items by order
    items.sort((a, b) => a.order - b.order);

    // Read section metadata if exists
    const sectionMetaPath = path.join(dirPath, "_meta.json");
    let sectionTitle = formatSectionTitle(dir);
    let sectionOrder = 999;

    if (fs.existsSync(sectionMetaPath)) {
      const meta = JSON.parse(fs.readFileSync(sectionMetaPath, "utf-8"));
      sectionTitle = meta.title || sectionTitle;
      sectionOrder = meta.order || sectionOrder;
    }

    sections.push({
      title: sectionTitle,
      items,
      order: sectionOrder,
    });
  }

  // Sort sections by order
  sections.sort((a, b) => a.order - b.order);

  return sections;
}

/**
 * Format section title from directory name
 */
function formatSectionTitle(dir: string): string {
  return dir
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
