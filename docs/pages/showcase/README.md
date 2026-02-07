# Showcase Page

## Page Info

- **Route**: `/showcase`
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

Gallery page showcasing real projects built with nene.js. Includes community projects and official examples.

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

- Simple title: "Built with nene.js"
- Subtext: "Explore production apps and community projects"

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
- **Description**: Showcase page hero

### 2. ShowcaseFilters

- **File**: `src/components/showcase/filters.tsx`
- **Description**: Category filter tabs
- **Features**:
  - Tab-style filters
  - URL query param sync
  - Filter state persistence

### 3. ShowcaseGrid

- **File**: `src/components/showcase/grid.tsx`
- **Description**: Project card grid
- **Features**:
  - Responsive grid
  - Infinite scroll or pagination
  - Loading skeleton

### 4. ShowcaseCard

- **File**: `src/components/showcase/card.tsx`
- **Description**: Single project card
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
  - Thumbnail image (aspect-video)
  - Zoom on hover
  - Category tag
  - External link icon

### 5. ShowcaseDetail (Modal or Page)

- **File**: `src/components/showcase/detail.tsx`
- **Description**: Project detail view
- **Features**:
  - Screenshot gallery
  - Tech stack tags
  - Developer info
  - GitHub / Live Demo links

### 6. SubmitProjectCTA

- **File**: `src/components/showcase/submit-cta.tsx`
- **Description**: Section encouraging project submission

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

- **Required**:
  - React (useState, useEffect)
  - Next.js Image optimization
  - Tailwind CSS Grid
  - TypeScript

- **Recommended**:
  - URL query param handling (nuqs or next/navigation)
  - Image optimization (next/image, blur placeholder)
  - Animation (Framer Motion)

### Backend/Data (Optional)

- **Data source options**:
  - JSON file (static)
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

- Metadata per project
- Open Graph images
- Structured Data (JSON-LD)
