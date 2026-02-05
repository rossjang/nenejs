# Authentication Backend

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `auth` `backend`

## Description

NextAuth.js를 사용한 인증 시스템 구현

## Tasks

- [x] NextAuth.js v5 설치
- [x] Prisma 설치 및 스키마 정의
- [ ] 데이터베이스 연결 (Supabase 권장)
- [x] `src/lib/auth.ts` 생성
- [x] `src/lib/prisma.ts` 생성
- [x] API route 생성
- [x] GitHub OAuth 설정
- [x] Google OAuth 설정
- [ ] 기존 UI 컴포넌트 연동
  - [ ] `SignInForm`
  - [ ] `SignUpForm`
  - [ ] `OAuthButtons`
  - [ ] `ForgotPasswordForm`
- [ ] 누락 페이지 생성
  - [ ] `/auth/reset-password`
  - [ ] `/auth/verify-email`
- [ ] 누락 컴포넌트 생성
  - [ ] `reset-password-form.tsx`
  - [ ] `email-verification.tsx`

## Install

```bash
npm install next-auth@beta @auth/prisma-adapter prisma @prisma/client bcryptjs
npm install -D @types/bcryptjs
npx prisma init
```

## Environment Variables

```env
DATABASE_URL="postgresql://..."
AUTH_SECRET="your-secret"
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

## Files to Create

```
prisma/
└── schema.prisma

src/
├── lib/
│   ├── auth.ts
│   └── prisma.ts
├── app/
│   ├── api/auth/[...nextauth]/route.ts
│   └── auth/
│       ├── reset-password/page.tsx
│       └── verify-email/page.tsx
└── components/auth/
    ├── reset-password-form.tsx
    └── email-verification.tsx
```

## Prisma Schema

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?
  accounts      Account[]
  sessions      Session[]
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  @@unique([provider, providerAccountId])
}
```

## OAuth Setup

**GitHub**: Settings > Developer settings > OAuth Apps

- Callback: `https://your-domain.com/api/auth/callback/github`

**Google**: Cloud Console > APIs & Services > Credentials

- Redirect: `https://your-domain.com/api/auth/callback/google`

## Acceptance Criteria

- [ ] 이메일/비밀번호 회원가입 작동
- [ ] 이메일/비밀번호 로그인 작동
- [ ] GitHub 로그인 작동
- [ ] Google 로그인 작동
- [ ] 비밀번호 리셋 작동
- [ ] 세션 유지됨
