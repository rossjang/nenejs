# Showcase Page

## Page Info

- **Route**: `/showcase`
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

nene.js로 구축된 실제 프로젝트들을 소개하는 갤러리 페이지입니다. 커뮤니티 프로젝트와 공식 예제를 포함합니다.

## Page Structure

```
/showcase
├── Hero Section
├── Filter/Category Tabs
├── Project Grid
├── Submit Your Project CTA
└── Featured Projects Section
```

## Layout Design

### Hero Section

- 심플한 타이틀: "Built with nene.js"
- 서브텍스트: "Explore production apps and community projects"

### Filter Tabs

```
[ All ] [ AI Apps ] [ SaaS ] [ E-commerce ] [ Open Source ]
```

### Project Grid

```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Project    │  │   Project    │  │   Project    │       │
│  │   Card 1     │  │   Card 2     │  │   Card 3     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Project    │  │   Project    │  │   Project    │       │
│  │   Card 4     │  │   Card 5     │  │   Card 6     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## Components to Build

### 1. ShowcaseHero

- **File**: `src/components/showcase/hero.tsx`
- **Description**: 쇼케이스 페이지 히어로

### 2. ShowcaseFilters

- **File**: `src/components/showcase/filters.tsx`
- **Description**: 카테고리 필터 탭
- **Features**:
  - 탭 스타일 필터
  - URL 쿼리 파라미터 연동
  - 필터 상태 유지

### 3. ShowcaseGrid

- **File**: `src/components/showcase/grid.tsx`
- **Description**: 프로젝트 카드 그리드
- **Features**:
  - 반응형 그리드
  - 무한 스크롤 또는 페이지네이션
  - 로딩 스켈레톤

### 4. ShowcaseCard

- **File**: `src/components/showcase/card.tsx`
- **Description**: 개별 프로젝트 카드
- **Props**:
  ```typescript
  interface ShowcaseCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    url: string;
    github?: string;
    featured?: boolean;
  }
  ```
- **Features**:
  - 썸네일 이미지 (aspect-video)
  - 호버 시 확대 효과
  - 카테고리 태그
  - 외부 링크 아이콘

### 5. ShowcaseDetail (Modal or Page)

- **File**: `src/components/showcase/detail.tsx`
- **Description**: 프로젝트 상세 보기
- **Features**:
  - 스크린샷 갤러리
  - 기술 스택 태그
  - 개발자 정보
  - GitHub / Live Demo 링크

### 6. SubmitProjectCTA

- **File**: `src/components/showcase/submit-cta.tsx`
- **Description**: 프로젝트 제출 유도 섹션

## Data Structure

### Project Schema

```typescript
interface ShowcaseProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  screenshots?: string[];
  category: "ai" | "saas" | "ecommerce" | "opensource" | "other";
  tags: string[];
  url: string;
  github?: string;
  author: {
    name: string;
    avatar?: string;
    twitter?: string;
  };
  featured: boolean;
  publishedAt: string;
}
```

### Sample Data

```typescript
const projects: ShowcaseProject[] = [
  {
    id: "1",
    slug: "flux-ai-editor",
    title: "Flux AI Editor",
    description: "Real-time collaborative image generation",
    category: "ai",
    tags: ["AI", "Collaboration", "Image Generation"],
    url: "https://flux.ai",
    featured: true,
    // ...
  },
  // ...
];
```

## Required Skills

### Frontend Developer

- **필수 역량**:

  - React (useState, useEffect)
  - Next.js Image 최적화
  - Tailwind CSS Grid 시스템
  - TypeScript

- **권장 역량**:
  - URL 쿼리 파라미터 관리 (nuqs 또는 next/navigation)
  - 이미지 최적화 (next/image, blur placeholder)
  - 애니메이션 (Framer Motion)

### Backend/Data (Optional)

- **데이터 소스 옵션**:
  - JSON 파일 (정적)
  - CMS (Contentful, Sanity, etc.)
  - Database (Supabase, etc.)

## Design Specifications

### Card Styling

```css
/* Base */
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
overflow: hidden;

/* Hover */
border-color: rgba(255, 255, 255, 0.2);
transform: translateY(-2px);
```

### Image Styling

- Aspect Ratio: 16:9 (`aspect-video`)
- Object Fit: `object-cover`
- Hover: `scale(1.05)` with transition

### Category Tags

```css
/* Tag Style */
padding: 4px 12px;
font-size: 12px;
border-radius: 9999px;
background: rgba(white, 0.1);
color: slate-400;
```

### Category Colors

| Category    | Color              |
| ----------- | ------------------ |
| AI          | `#0070F3` (blue)   |
| SaaS        | `#10B981` (green)  |
| E-commerce  | `#F59E0B` (amber)  |
| Open Source | `#8B5CF6` (violet) |

## Responsive Behavior

| Breakpoint     | Columns | Card Size  |
| -------------- | ------- | ---------- |
| < 640px        | 1       | Full width |
| 640px - 1024px | 2       | 50%        |
| > 1024px       | 3       | 33%        |

## SEO Considerations

- 각 프로젝트별 메타데이터
- Open Graph 이미지
- Structured Data (JSON-LD)
