# Performance Optimization

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `performance` `launch`

## Description

Performance optimization and Lighthouse score improvement

## Tasks

- [ ] Review image optimization (next/image)
- [ ] Font optimization (next/font)
- [ ] Bundle analysis
- [ ] Review code splitting
- [ ] Achieve Lighthouse Performance > 90

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
- [ ] Bundle size optimized
