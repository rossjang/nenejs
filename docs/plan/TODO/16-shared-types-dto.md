# Shared Types & DTOs — Blog, Showcase, Feature

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `backend` `ui`
- **Depends on**: `15-db-schema-extension.md`

## Description

`@nene/shared` 패키지에 Blog, Showcase, Feature 관련 TypeScript 인터페이스와 DTO를 추가한다.
프론트엔드와 백엔드 모두에서 동일한 타입을 사용하여 타입 안전성을 확보한다.

## Current State

**`packages/shared/src/types/`** — User, ApiResponse 등 기존 타입만 존재
**`packages/shared/src/dto/`** — Auth, User 관련 DTO만 존재
**`packages/shared/src/constants/`** — API_ROUTES에 새 경로 없음

## Tasks

- [ ] 타입 인터페이스 추가 (`packages/shared/src/types/`)
  - [ ] `blog.types.ts` — BlogPost, Author, BlogCategory
  - [ ] `showcase.types.ts` — ShowcaseProject, ShowcaseCategory
  - [ ] `feature.types.ts` — Feature, ComparisonRow
- [ ] DTO 추가 (`packages/shared/src/dto/`)
  - [ ] `blog.dto.ts` — CreateBlogPostDto, UpdateBlogPostDto, BlogQueryDto
  - [ ] `showcase.dto.ts` — CreateShowcaseProjectDto, ShowcaseQueryDto
  - [ ] `feature.dto.ts` — CreateFeatureDto, CreateComparisonRowDto
- [ ] API_ROUTES 상수 추가 (`packages/shared/src/constants/`)
  - [ ] `BLOG: { POSTS, POST_BY_SLUG, AUTHORS }`
  - [ ] `SHOWCASE: { PROJECTS, CATEGORIES, SUBMIT }`
  - [ ] `FEATURES: { LIST, COMPARISON }`
- [ ] index.ts에서 export 추가
- [ ] `pnpm build:shared` 빌드 확인

## Code Example

**`packages/shared/src/types/blog.types.ts`**

```typescript
export interface Author {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  category: BlogCategory;
  readingTime?: number;
  published: boolean;
  publishedAt?: string;
  author: Author;
  createdAt: string;
}

export type BlogCategory = 'announcement' | 'tutorial' | 'engineering' | 'community';
```

## Acceptance Criteria

- [ ] `pnpm build:shared` 성공
- [ ] `apps/api`에서 `import { BlogPost, CreateBlogPostDto } from '@nene/shared'` 가능
- [ ] `apps/web`에서 `import { BlogPost, API_ROUTES } from '@nene/shared'` 가능
- [ ] 기존 타입/DTO에 영향 없음
