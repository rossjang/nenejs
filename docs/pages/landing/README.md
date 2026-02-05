# Landing Page Documentation

## Page Info

- **Route**: `/`
- **Status**: ✅ Complete
- **File**: `src/app/page.tsx`

## Overview

nene.js 프레임워크의 메인 랜딩 페이지입니다. Vercel 스타일의 미니멀리즘과 Next.js-NestJS 융합을 상징하는 디자인을 적용했습니다.

## Sections

### 1. Header

- **Component**: `src/components/landing/header.tsx`
- **Features**:
  - Sticky navigation with backdrop blur
  - Fusion gradient 로고
  - Navigation links (Docs, Features, Showcase, Blog)
  - Sign In / Deploy 버튼

### 2. Hero Section

- **Component**: `src/components/landing/hero-section.tsx`
- **Features**:
  - "Now in Public Alpha" 배지 (ping 애니메이션)
  - 메인 헤드라인 with gradient text
  - npm 명령어 복사 기능
  - Code Block 에디터 목업

### 3. Code Block

- **Component**: `src/components/landing/code-block.tsx`
- **Features**:
  - 다크 테마 에디터 윈도우
  - 구문 강조 (syntax highlighting)
  - Glow 배경 효과

### 4. Social Proof

- **Component**: `src/components/landing/social-proof.tsx`
- **Features**:
  - "Built on the giants" 텍스트
  - Next.js, NestJS, Vercel 로고
  - Hover 시 grayscale 해제

### 5. Features Grid

- **Component**: `src/components/landing/features.tsx`
- **Features**:
  - "Engineered for the AI Era" 헤더
  - 3-column 카드 그리드
  - 각 카드별 고유 액센트 색상
  - Hover 시 테두리 및 아이콘 색상 변경

### 6. Showcase

- **Component**: `src/components/landing/showcase.tsx`
- **Features**:
  - "Built with nene.js" 섹션
  - 2-column 이미지 카드 그리드
  - Hover 시 이미지 확대 효과

### 7. CTA Section

- **Component**: `src/components/landing/cta-section.tsx`
- **Features**:
  - Fusion gradient 배경
  - 두 개의 CTA 버튼

### 8. Footer

- **Component**: `src/components/landing/footer.tsx`
- **Features**:
  - 6-column 반응형 그리드
  - Framework, Community, Legal 링크
  - System Operational 배지

## Required Skills

### Frontend Developer

- **필수 역량**:

  - React 19 + Next.js App Router
  - Tailwind CSS 4 (v4 문법)
  - TypeScript
  - 반응형 디자인

- **권장 역량**:
  - shadcn/ui 컴포넌트 시스템
  - CSS 애니메이션 (transitions, keyframes)
  - Lucide React 아이콘

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

- Vercel 공식 사이트 (vercel.com)
- Next.js 공식 사이트 (nextjs.org)
- NestJS 공식 사이트 (nestjs.com)
