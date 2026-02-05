# Team Skills Requirements

## Role Overview

| Role                     | Pages                       | Priority |
| ------------------------ | --------------------------- | -------- |
| Frontend Lead            | All                         | Critical |
| UI Developer             | Landing, Features, Showcase | High     |
| Documentation Specialist | Docs                        | High     |
| Backend Developer        | Auth, API                   | Medium   |
| Content Creator          | Blog, Docs Content          | Medium   |

---

## 1. Frontend Lead

### Responsibilities

- 전체 프로젝트 아키텍처 설계
- 코드 리뷰 및 품질 관리
- 기술적 의사결정
- 팀원 멘토링

### Required Skills

#### Core (필수)

| Skill              | Level    | Description                      |
| ------------------ | -------- | -------------------------------- |
| Next.js App Router | Expert   | 서버/클라이언트 컴포넌트, 라우팅 |
| React 19           | Expert   | Hooks, Context, Suspense         |
| TypeScript         | Advanced | 타입 시스템, 제네릭              |
| System Design      | Advanced | 컴포넌트 설계, 상태 관리         |

#### Recommended (권장)

| Skill                    | Level        | Description                |
| ------------------------ | ------------ | -------------------------- |
| Performance Optimization | Advanced     | Core Web Vitals, Profiling |
| Testing                  | Intermediate | Jest, Testing Library      |
| CI/CD                    | Intermediate | GitHub Actions, Vercel     |
| Git                      | Advanced     | Branching strategies       |

### Key Technologies

```
next.js, react, typescript, tailwindcss, eslint, prettier
```

---

## 2. UI Developer

### Responsibilities

- UI 컴포넌트 구현
- 반응형 디자인 구현
- 애니메이션 및 인터랙션
- 디자인 시스템 유지

### Required Skills

#### Core (필수)

| Skill             | Level    | Description                   |
| ----------------- | -------- | ----------------------------- |
| Tailwind CSS 4    | Expert   | 유틸리티 클래스, 커스터마이징 |
| CSS Flexbox/Grid  | Expert   | 복잡한 레이아웃 구현          |
| React Components  | Advanced | 재사용 가능한 컴포넌트 설계   |
| Responsive Design | Expert   | Mobile-first 접근             |

#### Recommended (권장)

| Skill          | Level        | Description                    |
| -------------- | ------------ | ------------------------------ |
| Framer Motion  | Intermediate | 페이지 전환, 마이크로 인터랙션 |
| CSS Animations | Advanced     | keyframes, transitions         |
| shadcn/ui      | Intermediate | 컴포넌트 커스터마이징          |
| Figma          | Basic        | 디자인 해석                    |

### Key Technologies

```
tailwindcss, shadcn/ui, lucide-react, framer-motion, radix-ui
```

### Specific Tasks

- [ ] Glass morphism 카드 컴포넌트
- [ ] Fusion gradient 버튼
- [ ] 코드 블록 with syntax highlighting
- [ ] 반응형 네비게이션
- [ ] 호버/포커스 상태 관리

---

## 3. Documentation Specialist

### Responsibilities

- 문서 시스템 구축
- MDX 컴포넌트 개발
- 콘텐츠 구조 설계
- 검색 기능 구현

### Required Skills

#### Core (필수)

| Skill                   | Level        | Description               |
| ----------------------- | ------------ | ------------------------- |
| MDX                     | Expert       | 커스텀 컴포넌트, 플러그인 |
| Next.js Dynamic Routes  | Advanced     | catch-all routes          |
| Technical Writing       | Advanced     | 명확한 문서 작성          |
| React Server Components | Intermediate | 서버 측 렌더링 이해       |

#### Recommended (권장)

| Skill            | Level        | Description         |
| ---------------- | ------------ | ------------------- |
| ContentLayer     | Intermediate | 콘텐츠 관리         |
| Shiki/Prism      | Intermediate | 코드 하이라이팅     |
| Algolia/Pagefind | Basic        | 검색 구현           |
| SEO              | Intermediate | 메타데이터, Sitemap |

### Key Technologies

```
@next/mdx, next-mdx-remote, contentlayer, shiki, rehype, remark
```

### Specific Tasks

- [ ] 문서 레이아웃 (사이드바 + TOC)
- [ ] MDX 렌더링 파이프라인
- [ ] 커스텀 MDX 컴포넌트 (Callout, CodeBlock, Tabs)
- [ ] 자동 목차 생성
- [ ] 문서 검색

