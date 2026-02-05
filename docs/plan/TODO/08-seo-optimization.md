# SEO Optimization

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `seo` `launch`

## Description

검색 엔진 최적화

## Tasks

- [ ] 모든 페이지 메타데이터 검토
- [ ] Open Graph 이미지 생성
- [ ] `next-sitemap` 설정
- [ ] RSS Feed 생성 (블로그)
- [ ] JSON-LD Structured Data 추가
- [ ] robots.txt 설정

## Install

```bash
npm install next-sitemap
```

## Setup

**`next-sitemap.config.js`**

```javascript
module.exports = {
  siteUrl: "https://nene.js.org",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/auth/*"],
};
```

**`package.json`**

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

## Metadata Example

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://nene.js.org"),
  title: {
    default: "nene.js - Next.js + NestJS Unified",
    template: "%s | nene.js",
  },
  description: "The unified framework...",
  openGraph: {
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
```

## Acceptance Criteria

- [ ] Sitemap 생성됨
- [ ] robots.txt 존재
- [ ] OG 이미지 모든 페이지에 설정
- [ ] RSS Feed 접근 가능
