# Architecture

This document describes the architecture of nene.js for AI agents and developers.

## Overview

nene.js is an AI-native full-stack monorepo framework combining:
- **Frontend**: Next.js 16 with React 19
- **Backend**: NestJS 11 with full decorator support
- **Shared**: TypeScript types, DTOs, and constants
- **Core**: Codegen CLI + React hooks framework
- **Tooling**: Turborepo for build orchestration, pnpm workspaces

## Project Structure

```
nenejs/
├── apps/
│   ├── web/                  # Next.js frontend & documentation site
│   │   ├── src/app/          # App Router pages
│   │   │   ├── auth/         # Auth pages (signin, signup, forgot-password)
│   │   │   ├── blog/         # Blog list & detail pages
│   │   │   ├── dashboard/    # Protected user dashboard
│   │   │   ├── docs/         # MDX documentation (i18n: en, pt-br)
│   │   │   ├── features/     # Marketing features page
│   │   │   └── showcase/     # Project showcase grid
│   │   ├── src/components/   # React components (auth/, blog/, showcase/, docs/, landing/, layout/)
│   │   ├── src/contexts/     # React contexts (auth-context)
│   │   ├── src/lib/          # Utilities (api.ts, auth.ts, mdx.ts, i18n.ts, showcase.ts, features.ts)
│   │   ├── src/data/         # Static data files
│   │   ├── content/          # MDX content (blog/, docs/)
│   │   └── public/           # Static assets
│   └── api/                  # NestJS backend
│       ├── src/              # Modules, controllers, services
│       │   ├── auth/         # JWT auth (register, login, refresh, logout, me)
│       │   ├── users/        # User CRUD (list, get, update, delete)
│       │   ├── blog/         # Blog posts & authors
│       │   ├── showcase/     # Showcase projects & submissions
│       │   ├── features/     # Features & comparison table
│       │   ├── health/       # Health check endpoint
│       │   ├── waitlist/     # Waitlist email collection
│       │   ├── prisma/       # Prisma database service
│       │   └── config/       # NestJS configuration
│       └── prisma/           # Database schema & seed script
│           ├── schema.prisma # Schema definition
│           └── seed.ts       # Demo data seeder
├── packages/
│   ├── shared/               # @nene/shared — types, DTOs, constants, utils
│   │   ├── src/types/        # TypeScript interfaces
│   │   ├── src/dto/          # Data Transfer Objects
│   │   ├── src/constants/    # API routes, HTTP status, pagination
│   │   └── src/utils/        # Shared utilities
│   ├── nene/                 # Core framework (codegen CLI + React hooks)
│   │   ├── src/codegen/      # Controller analyzer, hook/route generators
│   │   ├── src/react/        # React hooks
│   │   └── src/cli.ts        # CLI interface
│   └── create-nene/          # CLI scaffolding tool (npx create-nene)
├── docs/                     # Project documentation (AI-friendly)
│   ├── ARCHITECTURE.md       # This file
│   ├── API.md                # API endpoint reference
│   └── PROGRESS.md           # Development progress tracker
├── turbo.json                # Turborepo configuration
├── pnpm-workspace.yaml       # Workspace configuration
└── package.json              # Root package.json
```

## Data Flow

```
                                    @nene/shared
                                   (types, DTOs)
                                        |
            +--------------------------+---------------------------+
            |                                                      |
            v                                                      v
    [Browser/Client]  <--HTTP-->  [Next.js :3000]  <--HTTP-->  [NestJS :4000]
                                        |                          |
                                        |                          v
                                        |                  [Prisma + SQLite]
                                        |                          |
                                        +--- Server Components ----+
```

## Key Packages

### apps/web (Next.js Frontend)
- Port: 3000
- Uses App Router with Server Components by default
- Client Components only for interactivity (`'use client'`)
- Tailwind CSS 4 for styling
- Radix UI + Lucide Icons for components
- next-mdx-remote v6 for MDX rendering
- Auth context with JWT token management
- API client with auto-refresh on 401
- Consumes `@nene/shared` for types

### apps/api (NestJS Backend)
- Port: 4000
- Full NestJS with decorators
- Prisma ORM with SQLite (LibSQL adapter)
- JWT authentication with refresh token rotation
- class-validator for request validation
- @nestjs/config for environment management
- @nestjs/throttler for rate limiting (10 req/60s global, 3 req/60s for waitlist)
- Global prefix: `/api`
- Consumes `@nene/shared` for types and DTOs

**Modules**: AuthModule, UsersModule, BlogModule, ShowcaseModule, FeaturesModule, WaitlistModule, HealthModule, PrismaModule