---

## 4. Backend Developer

### Responsibilities

- 인증 시스템 구현
- API 엔드포인트 개발
- 데이터베이스 설계
- 보안 관리

### Required Skills

#### Core (필수)

| Skill              | Level        | Description                    |
| ------------------ | ------------ | ------------------------------ |
| Next.js API Routes | Advanced     | Route Handlers, Middleware     |
| NextAuth.js        | Advanced     | OAuth, Credentials             |
| Database           | Intermediate | PostgreSQL/MySQL 또는 Supabase |
| TypeScript         | Advanced     | 서버 측 타입 안전성            |

#### Recommended (권장)

| Skill         | Level        | Description              |
| ------------- | ------------ | ------------------------ |
| Prisma        | Intermediate | ORM, 마이그레이션        |
| Security      | Advanced     | CSRF, XSS, SQL Injection |
| Rate Limiting | Intermediate | 요청 제한                |
| Email Service | Basic        | 인증 이메일 전송         |

### Key Technologies

```
next-auth, prisma, supabase, zod, bcrypt
```

### Specific Tasks

- [ ] OAuth 설정 (GitHub, Google)
- [ ] 이메일/비밀번호 인증
- [ ] 세션 관리
- [ ] 사용자 프로필 API
- [ ] 비밀번호 재설정 플로우

---

## 5. Content Creator

### Responsibilities

- 블로그 포스트 작성
- 문서 콘텐츠 작성
- SEO 최적화
- 소셜 미디어 콘텐츠

### Required Skills

#### Core (필수)

| Skill             | Level        | Description        |
| ----------------- | ------------ | ------------------ |
| Technical Writing | Expert       | 개발자 대상 콘텐츠 |
| Markdown/MDX      | Advanced     | 포맷팅, 문법       |
| SEO               | Intermediate | 키워드, 메타데이터 |
| English           | Advanced     | 글로벌 콘텐츠      |

#### Recommended (권장)

| Skill                | Level        | Description              |
| -------------------- | ------------ | ------------------------ |
| Developer Experience | Intermediate | DX 이해                  |
| Framework Knowledge  | Intermediate | nene.js, Next.js, NestJS |
| Analytics            | Basic        | 콘텐츠 성과 분석         |
| Social Media         | Intermediate | 개발자 커뮤니티          |

### Specific Tasks

- [ ] 시작 가이드 문서
- [ ] 튜토리얼 시리즈
- [ ] 릴리스 노트
- [ ] 블로그 포스트 (주 1회)
- [ ] Open Graph 이미지

---

## Skill Matrix Summary

```
                    Frontend  UI Dev   Docs     Backend  Content
                    Lead              Specialist Developer Creator
─────────────────────────────────────────────────────────────────
Next.js             ●●●●●     ●●●●○    ●●●●○    ●●●●○    ●○○○○
React               ●●●●●     ●●●●○    ●●●○○    ●●●○○    ●○○○○
TypeScript          ●●●●●     ●●●○○    ●●●○○    ●●●●○    ●○○○○
Tailwind CSS        ●●●○○     ●●●●●    ●●○○○    ●○○○○    ●○○○○
MDX                 ●●○○○     ●○○○○    ●●●●●    ●○○○○    ●●●●○
Authentication      ●●●○○     ●○○○○    ●○○○○    ●●●●●    ●○○○○
Database            ●●○○○     ●○○○○    ●○○○○    ●●●●○    ●○○○○
Technical Writing   ●●○○○     ●○○○○    ●●●●○    ●○○○○    ●●●●●
SEO                 ●●○○○     ●○○○○    ●●●○○    ●○○○○    ●●●●○
─────────────────────────────────────────────────────────────────
● = Skill level (●●●●● = Expert)
```

---

## Onboarding Checklist

### All Team Members

- [ ] 프로젝트 클론 및 로컬 환경 설정
- [ ] 디자인 시스템 문서 숙지
- [ ] 코딩 컨벤션 확인
- [ ] Git 워크플로우 이해

### Role-Specific

- **UI Developer**: shadcn/ui 문서 학습, 기존 컴포넌트 분석
- **Docs Specialist**: MDX 설정 이해, 콘텐츠 구조 파악
- **Backend Developer**: NextAuth.js 문서 학습, DB 스키마 설계
- **Content Creator**: 브랜드 가이드라인 숙지, 톤앤매너 이해
