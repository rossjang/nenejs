# Documentation Content Writing

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `docs` `content`
- **Depends on**: `01-mdx-system.md`

## Description

Write actual documentation content and update existing hardcoded components

## Tasks

- [ ] Write Getting Started docs
  - [ ] `installation.mdx`
  - [ ] `quick-start.mdx`
  - [ ] `project-structure.mdx`
- [ ] Write Core Concepts docs
  - [ ] `decorators.mdx`
  - [ ] `unified-context.mdx`
  - [ ] `type-sharing.mdx`
- [ ] Switch `DocContent` component to MDX rendering
- [x] Switch `Sidebar` component to dynamic navigation

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

- `src/components/docs/doc-content.tsx` - Switch to MDX rendering
- `src/components/docs/sidebar.tsx` - Switch to file-system based
- `src/app/docs/[locale]/[...slug]/page.tsx` - Switch to MDX loading

## Acceptance Criteria

- [ ] At least 6 doc pages completed
- [x] Sidebar works from file structure
- [ ] Doc-to-doc navigation works
