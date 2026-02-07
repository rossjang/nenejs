# nene.js Website - Project Documentation

## Project Overview

nene.js is an AI-Native full-stack framework that fuses Next.js and NestJS. This website is the official landing page and documentation site for the nene.js framework.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 + shadcn/ui (new-york style)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Animation**: tw-animate-css

## Design System

### Color Palette

| Name            | Hex Code                | Usage                  |
| --------------- | ----------------------- | ---------------------- |
| Background Dark | `#0A0A0A`               | Primary background     |
| Text Primary    | `#EDEDED`               | Primary text           |
| Text Secondary  | `#A1A1A1` / `slate-400` | Secondary text         |
| Next Blue       | `#0070F3`               | Next.js brand color    |
| Nest Red        | `#E0234E`               | NestJS brand color     |
| Primary         | `#0667ef`               | Primary accent color   |

### Fusion Gradient

Core gradient symbolizing the fusion of Next.js and NestJS:

```css
background: linear-gradient(90deg, #0070f3 0%, #e0234e 100%);
```

### Typography

- **Font Family**: Inter
- **Headings**: font-black (900), tracking-tight
- **Body**: font-normal (400)

### Key CSS Classes

- `.fusion-gradient` - Background gradient
- `.fusion-gradient-text` - Text gradient
- `.glass-card` - Glassmorphism card
- `.code-window-shadow` - Code block glow effect

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing Page
│   ├── layout.tsx            # Root Layout
│   ├── globals.css           # Global Styles
│   ├── docs/                  # Documentation Pages
│   ├── features/              # Features Page
│   ├── showcase/              # Showcase Page
│   └── blog/                  # Blog Pages
├── components/
│   ├── landing/              # Landing Page Components
│   │   ├── header.tsx
│   │   ├── hero-section.tsx
│   │   ├── code-block.tsx
│   │   ├── social-proof.tsx
│   │   ├── features.tsx
│   │   ├── showcase.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   ├── ui/                   # shadcn/ui Components
│   ├── docs/                 # Documentation Components
│   └── common/               # Shared Components
├── lib/
│   └── utils.ts              # Utility Functions
└── hooks/                    # Custom React Hooks
```

## Pages Overview

| Page            | Route                   | Status      | Description           |
| --------------- | ----------------------- | ----------- | --------------------- |
| Landing         | `/`                     | ✅ Complete | Main landing page     |
| Docs            | `/docs`                 | 🔲 Pending  | Documentation home    |
| Getting Started | `/docs/getting-started` | 🔲 Pending  | Getting started guide |
| Features        | `/features`             | 🔲 Pending  | Features detail page   |
| Showcase        | `/showcase`             | 🔲 Pending  | Showcase gallery      |
| Blog            | `/blog`                 | 🔲 Pending  | Blog list             |
| Auth            | `/auth/signin`          | 🔲 Pending  | Sign-in page          |

## Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint
```

## Page Documentation

Detailed documentation for each page is available in the `docs/pages/` folder:

- [Landing Page](./pages/landing/README.md)
- [Docs Page](./pages/docs/README.md)
- [Features Page](./pages/features/README.md)
- [Showcase Page](./pages/showcase/README.md)
- [Blog Page](./pages/blog/README.md)
- [Auth Pages](./pages/auth/README.md)
