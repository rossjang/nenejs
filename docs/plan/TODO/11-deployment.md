# Deployment

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `deploy` `launch`

## Description

Vercel 배포 설정

## Tasks

- [ ] 환경 변수 설정
- [ ] Vercel 프로젝트 연결
- [ ] 도메인 연결
- [ ] Preview deployments 설정
- [ ] Production 배포

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

- [ ] Production 배포 성공
- [ ] 커스텀 도메인 연결됨
- [ ] HTTPS 작동
- [ ] Preview deployments 작동
