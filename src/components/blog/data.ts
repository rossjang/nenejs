import { BlogPost, Author } from "./types";

const authors: Record<string, Author> = {
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatar: "",
    role: "Core Team Lead",
    twitter: "johndoe",
    github: "johndoe",
  },
  janesmith: {
    id: "janesmith",
    name: "Jane Smith",
    avatar: "",
    role: "Developer Advocate",
    twitter: "janesmith",
    github: "janesmith",
  },
  alexchen: {
    id: "alexchen",
    name: "Alex Chen",
    avatar: "",
    role: "Software Engineer",
    twitter: "alexchen",
    github: "alexchen",
  },
};

export const samplePosts: BlogPost[] = [
  {
    id: "1",
    slug: "introducing-nene-js",
    title: "Introducing nene.js 1.0",
    excerpt:
      "Today we're excited to announce the public release of nene.js, the AI-native full-stack framework that merges the best of Next.js and NestJS into one seamless experience.",
    category: "announcement",
    tags: ["release", "nene.js", "1.0"],
    author: authors.johndoe,
    publishedAt: "2026-01-15",
    readingTime: 5,
    featured: true,
  },
  {
    id: "2",
    slug: "getting-started-tutorial",
    title: "Getting Started with nene.js",
    excerpt:
      "Learn how to build your first nene.js app in 10 minutes. We'll cover project setup, creating your first API route, and deploying to production.",
    category: "tutorial",
    tags: ["tutorial", "beginner", "getting-started"],
    author: authors.janesmith,
    publishedAt: "2026-01-10",
    readingTime: 10,
    featured: false,
  },
  {
    id: "3",
    slug: "ai-optimization-deep-dive",
    title: "Deep Dive: AI Optimization in nene.js",
    excerpt:
      "Explore how nene.js leverages AI to automatically optimize your application's performance, from bundle splitting to predictive prefetching.",
    category: "engineering",
    tags: ["ai", "optimization", "performance"],
    author: authors.alexchen,
    publishedAt: "2026-01-08",
    readingTime: 15,
    featured: false,
  },
  {
    id: "4",
    slug: "building-real-time-features",
    title: "Building Real-time Features with nene.js",
    excerpt:
      "Learn how to implement real-time functionality in your nene.js applications using WebSockets and Server-Sent Events with our unified context system.",
    category: "tutorial",
    tags: ["real-time", "websockets", "sse"],
    author: authors.janesmith,
    publishedAt: "2026-01-05",
    readingTime: 12,
    featured: false,
  },
  {
    id: "5",
    slug: "community-showcase-january",
    title: "Community Showcase: January 2026",
    excerpt:
      "Check out the amazing projects our community has built with nene.js this month, from AI-powered dashboards to real-time collaboration tools.",
    category: "community",
    tags: ["community", "showcase", "projects"],
    author: authors.johndoe,
    publishedAt: "2026-01-02",
    readingTime: 8,
    featured: false,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return samplePosts.find((post) => post.featured);
}

export function getPostsByCategory(
  category: BlogPost["category"] | "all"
): BlogPost[] {
  if (category === "all") {
    return samplePosts;
  }
  return samplePosts.filter((post) => post.category === category);
}
