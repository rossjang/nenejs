# Blog System

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `blog` `backend`
- **Depends on**: `01-mdx-system.md`

## Description

블로그 MDX 시스템 연동 및 누락 컴포넌트 구현

## Tasks

- [ ] `content/blog/` 폴더 구조 생성
- [ ] 블로그 유틸리티 함수 생성
  - [ ] `getAllPosts()`
  - [ ] `getPostBySlug()`
  - [ ] `getPostsByCategory()`
- [ ] Reading time 자동 계산
- [ ] 누락 컴포넌트 생성
  - [ ] `author-bio.tsx`
  - [ ] `related-posts.tsx`
  - [ ] `share-buttons.tsx`
- [ ] 기존 컴포넌트 수정 (하드코딩 → MDX)
- [ ] 샘플 블로그 포스트 작성 (2-3개)

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

- [ ] 블로그 목록 페이지 MDX 기반으로 작동
- [ ] 개별 포스트 페이지 작동
- [ ] 카테고리 필터 작동
- [ ] Reading time 표시
- [ ] Author bio 표시
- [ ] Share 버튼 작동
