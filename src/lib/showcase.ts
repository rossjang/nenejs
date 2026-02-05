import showcaseData from "@/data/showcase.json";

export interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  url: string;
  github?: string;
  featured: boolean;
}

export function getAllProjects(): ShowcaseProject[] {
  return showcaseData.projects as ShowcaseProject[];
}

export function getFeaturedProjects(): ShowcaseProject[] {
  return showcaseData.projects.filter((p) => p.featured) as ShowcaseProject[];
}

export function getProjectsByCategory(category: string): ShowcaseProject[] {
  if (category === "all") return showcaseData.projects as ShowcaseProject[];
  return showcaseData.projects.filter(
    (p) => p.category === category
  ) as ShowcaseProject[];
}

export function getProjectBySlug(slug: string): ShowcaseProject | undefined {
  return showcaseData.projects.find(
    (p) => p.slug === slug
  ) as ShowcaseProject | undefined;
}

export function getCategories(): string[] {
  return ["all", ...new Set(showcaseData.projects.map((p) => p.category))];
}
