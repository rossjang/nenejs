# Documentation Content 작성

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `docs` `content`
- **Depends on**: `01-mdx-system.md`

## Description

실제 문서 콘텐츠 작성 및 기존 하드코딩 컴포넌트 수정

## Tasks

- [ ] Getting Started 문서 작성
  - [ ] `installation.mdx`
  - [ ] `quick-start.mdx`
  - [ ] `project-structure.mdx`
- [ ] Core Concepts 문서 작성
  - [ ] `decorators.mdx`
  - [ ] `unified-context.mdx`
  - [ ] `type-sharing.mdx`
- [ ] `DocContent` 컴포넌트 MDX 렌더링으로 전환
- [x] `Sidebar` 컴포넌트 동적 네비게이션으로 전환

## Files to Create

```
content/docs/en/
├── getting-started/
│   ├── installation.mdx
│   ├── quick-start.mdx
│   └── project-structure.mdx
└── core-concepts/
    ├── decorators.mdx
    ├── unified-context.mdx
    └── type-sharing.mdx
```

## MDX Example

```mdx
---
title: Installation
description: Install nene.js and create your first project
---

# Installation

<Callout type="info">nene.js requires Node.js 18.0 or later.</Callout>

## Quick Install

\`\`\`bash
npm create nene@latest my-app
cd my-app
npm run dev
\`\`\`

## Manual Installation

...
```

## Files to Modify

- `src/components/docs/doc-content.tsx` - MDX 렌더링으로 변경
- `src/components/docs/sidebar.tsx` - 파일 시스템 기반으로 변경
- `src/app/docs/[locale]/[...slug]/page.tsx` - MDX 로딩으로 변경

## Acceptance Criteria

- [ ] 최소 6개 문서 페이지 완성
- [x] Sidebar가 파일 구조 기반으로 동작
- [ ] 문서 간 네비게이션 작동
