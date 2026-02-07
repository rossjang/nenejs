# Documentation Page

## Page Info

- **Route**: `/docs`, `/docs/[...slug]`
- **Status**: 🔲 Pending
- **Priority**: High

## Overview

Official documentation page for the nene.js framework. It implements a clean, easy-to-navigate doc structure inspired by Next.js/Vercel docs.

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

- Sidebar: Toggle via hamburger menu
- Table of Contents: Hidden or collapsible at top of page

## Components to Build

### 1. DocsLayout

- **File**: `src/app/docs/layout.tsx`
- **Description**: Shared layout for doc pages
- **Features**:
  - Sidebar navigation
  - Table of contents
  - Breadcrumb

### 2. DocsSidebar

- **File**: `src/components/docs/sidebar.tsx`
- **Description**: Left navigation sidebar
- **Features**:
  - Hierarchical menu structure
  - Current page highlight
  - Section collapse/expand
  - Mobile responsive

### 3. DocsTableOfContents

- **File**: `src/components/docs/toc.tsx`
- **Description**: Table of contents for current page
- **Features**:
  - Auto heading extraction (h2, h3)
  - Active item based on scroll position
  - Click scrolls to section

### 4. DocsContent

- **File**: `src/components/docs/content.tsx`
- **Description**: MDX content rendering
- **Features**:
  - MDX support
  - Code block syntax highlighting
  - Custom components (Callout, Tabs, etc.)

### 5. DocsSearch

- **File**: `src/components/docs/search.tsx`
- **Description**: Documentation search
- **Features**:
  - Command + K shortcut
  - Live search results
  - Recent search history

## Required Skills

### Documentation Specialist

- **Required**:
  - MDX / Markdown
  - Next.js App Router (dynamic routes)
  - React Server Components
  - TypeScript

- **Recommended**:
  - ContentLayer or next-mdx-remote
  - rehype/remark plugins
  - Shiki or Prism (code highlighting)
  - Algolia DocSearch or Pagefind

### Required Packages (recommended)

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
- Code blocks: Same style as landing page

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

- Prefer static generation (SSG)
- Dynamic routing: use `[...slug]` catch-all
- Metadata: title, description per page
