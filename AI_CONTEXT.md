# AI Context - nene.js

> Universal project context for any AI coding agent. This is the single source of truth for understanding the nene.js project.

## What is nene.js?

nene.js is an AI-native full-stack monorepo framework combining Next.js and NestJS. It provides shared types, auto-generated hooks, and structured documentation that AI agents can understand.

## Project Structure

```
nenejs/
├── apps/
│   ├── web/                  # Next.js 16 frontend & docs site (port 3000)
│   │   ├── src/app/          # App Router pages (landing, docs, blog, showcase, features, auth, dashboard)
│   │   ├── src/components/   # React components (auth/, blog/, showcase/, docs/, landing/, layout/)
│   │   ├── src/contexts/     # React contexts (auth-context with JWT management)
│   │   ├── src/lib/          # Utilities (api.ts, auth.ts, mdx.ts, i18n.ts, etc.)
│   │   └── content/          # MDX content (blog/, docs/)
│   └── api/                  # NestJS 11 backend API (port 4000)
│       ├── src/              # Modules: auth, users, blog, showcase, features, waitlist, health, prisma
│       └── prisma/           # Database schema & seed script
├── packages/
│   ├── shared/               # @nene/shared — types, DTOs, constants, utils
│   ├── nene/                 # Core framework (codegen CLI + React hooks)
│   └── create-nene/          # CLI scaffolding tool (npx create-nene)
├── docs/                     # AI-friendly documentation
│   ├── ARCHITECTURE.md       # Full architecture details
│   ├── API.md                # API endpoint reference (22 endpoints)
│   └── PROGRESS.md           # Development progress tracker
├── CLAUDE.md                 # Claude Code rules
├── AGENTS.md                 # OpenAI Codex rules
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot rules
├── turbo.json                # Turborepo build config
└── pnpm-workspace.yaml       # Workspace config
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js (App Router) | 16 |
| UI | React | 19 |
| Styling | Tailwind CSS | 4 |
| Components | Radix UI, Lucide Icons | - |
| Content | next-mdx-remote | 6 |
| Backend | NestJS | 11 |
| Database | Prisma + SQLite (LibSQL) | 7 |
| Auth | JWT (access + refresh tokens) | - |
| Rate Limiting | @nestjs/throttler | 6.5 |
| Validation | class-validator | 0.14 |
| Build | Turborepo + tsup | 2 |
| Package Manager | pnpm | 10 |
| Language | TypeScript | 5 |
| Testing | Jest | 29 |

## Design Patterns

### Type Sharing (Critical Rule)

**NEVER duplicate types.** Types are defined once in `@nene/shared` and imported by both apps:

```typescript
// GOOD - import from shared
import { User, CreateUserDto } from '@nene/shared';

// BAD - duplicating types
interface User { id: string; ... }
```

### Shared DTOs with Validation

DTOs use class-validator decorators and are shared between frontend and backend:

```typescript
// packages/shared/src/dto/index.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
```

### API Route Constants

API routes are defined as constants for consistency:

```typescript
// packages/shared/src/constants/index.ts
export const API_ROUTES = {
  HEALTH: '/api/health',
  AUTH: { LOGIN: '/api/auth/login', REGISTER: '/api/auth/register', ... },
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: string) => `/api/users/${id}`,
  },
};

