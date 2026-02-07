# Analytics & Monitoring

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `analytics` `launch`

## Description

Analytics and error monitoring setup

## Tasks

- [ ] Configure Vercel Analytics
- [ ] Configure Vercel Speed Insights
- [ ] Configure Sentry error monitoring (optional)

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

- [ ] Analytics data is collected
- [ ] Speed Insights works
- [ ] Error monitoring works (optional)
