export {
  BLOG_CATEGORY_COLORS as CATEGORY_COLORS,
  BLOG_CATEGORY_LABELS as CATEGORY_LABELS,
} from "@/lib/constants/blog";

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
