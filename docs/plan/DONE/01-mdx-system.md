# MDX System Setup

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `docs` `blog`

## Description

Setup MDX content system for Documentation and Blog

## Tasks

- [x] Install packages
- [x] Create `src/lib/mdx.ts` utility
- [x] Create MDX custom components
  - [x] `Callout` (info/warning/error box)
  - [x] `CodeBlock` (tabs, copy button)
  - [x] `Tabs` (tab content)
  - [x] `Steps` (step-by-step guide)
- [x] Create `content/docs/` folder structure
- [x] Create `content/blog/` folder structure

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

- [x] MDX files render correctly
- [x] Code highlighting works
- [x] Custom components work (Callout, Tabs, etc.)
- [x] Frontmatter is parsed
