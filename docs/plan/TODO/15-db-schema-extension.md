# DB Schema Extension — Blog, Showcase, Feature Models

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `backend` `infrastructure`
- **Depends on**: None (선행 작업)

## Description

현재 Prisma 스키마에는 User, RefreshToken, Waitlist만 존재한다.
블로그, 쇼케이스, 기능 소개 등의 mock data를 실제 DB 데이터로 전환하기 위해 새 모델을 추가한다.

## Current State

**`apps/api/prisma/schema.prisma`** — User, RefreshToken, Waitlist 모델만 존재

## Tasks

- [ ] `Author` 모델 추가
  - id, name, role, avatar, bio, email, createdAt
- [ ] `BlogPost` 모델 추가
  - id, slug (unique), title, excerpt, content (MDX), coverImage, category, readingTime, published, publishedAt, authorId (FK), createdAt, updatedAt
- [ ] `ShowcaseProject` 모델 추가
  - id, slug (unique), name, description, image, category, tags, url, github, featured, approved, createdAt
- [ ] `Feature` 모델 추가
  - id, title, description, bullets (JSON), codeExample, codeFilename, accentColor, order, createdAt
- [ ] `ComparisonRow` 모델 추가
  - id, feature, neneValue, othersValue, hasNeneCheck, hasOthersCheck, order
- [ ] `npx prisma db push` 실행하여 스키마 적용
- [ ] Seed 스크립트 작성 (`apps/api/prisma/seed.ts`)
  - 기존 `apps/web/src/components/blog/data.ts`의 mock 데이터를 seed로 이관
  - 기존 `apps/web/data/showcase.json`의 데이터를 seed로 이관
  - `apps/web/src/app/features/page.tsx`의 featuresData를 seed로 이관
  - `apps/web/src/components/features/comparison-table.tsx`의 comparisonData를 seed로 이관

## Schema Example

```prisma
model Author {
  id        String     @id @default(cuid())
  name      String
  role      String?
  avatar    String?
  bio       String?
  email     String?    @unique
  posts     BlogPost[]
  createdAt DateTime   @default(now())
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String
  content     String   // MDX content
  coverImage  String?
  category    String   // announcement, tutorial, engineering, community
  readingTime Int?
  published   Boolean  @default(false)
  publishedAt DateTime?
  author      Author   @relation(fields: [authorId], references: [id])
  authorId    String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model ShowcaseProject {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  description String
  image       String?
  category    String   // ai, saas, ecommerce, opensource, devtools, creative
  tags        String?  // JSON array as string
  url         String?
  github      String?
  featured    Boolean  @default(false)
  approved    Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Feature {
  id           String   @id @default(cuid())
  title        String
  description  String
  bullets      String   // JSON array as string
  codeExample  String?
  codeFilename String?
  accentColor  String?
  reversed     Boolean  @default(false)
  order        Int      @default(0)
  createdAt    DateTime @default(now())
}

model ComparisonRow {
  id             String   @id @default(cuid())
  feature        String
  neneValue      String
  othersValue    String
  hasNeneCheck   Boolean  @default(false)
  hasOthersCheck Boolean  @default(false)
  order          Int      @default(0)
}
```

## Acceptance Criteria

- [ ] `npx prisma db push` 성공
- [ ] `npx prisma generate` 후 Prisma Client에서 새 모델 사용 가능
- [ ] Seed 스크립트 실행 시 기존 mock 데이터가 DB에 삽입됨
- [ ] 기존 User/RefreshToken/Waitlist 모델에 영향 없음
