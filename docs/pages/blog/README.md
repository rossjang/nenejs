# Blog Page

## Page Info

- **Routes**:
  - `/blog` - 블로그 목록
  - `/blog/[slug]` - 개별 포스트
- **Status**: 🔲 Pending
- **Priority**: Low

## Overview

nene.js 관련 뉴스, 튜토리얼, 업데이트를 공유하는 블로그 페이지입니다.

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
- **Description**: 대형 피처드 포스트 카드

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
- **Features**: MDX 렌더링, 커스텀 컴포넌트

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

- **필수 역량**:

  - MDX 작성
  - Next.js App Router
  - React Server Components
  - TypeScript

- **권장 역량**:
  - ContentLayer 또는 next-mdx-remote
  - 이미지 최적화
  - SEO 최적화

### Required Packages (추천)

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

- `<Callout type="info|warning|error">` - 강조 박스
- `<CodeBlock>` - 코드 블록 with 탭
- `<VideoEmbed>` - 비디오 임베드
- `<Tweet>` - 트윗 임베드

## Design Specifications

### Post Card

- Border radius: `rounded-xl`
- Image aspect: `aspect-video`
- Hover effect: border color change, slight lift

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

- 각 포스트별 메타 태그
- Open Graph 이미지 자동 생성
- Structured Data (Article schema)
- RSS Feed
- Sitemap 포함
