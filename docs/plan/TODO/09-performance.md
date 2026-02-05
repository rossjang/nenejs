# Performance Optimization

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `performance` `launch`

## Description

성능 최적화 및 Lighthouse 점수 개선

## Tasks

- [ ] Image 최적화 검토 (next/image)
- [ ] Font 최적화 (next/font)
- [ ] Bundle 분석
- [ ] 코드 스플리팅 검토
- [ ] Lighthouse Performance > 90 달성

## Install

```bash
npm install @next/bundle-analyzer
```

## Bundle Analyzer Setup

**`next.config.ts`**

```typescript
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  // config
});
```

```bash
ANALYZE=true npm run build
```

## Font Optimization

```typescript
// src/app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
```

## Image Optimization

```typescript
import Image from "next/image";

<Image
  src="/showcase/project.png"
  alt="Project"
  width={800}
  height={450}
  placeholder="blur"
  sizes="(max-width: 768px) 100vw, 50vw"
/>;
```

## Acceptance Criteria

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Time to Interactive < 3s
- [ ] Bundle size 최적화됨
