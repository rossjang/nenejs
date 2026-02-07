# Deployment

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `deploy` `launch`

## Description

Vercel deployment setup

## Tasks

- [ ] Set environment variables
- [ ] Connect Vercel project
- [ ] Connect domain
- [ ] Configure preview deployments
- [ ] Production deployment

## Environment Variables

```env
# App
NEXT_PUBLIC_APP_URL=https://nene.js.org

# Database
DATABASE_URL=postgresql://...

# Auth
AUTH_SECRET=...
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

## Vercel Setup

```bash
# Link project
vercel link

# Set env variables
vercel env add DATABASE_URL
vercel env add AUTH_SECRET

# Deploy
vercel --prod
```

## vercel.json (Optional)

```json
{
  "framework": "nextjs",
  "regions": ["icn1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

## Acceptance Criteria

- [ ] Production deployment succeeds
- [ ] Custom domain is connected
- [ ] HTTPS works
- [ ] Preview deployments work
