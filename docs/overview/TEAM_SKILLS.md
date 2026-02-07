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

- Overall project architecture design
- Code review and quality assurance
- Technical decision making
- Team mentoring

### Required Skills

#### Core (Required)

| Skill              | Level    | Description                          |
| ------------------ | -------- | ------------------------------------ |
| Next.js App Router | Expert   | Server/client components, routing    |
| React 19           | Expert   | Hooks, Context, Suspense             |
| TypeScript         | Advanced | Type system, generics                |
| System Design      | Advanced | Component design, state management   |

#### Recommended

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

- UI component implementation
- Responsive design implementation
- Animation and interaction
- Design system maintenance

### Required Skills

#### Core (Required)

| Skill             | Level    | Description                      |
| ----------------- | -------- | -------------------------------- |
| Tailwind CSS 4    | Expert   | Utility classes, customization   |
| CSS Flexbox/Grid  | Expert   | Complex layout implementation    |
| React Components  | Advanced | Reusable component design        |
| Responsive Design | Expert   | Mobile-first approach            |

#### Recommended

| Skill          | Level        | Description                    |
| -------------- | ------------ | ------------------------------ |
| Framer Motion  | Intermediate | Page transitions, micro-interactions |
| CSS Animations | Advanced     | keyframes, transitions         |
| shadcn/ui      | Intermediate | Component customization        |
| Figma          | Basic        | Design interpretation          |

### Key Technologies

```
tailwindcss, shadcn/ui, lucide-react, framer-motion, radix-ui
```

### Specific Tasks

- [ ] Glass morphism card components
- [ ] Fusion gradient buttons
- [ ] Code blocks with syntax highlighting
- [ ] Responsive navigation
- [ ] Hover/focus state management

---

## 3. Documentation Specialist

### Responsibilities

- Documentation system setup
- MDX component development
- Content structure design
- Search functionality implementation

### Required Skills

#### Core (Required)

| Skill                   | Level        | Description               |
| ----------------------- | ------------ | ------------------------- |
| MDX                     | Expert       | Custom components, plugins |
| Next.js Dynamic Routes  | Advanced     | catch-all routes          |
| Technical Writing       | Advanced     | Clear documentation       |
| React Server Components | Intermediate | Server-side rendering    |

#### Recommended

| Skill            | Level        | Description         |
| ---------------- | ------------ | ------------------- |
| ContentLayer     | Intermediate | Content management  |
| Shiki/Prism      | Intermediate | Code highlighting   |
| Algolia/Pagefind | Basic        | Search implementation |
| SEO              | Intermediate | Metadata, Sitemap   |

### Key Technologies

```
@next/mdx, next-mdx-remote, contentlayer, shiki, rehype, remark
```

### Specific Tasks

- [ ] Documentation layout (sidebar + TOC)
- [ ] MDX rendering pipeline
- [ ] Custom MDX components (Callout, CodeBlock, Tabs)
- [ ] Auto table of contents
- [ ] Documentation search

---

## 4. Backend Developer

### Responsibilities

- Authentication system implementation
- API endpoint development
- Database design
- Security management

### Required Skills

#### Core (Required)

| Skill              | Level        | Description                    |
| ------------------ | ------------ | ------------------------------ |
| Next.js API Routes | Advanced     | Route Handlers, Middleware     |
| NextAuth.js        | Advanced     | OAuth, Credentials             |
| Database           | Intermediate | PostgreSQL/MySQL or Supabase  |
| TypeScript         | Advanced     | Server-side type safety       |

#### Recommended

| Skill         | Level        | Description              |
| ------------- | ------------ | ------------------------ |
| Prisma        | Intermediate | ORM, migrations          |
| Security      | Advanced     | CSRF, XSS, SQL Injection |
| Rate Limiting | Intermediate | Request throttling       |
| Email Service | Basic        | Auth email delivery      |

### Key Technologies

```
next-auth, prisma, supabase, zod, bcrypt
```

### Specific Tasks

- [ ] OAuth setup (GitHub, Google)
- [ ] Email/password authentication
- [ ] Session management
- [ ] User profile API
- [ ] Password reset flow

---

## 5. Content Creator

### Responsibilities

- Blog post writing
- Documentation content writing
- SEO optimization
- Social media content

### Required Skills

#### Core (Required)

| Skill             | Level        | Description           |
| ----------------- | ------------ | --------------------- |
| Technical Writing | Expert       | Developer-facing content |
| Markdown/MDX      | Advanced     | Formatting, syntax    |
| SEO               | Intermediate | Keywords, metadata   |
| English           | Advanced     | Global content        |

#### Recommended

| Skill                | Level        | Description              |
| -------------------- | ------------ | ------------------------ |
| Developer Experience | Intermediate | DX understanding         |
| Framework Knowledge  | Intermediate | nene.js, Next.js, NestJS |
| Analytics             | Basic        | Content performance      |
| Social Media          | Intermediate | Developer community      |

### Specific Tasks

- [ ] Getting started documentation
- [ ] Tutorial series
- [ ] Release notes
- [ ] Blog posts (weekly)
- [ ] Open Graph images

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

- [ ] Clone project and set up local environment
- [ ] Review design system documentation
- [ ] Check coding conventions
- [ ] Understand Git workflow

### Role-Specific

- **UI Developer**: Study shadcn/ui docs, analyze existing components
- **Docs Specialist**: Understand MDX setup, content structure
- **Backend Developer**: Study NextAuth.js docs, DB schema design
- **Content Creator**: Review brand guidelines, tone and voice
