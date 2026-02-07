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
      "Today we're excited to announce the public release of nene.js, the full-stack framework that merges Next.js and NestJS in one monorepo with shared types and auto-generated hooks.",
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
    slug: "auto-generated-hooks-deep-dive",
    title: "Deep Dive: Auto-Generated Hooks in nene.js",
    excerpt:
      "How nene.js generates type-safe React hooks from your NestJS controllers. Write your API once, use useGetUsers() and useCreateUser() on the frontend with no fetch boilerplate.",
    category: "engineering",
    tags: ["hooks", "codegen", "types"],
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
      "Learn how to implement real-time functionality in your nene.js applications using WebSockets and Server-Sent Events with a shared API layer.",
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
      "Check out the projects our community has built with nene.js this month—dashboards, tools, and full-stack apps using shared types and auto-generated hooks.",
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
