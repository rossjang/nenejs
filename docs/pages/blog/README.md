# Blog Page

## Page Info

- **Routes**:
  - `/blog` - Blog list
  - `/blog/[slug]` - Single post
- **Status**: 🔲 Pending
- **Priority**: Low

## Overview

Blog page for nene.js news, tutorials, and updates.

## Page Structure

### Blog List (`/blog`)

```
/blog
├── Hero Section
├── Featured Post (Large Card)
├── Category Filter
├── Post Grid
└── Pagination / Load More
```

### Blog Post (`/blog/[slug]`)

```
/blog/[slug]
├── Header (Title, Meta, Author)
├── Cover Image
├── Content (MDX)
├── Author Bio
├── Related Posts
└── Share Buttons
```

## Layout Design

### Blog List Hero

```
┌─────────────────────────────────────────────────────────────┐
│  Blog                                                        │
│  News, tutorials, and updates from the nene.js team         │
└─────────────────────────────────────────────────────────────┘
```

### Featured Post Card

```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────┐  ┌────────────────────────┐ │
│  │                            │  │  Category Tag          │ │
│  │    Featured Image          │  │  # Post Title          │ │
│  │    (16:9)                  │  │  Description text...   │ │
│  │                            │  │                        │ │
│  │                            │  │  Author • Date         │ │
│  └────────────────────────────┘  └────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Post Grid

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Post Card   │  │  Post Card   │  │  Post Card   │
│              │  │              │  │              │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Blog Post Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [← Back to Blog]                                           │
│                                                              │
│  Category Tag          Reading Time: 5 min                  │
│  # Post Title                                                │
│  Author Avatar  Author Name  •  Jan 15, 2026                │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                 Cover Image                          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  [MDX Content...]                                           │
│                                                              │
│  ───────────────────────────────────────────────────────    │
│  Author Bio Section                                         │
│  ───────────────────────────────────────────────────────    │
│  Related Posts                                              │
└─────────────────────────────────────────────────────────────┘
```

## Components to Build

### Blog List Components

#### 1. BlogHero

- **File**: `src/components/blog/hero.tsx`

#### 2. FeaturedPost

- **File**: `src/components/blog/featured-post.tsx`
- **Description**: Large featured post card

#### 3. BlogPostCard

- **File**: `src/components/blog/post-card.tsx`
- **Props**:
  ```typescript
  interface BlogPostCardProps {
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    author: Author;
    publishedAt: string;
    slug: string;
    readingTime: number;
  }
  ```

#### 4. BlogCategoryFilter

- **File**: `src/components/blog/category-filter.tsx`
- **Categories**: All, Announcements, Tutorials, Engineering

#### 5. BlogPagination

- **File**: `src/components/blog/pagination.tsx`

### Blog Post Components

#### 6. BlogPostHeader

- **File**: `src/components/blog/post-header.tsx`
- **Features**: Title, meta info, author

#### 7. BlogPostContent

- **File**: `src/components/blog/post-content.tsx`
- **Features**: MDX rendering, custom components

#### 8. AuthorBio

- **File**: `src/components/blog/author-bio.tsx`

#### 9. RelatedPosts

- **File**: `src/components/blog/related-posts.tsx`

#### 10. ShareButtons

- **File**: `src/components/blog/share-buttons.tsx`
- **Platforms**: Twitter, LinkedIn, Copy Link

## Data Structure

### Post Schema

```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX
  coverImage: string;
  category: "announcement" | "tutorial" | "engineering" | "community";
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
}

interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  twitter?: string;
  github?: string;
}
```

## Required Skills

### Content Developer

- **Required**:
  - MDX writing
  - Next.js App Router
  - React Server Components
  - TypeScript

- **Recommended**:
  - ContentLayer or next-mdx-remote
  - Image optimization
  - SEO optimization

### Required Packages (recommended)

```json
{
  "next-mdx-remote": "latest",
  "gray-matter": "latest",
  "reading-time": "latest",
  "rehype-pretty-code": "latest",
  "shiki": "latest"
}
```

## Content Guidelines

### Post Frontmatter

```yaml
---
title: "Introducing nene.js 1.0"
excerpt: "Today we're excited to announce..."
coverImage: "/blog/nene-1-0.jpg"
category: "announcement"
tags: ["release", "nene.js", "1.0"]
author: "johndoe"
publishedAt: "2026-01-15"
---
```

### MDX Components

- `<Callout type="info|warning|error">` - Callout box
- `<CodeBlock>` - Code block with tabs
- `<VideoEmbed>` - Video embed
- `<Tweet>` - Tweet embed

## Design Specifications

### Post Card

- Border radius: `rounded-xl`
- Image aspect: `aspect-video`
- Hover: Border color change, slight lift

### Typography (Blog Post)

- Title: `text-4xl md:text-5xl font-black`
- Excerpt: `text-xl text-slate-400`
- Body: `prose prose-invert` (Tailwind Typography)
- Code: `font-mono` with syntax highlighting

### Category Colors

| Category     | Color     |
| ------------ | --------- |
| Announcement | `#0070F3` |
| Tutorial     | `#10B981` |
| Engineering  | `#8B5CF6` |
| Community    | `#F59E0B` |

## SEO Requirements

- Meta tags per post
- Open Graph image auto generation
- Structured Data (Article schema)
- RSS Feed
- Include in Sitemap
