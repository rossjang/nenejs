# SEO Optimization

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `seo` `launch`

## Description

Search engine optimization

## Tasks

- [ ] Review metadata on all pages
- [ ] Generate Open Graph images
- [ ] Configure `next-sitemap`
- [ ] Generate RSS Feed (blog)
- [ ] Add JSON-LD Structured Data
- [ ] Configure robots.txt

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

- [ ] Sitemap is generated
- [ ] robots.txt exists
- [ ] OG image set on all pages
- [ ] RSS Feed is accessible
