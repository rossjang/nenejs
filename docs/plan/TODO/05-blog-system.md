# Blog System

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `blog` `backend`
- **Depends on**: `01-mdx-system.md`

## Description

Wire blog to MDX system and implement missing components

## Tasks

- [ ] Create `content/blog/` folder structure
- [ ] Create blog utility functions
  - [ ] `getAllPosts()`
  - [ ] `getPostBySlug()`
  - [ ] `getPostsByCategory()`
- [ ] Auto-calculate reading time
- [ ] Create missing components
  - [ ] `author-bio.tsx`
  - [ ] `related-posts.tsx`
  - [ ] `share-buttons.tsx`
- [ ] Update existing components (hardcoded → MDX)
- [ ] Write sample blog posts (2–3)

## Files to Create

```
content/blog/
├── introducing-nene-js.mdx
├── ai-optimized-development.mdx
└── unified-architecture.mdx

src/
├── lib/
│   └── blog.ts
└── components/blog/
    ├── author-bio.tsx
    ├── related-posts.tsx
    └── share-buttons.tsx
```

## Blog Post Example

```mdx
---
title: Introducing nene.js
excerpt: The unified framework that brings together Next.js and NestJS
coverImage: /blog/introducing-nene.jpg
category: announcement
author: ross
publishedAt: 2026-02-01
---

# Introducing nene.js

Today we're excited to announce...
```

## Code Example

**`src/lib/blog.ts`**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

export async function getAllPosts() {
  const files = fs.readdirSync(BLOG_PATH);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, file), "utf-8");
      const { data, content } = matter(source);

      return {
        slug: file.replace(".mdx", ""),
        ...data,
        readingTime: readingTime(content).minutes,
      };
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
```

## Acceptance Criteria

- [ ] Blog list page works from MDX
- [ ] Individual post page works
- [ ] Category filter works
- [ ] Reading time is shown
- [ ] Author bio is shown
- [ ] Share buttons work
