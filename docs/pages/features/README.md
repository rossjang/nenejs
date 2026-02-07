# Features Page

## Page Info

- **Route**: `/features`
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

Page that introduces nene.js core features in detail. Each feature includes visual demos and code examples.

## Page Structure

```
/features
├── Hero Section (feature overview)
├── Feature 1: Unified Architecture
├── Feature 2: AI-Optimized Context
├── Feature 3: No-API Network
├── Feature 4: Type Safety
├── Feature 5: Built-in AI Integration
├── Comparison Table (vs using Next.js + NestJS separately)
└── CTA Section
```

## Sections Design

### 1. Features Hero

- Simple header + subtext
- Feature category filter tabs (optional)

### 2. Feature Sections (repeating)

Each feature section follows this structure:

```
┌─────────────────────────────────────────────────────────────┐
│  [Left: Text]               │     [Right: Visual]           │
│                             │                               │
│  # Feature Title            │     ┌─────────────────────────┐   │
│  Description text...        │     │  Code Block / Demo      │   │
│                             │     │  Animation / Diagram    │   │
│  • Bullet point 1           │     │                         │   │
│  • Bullet point 2           │     └─────────────────────────┘   │
│  • Bullet point 3           │                               │
│                             │                               │
│  [Learn More →]             │                               │
└─────────────────────────────────────────────────────────────┘
```

- Odd sections: Text left, visual right
- Even sections: Visual left, text right (alternating layout)

### 3. Comparison Table

| Feature   | nene.js | Next.js + NestJS (separate) |
| --------- | ------- | -------------------------- |
| Setup time| 5 min   | 2+ hours                   |
| Type sharing | Auto | Manual setup required   |
| ...       | ...     | ...                        |

## Components to Build

### 1. FeaturesHero

- **File**: `src/components/features/hero.tsx`
- **Description**: Features page hero section

### 2. FeatureSection

- **File**: `src/components/features/feature-section.tsx`
- **Description**: Single feature section (reusable)
- **Props**:
  ```typescript
  interface FeatureSectionProps {
    title: string;
    description: string;
    bullets: string[];
    visual: React.ReactNode;
    reversed?: boolean; // Layout direction
    accentColor?: string;
  }
  ```

### 3. CodeDemo

- **File**: `src/components/features/code-demo.tsx`
- **Description**: Interactive code demo
- **Features**:
  - Tabs for multiple files
  - Before/After comparison
  - Copy button

### 4. ComparisonTable

- **File**: `src/components/features/comparison-table.tsx`
- **Description**: Feature comparison table

### 5. FeatureDiagram

- **File**: `src/components/features/diagram.tsx`
- **Description**: Architecture diagram (SVG)

## Feature Content

### Feature 1: Unified Architecture

- **Title**: "Next + Nest, Unified"
- **Key Points**:
  - Frontend and backend in the same file
  - No context switching while developing
  - Single repo, single deploy

### Feature 2: AI-Optimized Context

- **Title**: "AI-Optimized Context"
- **Key Points**:
  - AI copilot understands full context
  - Full logic visible in a single file
  - More accurate code suggestions

### Feature 3: No-API Network

- **Title**: "No-API Network"
- **Key Points**:
  - No fetch() boilerplate
  - Use backend like direct function calls
  - Type-safe RPC

### Feature 4: Type Safety

- **Title**: "End-to-End Type Safety"
- **Key Points**:
  - Frontend-backend types shared automatically
  - Compile-time error detection
  - IDE autocomplete support

### Feature 5: Built-in AI

- **Title**: "Built-in AI Integration"
- **Key Points**:
  - @UseAI decorator
  - Built-in vector memory
  - Streaming response support

## Required Skills

### Frontend Developer

- **Required**:
  - React component design
  - Tailwind CSS layout (grid, flexbox)
  - TypeScript

- **Recommended**:
  - Framer Motion (animation)
  - SVG diagram creation
  - Interactive demo implementation

## Design Specifications

### Section Spacing

- Between sections: `py-24` or `py-32`
- Inner gap: `gap-12` or `gap-16`

### Visual Elements

- Code blocks: Match landing page style
- Diagrams: SVG with dark theme
- Animation: Subtle, performance-conscious

### Responsive Breakpoints

- Mobile (<768px): Single column, visual below
- Tablet (768px-1024px): 2 columns
- Desktop (1024px+): Full layout