export const CONTENT_ROUTES = {
  BLOG: { POSTS: '/api/blog/posts', ... },
  SHOWCASE: { PROJECTS: '/api/showcase/projects', ... },
  FEATURES: { LIST: '/api/features', ... },
};
```

### NestJS Module Pattern

```
apps/api/src/{feature}/
├── {feature}.module.ts
├── {feature}.controller.ts
├── {feature}.service.ts
└── index.ts
```

### Next.js Component Pattern

- Default: Server Component (no directive needed) — used for data fetching
- Client Component: add `'use client'` at top — used for interactivity
- API calls use `NEXT_PUBLIC_API_URL` environment variable
- Protected routes use `<ProtectedRoute>` wrapper

### Authentication Flow

JWT-based with refresh token rotation:
- Access tokens: short-lived (15 min default)
- Refresh tokens: long-lived (30 days), stored as SHA-256 hashes in DB
- Token rotation: old refresh token revoked on each refresh
- Theft detection: reusing a revoked token revokes ALL user sessions
- Frontend API client auto-refreshes on 401 with mutex pattern

## API Endpoints (22 total)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/health` | No | Health check |
| POST | `/api/auth/register` | No | User registration |
| POST | `/api/auth/login` | No | Login |
| POST | `/api/auth/refresh` | No | Token refresh (rotation) |
| POST | `/api/auth/logout` | No | Logout (revoke token) |
| GET | `/api/auth/me` | JWT | Current user info |
| GET | `/api/users` | JWT | List users (paginated) |
| GET | `/api/users/:id` | JWT | Get user by ID |
| PATCH | `/api/users/:id` | JWT | Update user (self only) |
| DELETE | `/api/users/:id` | JWT | Delete user (self only) |
| POST | `/api/waitlist` | No | Add email to waitlist (3/60s limit) |
| GET | `/api/waitlist/count` | No | Get waitlist count |
| GET | `/api/blog/posts` | No | List blog posts (paginated) |
| GET | `/api/blog/posts/:slug` | No | Get blog post by slug |
| GET | `/api/blog/authors` | No | List authors |
| GET | `/api/showcase/projects` | No | List showcase projects |
| GET | `/api/showcase/projects/:slug` | No | Get project by slug |
| GET | `/api/showcase/categories` | No | Category counts |
| POST | `/api/showcase/submit` | No | Submit community project |
| GET | `/api/features` | No | List features |
| GET | `/api/features/comparison` | No | Comparison table data |

See `docs/API.md` for full request/response details.

## Database Models

Prisma + SQLite. Schema at `apps/api/prisma/schema.prisma`:

- **User** — id, email, name, password (hashed), timestamps, refreshTokens[]
- **RefreshToken** — id, token (SHA-256 hash), userId, expiresAt, revoked
- **Waitlist** — id, email, createdAt
- **Author** — id, name, role, avatar, bio, twitter, github, posts[]
- **BlogPost** — id, slug, title, excerpt, content, category, tags, author, readingTime, published
- **ShowcaseProject** — id, slug, name, description, category, tags, url, github, featured, approved
- **Feature** — id, title, description, bullets, codeExample, accentColor, order
- **ComparisonRow** — id, feature, neneValue, othersValue, hasNeneCheck, hasOthersCheck, order

## Quick Commands

```bash
pnpm dev              # Run all apps (frontend + backend)
pnpm dev:web          # Run frontend only (port 3000)
pnpm dev:api          # Run backend only (port 4000)
pnpm build            # Build all packages
pnpm build:shared     # Rebuild shared package after changes
cd apps/api && npx prisma db push   # Apply schema changes
cd apps/api && npx prisma db seed   # Seed demo data
cd apps/api && npm test             # Run tests
```

## Before Making Changes

1. Read `docs/ARCHITECTURE.md` for current patterns.
2. Read `docs/API.md` for existing endpoints.
3. Read `docs/PROGRESS.md` for project status.

## After Making Changes

1. Update `docs/API.md` when adding/modifying endpoints.
2. Update `docs/PROGRESS.md` to reflect progress.
3. Run `pnpm build` to verify shared package changes work.
4. If you edited `apps/web/**`, verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`
5. If you edited `apps/api/**`, verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4000/api/health`

## Environment Variables

**apps/api/.env:**
```
PORT=4000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=file:./prisma/dev.db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_DAYS=30
```

**apps/web/.env.local:**
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Common Errors

- **"Cannot find module './XXX.js'"** in Next.js: Stale webpack cache. Run `rm -rf apps/web/.next` and restart.
- **Port already in use**: Check with `lsof -i :3000` or `lsof -i :4000`.
- **Shared package not found**: Run `pnpm build:shared` first.
- **Prisma client not generated**: Run `cd apps/api && npx prisma generate`.
