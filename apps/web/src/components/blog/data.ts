import { BlogPost } from "./types";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchBlogPosts(category?: string): Promise<BlogPost[]> {
  try {
    const params = new URLSearchParams();
    if (category && category !== "all") {
      params.set("category", category);
    }
    params.set("limit", "50");

    const res = await fetch(`${API_URL}/blog/posts?${params}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.items ?? [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/blog/posts/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.featured) ?? null;
}
