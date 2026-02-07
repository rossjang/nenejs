# AI Context - nene.js

> Universal project context for any AI coding agent. This is the single source of truth for understanding the nene.js project.

## What is nene.js?

nene.js is an AI-native full-stack monorepo framework combining Next.js and NestJS. It provides shared types, auto-generated hooks, and structured documentation that AI agents can understand.

## Project Structure

```
nene-web/
├── apps/
│   ├── web/                  # Next.js 16 frontend & docs site (port 3000)
│   │   ├── src/app/          # App Router pages
│   │   ├── src/components/   # React components
│   │   └── src/lib/          # Utilities
│   └── api/                  # NestJS 11 backend API (port 4000)
│       ├── src/              # Modules, controllers, services
│       └── prisma/           # Database schema & migrations
├── packages/
│   ├── shared/               # Shared types, DTOs, constants (@nene/shared)
│   ├── create-nene/          # CLI scaffolding tool (npx create-nene)
│   └── nene/                 # Core framework (hooks, codegen)
├── docs/                     # AI-friendly documentation
│   ├── ARCHITECTURE.md       # Full architecture details
│   ├── API.md                # API endpoint reference
│   └── PROGRESS.md           # Development progress tracker
├── .cursor/rules/            # Cursor AI rules
├── CLAUDE.md                 # Claude Code rules (references this file)
├── AGENTS.md                 # OpenAI Codex rules (references this file)
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot rules (references this file)
├── turbo.json                # Turborepo build config
└── pnpm-workspace.yaml       # Workspace config
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js (App Router) | 16 |
| UI | React | 19 |
| Styling | Tailwind CSS | 4 |
| Backend | NestJS | 11 |
| Database | Prisma + SQLite (LibSQL) | 7 |
| Validation | class-validator | 0.14 |
| Build | Turborepo | 2 |
| Package Manager | pnpm | 10 |
| Language | TypeScript | 5 |

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
  USERS: {
    BASE: '/api/users',
    BY_ID: (id: string) => `/api/users/${id}`,
  },
};
```

### NestJS Module Pattern

```
apps/api/src/{feature}/
├── {feature}.module.ts
├── {feature}.controller.ts
├── {feature}.service.ts
└── dto/          # Feature-specific DTOs (if not shared)
```

### Next.js Component Pattern

- Default: Server Component (no directive needed)
- Client Component: add `'use client'` at top
- API calls use `NEXT_PUBLIC_API_URL` environment variable

## Quick Commands

```bash
pnpm dev              # Run all apps (frontend + backend)
pnpm dev:web          # Run frontend only (port 3000)
pnpm dev:api          # Run backend only (port 4000)
pnpm build            # Build all packages
pnpm build:shared     # Rebuild shared package after changes
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

## Common Errors

- **"Cannot find module './XXX.js'"** in Next.js: Stale webpack cache. Run `rm -rf apps/web/.next` and restart.
- **Port already in use**: Check with `lsof -i :3000` or `lsof -i :4000`.
- **Shared package not found**: Run `pnpm build:shared` first.

## Environment Variables

**apps/api/.env:**
```
PORT=4000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=file:./prisma/dev.db
```

**apps/web/.env.local:**
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```
