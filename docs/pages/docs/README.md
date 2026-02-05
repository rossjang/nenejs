# Documentation Page

## Page Info

- **Route**: `/docs`, `/docs/[...slug]`
- **Status**: 🔲 Pending
- **Priority**: High

## Overview

nene.js 프레임워크의 공식 문서 페이지입니다. Next.js/Vercel 문서 스타일을 참고하여 깔끔하고 탐색하기 쉬운 문서 구조를 구현합니다.

## Page Structure

```
/docs
├── /getting-started
│   ├── /installation
│   ├── /quick-start
│   └── /project-structure
├── /core-concepts
│   ├── /decorators
│   ├── /unified-context
│   └── /type-sharing
├── /api-reference
│   ├── /backend-decorators
│   ├── /frontend-hooks
│   └── /configuration
├── /guides
│   ├── /authentication
│   ├── /database
│   └── /deployment
└── /examples
```

## Layout Design

### Desktop (1024px+)

```
┌─────────────────────────────────────────────────────────────┐
│  Header (sticky)                                            │
├──────────┬──────────────────────────────────┬───────────────┤
│          │                                   │               │
│ Sidebar  │      Main Content                │  Table of     │
│ (fixed)  │      (scrollable)                │  Contents     │
│          │                                   │  (sticky)     │
│ 256px    │      flex-1                       │  200px        │
│          │                                   │               │
└──────────┴──────────────────────────────────┴───────────────┘
```

### Mobile (<1024px)

- Sidebar: 햄버거 메뉴로 토글
- Table of Contents: 숨김 또는 페이지 상단에 collapse

## Components to Build

### 1. DocsLayout

- **File**: `src/app/docs/layout.tsx`
- **Description**: 문서 페이지 공통 레이아웃
- **Features**:
  - Sidebar navigation
  - Table of contents
  - Breadcrumb

### 2. DocsSidebar

- **File**: `src/components/docs/sidebar.tsx`
- **Description**: 좌측 네비게이션 사이드바
- **Features**:
  - 계층적 메뉴 구조
  - 현재 페이지 하이라이트
  - 섹션 접기/펼치기
  - 모바일 반응형

### 3. DocsTableOfContents

- **File**: `src/components/docs/toc.tsx`
- **Description**: 현재 페이지 목차
- **Features**:
  - 자동 헤딩 추출 (h2, h3)
  - 스크롤 위치에 따른 활성 항목 표시
  - 클릭 시 해당 섹션으로 스크롤

### 4. DocsContent

- **File**: `src/components/docs/content.tsx`
- **Description**: MDX 콘텐츠 렌더링
- **Features**:
  - MDX 지원
  - 코드 블록 구문 강조
  - 커스텀 컴포넌트 (Callout, Tabs, etc.)

### 5. DocsSearch

- **File**: `src/components/docs/search.tsx`
- **Description**: 문서 검색 기능
- **Features**:
  - Command + K 단축키
  - 실시간 검색 결과
  - 최근 검색 기록

## Required Skills

### Documentation Specialist

- **필수 역량**:

  - MDX / Markdown
  - Next.js App Router (dynamic routes)
  - React Server Components
  - TypeScript

- **권장 역량**:
  - ContentLayer 또는 next-mdx-remote
  - rehype/remark 플러그인
  - Shiki 또는 Prism (코드 하이라이팅)
  - Algolia DocSearch 또는 Pagefind

### Required Packages (추천)

```json
{
  "@next/mdx": "latest",
  "next-mdx-remote": "latest",
  "shiki": "latest",
  "rehype-slug": "latest",
  "rehype-autolink-headings": "latest",
  "remark-gfm": "latest"
}
```

## Design Specifications

### Sidebar

- Width: 256px (desktop)
- Background: `bg-[#0A0A0A]`
- Border: `border-r border-white/5`
- Link styles:
  - Default: `text-slate-400`
  - Hover: `text-white`
  - Active: `text-white bg-white/5`

### Content Area

- Max width: 768px
- Typography:
  - h1: `text-4xl font-black`
  - h2: `text-2xl font-bold`
  - h3: `text-xl font-semibold`
  - p: `text-slate-400 leading-relaxed`
- Code blocks: 랜딩 페이지와 동일한 스타일

### Table of Contents

- Width: 200px
- Position: sticky (top: 80px)
- Link styles:
  - Default: `text-slate-500 text-sm`
  - Active: `text-white border-l-2 border-primary`

## Content Structure (Example)

```markdown
---
title: Getting Started
description: Start building with nene.js in 5 minutes
---

# Getting Started

## Installation

Install nene.js using your favorite package manager:

\`\`\`bash
npm create nene@latest
\`\`\`

## Quick Start

Create your first unified component...
```

## API Requirements

- 정적 생성 (SSG) 우선
- 동적 라우팅: `[...slug]` catch-all 사용
- 메타데이터: 각 페이지별 title, description
