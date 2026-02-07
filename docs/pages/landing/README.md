# Landing Page Documentation

## Page Info

- **Route**: `/`
- **Status**: ✅ Complete
- **File**: `src/app/page.tsx`

## Overview

Main landing page for the nene.js framework. It uses a minimal Vercel-style design and symbolizes the fusion of Next.js and NestJS.

## Sections

### 1. Header

- **Component**: `src/components/landing/header.tsx`
- **Features**:
  - Sticky navigation with backdrop blur
  - Fusion gradient logo
  - Navigation links (Docs, Features, Showcase, Blog)
  - Sign In / Deploy buttons

### 2. Hero Section

- **Component**: `src/components/landing/hero-section.tsx`
- **Features**:
  - "Now in Public Alpha" badge (ping animation)
  - Main headline with gradient text
  - npm command copy
  - Code Block editor mock

### 3. Code Block

- **Component**: `src/components/landing/code-block.tsx`
- **Features**:
  - Dark theme editor window
  - Syntax highlighting
  - Glow background effect

### 4. Social Proof

- **Component**: `src/components/landing/social-proof.tsx`
- **Features**:
  - "Built on the giants" text
  - Next.js, NestJS, Vercel logos
  - Grayscale removed on hover

### 5. Features Grid

- **Component**: `src/components/landing/features.tsx`
- **Features**:
  - "Engineered for the AI Era" header
  - 3-column card grid
  - Unique accent color per card
  - Border and icon color change on hover

### 6. Showcase

- **Component**: `src/components/landing/showcase.tsx`
- **Features**:
  - "Built with nene.js" section
  - 2-column image card grid
  - Image zoom on hover

### 7. CTA Section

- **Component**: `src/components/landing/cta-section.tsx`
- **Features**:
  - Fusion gradient background
  - Two CTA buttons

### 8. Footer

- **Component**: `src/components/landing/footer.tsx`
- **Features**:
  - 6-column responsive grid
  - Framework, Community, Legal links
  - System Operational badge

## Required Skills

### Frontend Developer

- **Required**:
  - React 19 + Next.js App Router
  - Tailwind CSS 4 (v4 syntax)
  - TypeScript
  - Responsive design

- **Recommended**:
  - shadcn/ui component system
  - CSS animation (transitions, keyframes)
  - Lucide React icons

## Component Dependencies

```
page.tsx
├── Header
├── HeroSection
│   └── CodeBlock
├── SocialProof
├── Features
├── Showcase
├── CTASection
└── Footer
```

## Design References

- Vercel (vercel.com)
- Next.js (nextjs.org)
- NestJS (nestjs.com)
