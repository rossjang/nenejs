export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  twitter?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  category: "announcement" | "tutorial" | "engineering" | "community";
  tags?: string[];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
}

export const CATEGORY_COLORS: Record<BlogPost["category"], string> = {
  announcement: "#0070F3",
  tutorial: "#10B981",
  engineering: "#8B5CF6",
  community: "#F59E0B",
};

export const CATEGORY_LABELS: Record<BlogPost["category"], string> = {
  announcement: "Announcement",
  tutorial: "Tutorial",
  engineering: "Engineering",
  community: "Community",
};
