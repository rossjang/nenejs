# nene.js Website - Project Documentation

## Project Overview

nene.js는 Next.js와 NestJS를 융합한 AI-Native 풀스택 프레임워크입니다. 이 웹사이트는 nene.js 프레임워크의 공식 랜딩 페이지 및 문서 사이트입니다.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 + shadcn/ui (new-york style)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Animation**: tw-animate-css

## Design System

### Color Palette

| Name            | Hex Code                | Usage               |
| --------------- | ----------------------- | ------------------- |
| Background Dark | `#0A0A0A`               | 기본 배경색         |
| Text Primary    | `#EDEDED`               | 주요 텍스트         |
| Text Secondary  | `#A1A1A1` / `slate-400` | 보조 텍스트         |
| Next Blue       | `#0070F3`               | Next.js 브랜드 색상 |
| Nest Red        | `#E0234E`               | NestJS 브랜드 색상  |
| Primary         | `#0667ef`               | 주요 액센트 색상    |

### Fusion Gradient

Next.js와 NestJS의 융합을 상징하는 핵심 그라디언트:

```css
background: linear-gradient(90deg, #0070f3 0%, #e0234e 100%);
```

### Typography

- **Font Family**: Inter
- **Headings**: font-black (900), tracking-tight
- **Body**: font-normal (400)

### Key CSS Classes

- `.fusion-gradient` - 배경 그라디언트
- `.fusion-gradient-text` - 텍스트 그라디언트
- `.glass-card` - 글래스모피즘 카드
- `.code-window-shadow` - 코드 블록 글로우 효과

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

| Page            | Route                   | Status      | Description      |
| --------------- | ----------------------- | ----------- | ---------------- |
| Landing         | `/`                     | ✅ Complete | 메인 랜딩 페이지 |
| Docs            | `/docs`                 | 🔲 Pending  | 문서 메인 페이지 |
| Getting Started | `/docs/getting-started` | 🔲 Pending  | 시작 가이드      |
| Features        | `/features`             | 🔲 Pending  | 기능 상세 페이지 |
| Showcase        | `/showcase`             | 🔲 Pending  | 쇼케이스 갤러리  |
| Blog            | `/blog`                 | 🔲 Pending  | 블로그 목록      |
| Auth            | `/auth/signin`          | 🔲 Pending  | 로그인 페이지    |

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

각 페이지별 상세 문서는 `docs/pages/` 폴더에서 확인할 수 있습니다:

- [Landing Page](./pages/landing/README.md)
- [Docs Page](./pages/docs/README.md)
- [Features Page](./pages/features/README.md)
- [Showcase Page](./pages/showcase/README.md)
- [Blog Page](./pages/blog/README.md)
- [Auth Pages](./pages/auth/README.md)
