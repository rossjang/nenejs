# MDX System 설정

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `docs` `blog`

## Description

Documentation과 Blog에서 사용할 MDX 콘텐츠 시스템 설정

## Tasks

- [x] 패키지 설치
- [x] `src/lib/mdx.ts` 유틸리티 함수 생성
- [x] MDX 커스텀 컴포넌트 생성
  - [x] `Callout` (info/warning/error 박스)
  - [x] `CodeBlock` (탭, 복사 기능)
  - [x] `Tabs` (탭 컨텐츠)
  - [x] `Steps` (단계별 가이드)
- [x] `content/docs/` 폴더 구조 생성
- [x] `content/blog/` 폴더 구조 생성

## Install

```bash
npm install next-mdx-remote gray-matter shiki rehype-slug rehype-autolink-headings remark-gfm reading-time
```

## Files Created

```
src/
├── lib/
│   └── mdx.ts
└── components/
    └── mdx/
        ├── index.tsx
        ├── callout.tsx
        ├── code-block.tsx
        ├── tabs.tsx
        └── steps.tsx

content/
├── docs/
│   └── en/
│       ├── getting-started/
│       │   ├── _meta.json
│       │   ├── installation.mdx
│       │   ├── quick-start.mdx
│       │   └── project-structure.mdx
│       ├── core-concepts/
│       │   ├── _meta.json
│       │   ├── decorators.mdx
│       │   ├── type-sharing.mdx
│       │   └── unified-context.mdx
│       └── api-reference/
│           └── _meta.json
└── blog/
    └── introducing-nene.mdx
```

## Acceptance Criteria

- [x] MDX 파일이 정상 렌더링됨
- [x] 코드 하이라이팅 작동
- [x] 커스텀 컴포넌트 작동 (Callout, Tabs 등)
- [x] Frontmatter 파싱됨
