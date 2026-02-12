const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface ShowcaseProject {
  id: string;
  slug: string;
  name: string;
  description: string;
  image?: string;
  category: string;
  tags: string[];
  url?: string;
  github?: string;
  featured: boolean;
}

export async function getAllProjects(): Promise<ShowcaseProject[]> {
  try {
    const res = await fetch(`${API_URL}/showcase/projects`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getFeaturedProjects(): Promise<ShowcaseProject[]> {
  try {
    const res = await fetch(`${API_URL}/showcase/projects?featured=true`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProjectsByCategory(category: string): Promise<ShowcaseProject[]> {
  if (category === "all") return getAllProjects();
  try {
    const res = await fetch(`${API_URL}/showcase/projects?category=${category}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<ShowcaseProject | null> {
  try {
    const res = await fetch(`${API_URL}/showcase/projects/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<string[]> {
  const projects = await getAllProjects();
  return ["all", ...new Set(projects.map((p) => p.category))];
}