### packages/shared (@nene/shared)
- Shared TypeScript types and interfaces (User, BlogPost, ShowcaseProject, Feature, etc.)
- DTOs with class-validator decorators (CreateUserDto, LoginDto, BlogQueryDto, etc.)
- API route constants (API_ROUTES, CONTENT_ROUTES)
- HTTP status codes and pagination defaults
- Utility functions (formatDate, parsePagination, createPaginatedResponse, etc.)

### packages/nene (Core Framework)
- Codegen CLI for analyzing NestJS controllers and generating React hooks
- Controller analyzer (ts-morph based)
- Hook generator and route generator
- React hooks for data fetching
- CLI: `nene generate`

### packages/create-nene
- CLI tool to scaffold new projects
- Creates full monorepo structure with multi-agent support
- `npx create-nene my-app`
- Generates rule files for Cursor, Claude Code, GitHub Copilot, and OpenAI Codex
- Includes SQLite database setup with Prisma auto-migrate

## Key Patterns

### Type Sharing
Types are defined once in `@nene/shared` and used by both frontend and backend:

```typescript
// packages/shared/src/types/index.ts
export interface User {
  id: string;
  email: string;
  name: string | null;
}

// Used in apps/api and apps/web
import { User } from '@nene/shared';
```

### API Routes
API routes are defined as constants to ensure consistency:

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

### Validation
DTOs with class-validator are shared between frontend and backend:

```typescript
// packages/shared/src/dto/index.ts
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
```

### Authentication
JWT-based with refresh token rotation:
- Access tokens: short-lived (15 min default)
- Refresh tokens: long-lived (30 days), stored as SHA-256 hashes in DB
- Token rotation: old refresh token revoked on each refresh
- Theft detection: reusing a revoked token revokes ALL user sessions
- Frontend API client auto-refreshes on 401 with mutex pattern

### NestJS Module Pattern
Each backend feature follows this structure:
```
apps/api/src/{feature}/
├── {feature}.module.ts       # Module definition
├── {feature}.controller.ts   # HTTP endpoints
├── {feature}.service.ts      # Business logic
└── index.ts                  # Barrel export
```

### Next.js Component Pattern
- **Server Components** are the default (no directive needed) — used for data fetching pages
- **Client Components** require `'use client'` at the top — used for forms, interactivity
- API calls use the `NEXT_PUBLIC_API_URL` environment variable
- Protected routes use `<ProtectedRoute>` wrapper with auth context

## Configuration

### Environment Variables

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

### Turborepo

Build pipeline is configured in `turbo.json`:
- `build` depends on `^build` (packages first)
- `dev` runs in parallel for all apps
- `test` depends on `^build`
- Outputs cached: `dist/**`, `.next/**`

## Database

Prisma ORM with SQLite (LibSQL adapter). Schema at `apps/api/prisma/schema.prisma`.

**Models**: User, RefreshToken, Waitlist, Author, BlogPost, ShowcaseProject, Feature, ComparisonRow

Seed script at `apps/api/prisma/seed.ts` creates demo data (authors, blog posts, showcase projects, features, comparison rows).

## Deployment

- **Frontend (Next.js)**: Vercel — https://nene-js.vercel.app
- **Backend (NestJS)**: TBD

## Development Workflow

1. Install dependencies: `pnpm install`
2. Set up environment variables (copy `.env.example` files)
3. Initialize database: `cd apps/api && npx prisma db push`
4. Seed demo data: `cd apps/api && npx prisma db seed`
5. Start development: `pnpm dev`
6. Frontend available at: http://localhost:3000
7. Backend available at: http://localhost:4000

## AI Agent Integration

Every nene.js project ships with built-in rule files for multiple AI coding tools:

| Tool | Rule Files | How It Works |
|------|-----------|--------------|
| Any AI Agent | `AI_CONTEXT.md` | Universal context file — single source of truth |
| Cursor | `.cursor/rules/*.mdc` | Auto-applied based on YAML frontmatter (`globs`, `alwaysApply`) |
| GitHub Copilot | `.github/copilot-instructions.md` | Automatically read by Copilot in VS Code/JetBrains |
| Claude Code | `CLAUDE.md` (root + subdirectories) | Automatically read by Claude Code on session start |
| OpenAI Codex | `AGENTS.md` (root + subdirectories) | Automatically read by Codex on session start |

`AI_CONTEXT.md` is the **single source of truth** for project context. Tool-specific files are lightweight pointers that reference it. The detailed documentation lives in `docs/` (this file, API.md, etc.).

## For AI Agents

When working on this codebase:

1. **Check docs/PROGRESS.md** for current status
2. **Follow patterns** in this architecture document
3. **Update API.md** when adding endpoints
4. **Use shared types** — don't duplicate type definitions
5. **Test both apps** after changes to shared package
