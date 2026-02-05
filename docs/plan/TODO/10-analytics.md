# Analytics & Monitoring

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `analytics` `launch`

## Description

분석 도구 및 에러 모니터링 설정

## Tasks

- [ ] Vercel Analytics 설정
- [ ] Vercel Speed Insights 설정
- [ ] Sentry 에러 모니터링 설정 (optional)

## Install

```bash
npm install @vercel/analytics @vercel/speed-insights
```

## Setup

**`src/app/layout.tsx`**

```typescript
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Custom Events

```typescript
import { track } from "@vercel/analytics";

// Track button clicks
track("cta_clicked", { location: "hero" });

// Track doc views
track("doc_viewed", { slug: "/docs/installation" });
```

## Sentry Setup (Optional)

```bash
npx @sentry/wizard@latest -i nextjs
```

## Acceptance Criteria

- [ ] Analytics 데이터 수집됨
- [ ] Speed Insights 작동
- [ ] 에러 모니터링 작동 (optional)
