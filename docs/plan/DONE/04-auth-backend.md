# Authentication Backend

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `auth` `backend`

## Description

Authentication system using NextAuth.js

## Tasks

- [x] Install NextAuth.js v5
- [x] Install Prisma and define schema
- [ ] Connect database (Supabase recommended)
- [x] Create `src/lib/auth.ts`
- [x] Create `src/lib/prisma.ts`
- [x] Create API route
- [x] Configure GitHub OAuth
- [x] Configure Google OAuth
- [ ] Wire existing UI components
  - [ ] `SignInForm`
  - [ ] `SignUpForm`
  - [ ] `OAuthButtons`
  - [ ] `ForgotPasswordForm`
- [ ] Create missing pages
  - [ ] `/auth/reset-password`
  - [ ] `/auth/verify-email`
- [ ] Create missing components
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

- [ ] Email/password signup works
- [ ] Email/password login works
- [ ] GitHub login works
- [ ] Google login works
- [ ] Password reset works
- [ ] Session persists
