# Nene.js - Claude Code Guide

> **AI-native full-stack monorepo framework** combining Next.js 16 (frontend) and NestJS 11 (backend) with shared TypeScript types, DTOs, and constants.
>
> See `AI_CONTEXT.md` for universal AI agent context. See `docs/ARCHITECTURE.md`, `docs/API.md`, and `docs/PROGRESS.md` for detailed references.

## Project Structure

```
nenejs/
├── apps/
│   ├── web/                    # Next.js 16 frontend (port 3000)
│   │   ├── src/app/            # App Router pages (landing, docs, blog, auth, dashboard)
│   │   ├── src/components/     # React components (landing/, auth/, layout/)
│   │   ├── src/contexts/       # React contexts (auth-context)
│   │   ├── src/lib/            # Utilities (auth.ts, showcase.ts)
│   │   ├── src/data/           # Static data files
│   │   ├── content/            # MDX content (blog/, docs/)
│   │   └── public/             # Static assets
│   └── api/                    # NestJS 11 backend (port 4000)
│       ├── src/                # Modules, controllers, services
│       │   ├── auth/           # JWT auth (register, login, refresh, logout, me)
│       │   ├── users/          # User CRUD (list, get, update, delete)
│       │   ├── health/         # Health check endpoint
│       │   ├── waitlist/       # Waitlist email collection
│       │   ├── prisma/         # Prisma database service
│       │   └── config/         # NestJS configuration
│       └── prisma/             # Database schema (schema.prisma)
├── packages/
│   ├── shared/                 # @nene/shared — types, DTOs, constants, utils
│   │   ├── src/types/          # TypeScript interfaces (User, ApiResponse, etc.)
│   │   ├── src/dto/            # DTOs with class-validator decorators
│   │   ├── src/constants/      # API_ROUTES, HTTP status codes
│   │   └── src/utils/          # Shared utility functions
│   ├── nene/                   # Core framework package (hooks, codegen)
│   └── create-nene/            # CLI scaffolding tool (npx create-nene)
├── docs/                       # Project documentation
│   ├── ARCHITECTURE.md         # Architecture overview & data flow
│   ├── API.md                  # API endpoint reference
│   └── PROGRESS.md             # Development progress tracker
├── turbo.json                  # Turborepo build pipeline
├── pnpm-workspace.yaml         # Workspace definition
├── AI_CONTEXT.md               # Universal AI context (single source of truth)
├── AGENTS.md                   # OpenAI Codex rules
└── .github/copilot-instructions.md  # GitHub Copilot rules
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js (App Router) | 16 |
| UI | React | 19 |
| Styling | Tailwind CSS | 4 |
| Components | Radix UI, Lucide Icons | - |
| Content | next-mdx-remote | 5 |
| Backend | NestJS | 11 |
| Database | Prisma + SQLite (LibSQL) | 7 |
| Auth | JWT (access + refresh tokens) | - |
| Validation | class-validator | 0.14 |
| Build | Turborepo + tsup | 2 |
| Package Manager | pnpm | 10 |
| Language | TypeScript | 5 |
| Testing | Jest | 29 |

## Critical Rules

1. **NEVER duplicate types.** All types, DTOs, and constants must be imported from `@nene/shared`. Never redefine interfaces that already exist in the shared package.
2. **Read `docs/ARCHITECTURE.md`** before making structural changes.
3. **Update `docs/API.md`** when adding or modifying endpoints.
4. **Update `docs/PROGRESS.md`** to reflect any progress made.
5. **Run `pnpm build`** to verify shared package changes compile correctly.

## Common Commands

```bash
# Development
pnpm dev                  # Run all apps (frontend + backend)
pnpm dev:web              # Frontend only (port 3000)
pnpm dev:api              # Backend only (port 4000)

# Building
pnpm build:shared         # Build shared package (must run first after shared changes)
pnpm build                # Build all packages (respects dependency order via Turborepo)

# Linting
pnpm lint                 # Lint all packages

# Filtering
pnpm dev --filter=@nene/web    # Run specific package
pnpm dev --filter=@nene/api    # Run specific package

# Backend testing
cd apps/api && npm test         # Run Jest tests
cd apps/api && npm run test:cov # Coverage report

# Database
cd apps/api && npx prisma db push    # Apply schema changes
cd apps/api && npx prisma studio     # Visual database browser
```

## Build Order

The shared package **must** be built before other packages. Turborepo handles this automatically via `turbo.json` (`"dependsOn": ["^build"]`), but if building manually:

```bash
pnpm build:shared    # 1. Build shared types/DTOs/constants
pnpm build           # 2. Build everything else
```

## Key Patterns

### Type Sharing

```typescript
// GOOD — import from shared
import { User, CreateUserDto, API_ROUTES } from '@nene/shared';

// BAD — duplicating types
interface User { id: string; email: string; ... }
```

### NestJS Module Pattern

Each backend feature follows this structure:
```
apps/api/src/{feature}/
├── {feature}.module.ts       # Module definition
├── {feature}.controller.ts   # HTTP endpoints
├── {feature}.service.ts      # Business logic
└── dto/                      # Feature-specific DTOs (if not in shared)
```

Existing modules: `auth`, `users`, `health`, `waitlist`, `prisma`

### Next.js Component Pattern

- **Server Components** are the default (no directive needed)
- **Client Components** require `'use client'` at the top of the file
- API calls use the `NEXT_PUBLIC_API_URL` environment variable

### Authentication Flow

JWT-based with refresh token rotation:
- Access tokens: short-lived (15 min default)
- Refresh tokens: long-lived (30 days), stored as SHA-256 hashes in DB
- Token rotation: old refresh token revoked on each refresh
- Theft detection: reusing a revoked token revokes ALL user sessions

### Validation

- Backend uses NestJS `ValidationPipe` with `class-validator` decorators
- DTOs in `@nene/shared` are used by both frontend and backend
- Config: `whitelist: true`, `forbidNonWhitelisted: true`, `transform: true`

### Error Response Format

```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

## Database Schema

Prisma with SQLite. Schema at `apps/api/prisma/schema.prisma`:

- **User** — id (CUID), email (unique), name, password (hashed), timestamps, refreshTokens[]
- **RefreshToken** — id, token (SHA-256 hash, unique), userId (FK), expiresAt, revoked, createdAt
- **Waitlist** — id, email (unique), createdAt

## API Endpoints

Base URL: `http://localhost:4000/api`

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
| POST | `/api/waitlist` | No | Add email to waitlist |
| GET | `/api/waitlist/count` | No | Get waitlist count |

See `docs/API.md` for full request/response details.

## Environment Variables

**apps/api/.env** (see `apps/api/.env.example`):
```
PORT=4000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=file:./prisma/dev.db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
```

**apps/web/.env.local**:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Verification After Changes

```bash
# After editing shared package
pnpm build:shared

# After editing frontend
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000

# After editing backend
curl -s -o /dev/null -w "%{http_code}" http://localhost:4000/api/health
```

## Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find module './XXX.js'` in Next.js | Stale webpack cache | `rm -rf apps/web/.next` and restart |
| Port already in use | Another process on port | `lsof -i :3000` or `lsof -i :4000` to find and kill |
| Shared package not found | Package not built | Run `pnpm build:shared` |
| Prisma client not generated | Schema changed | `cd apps/api && npx prisma generate` |

## Project Status

**Current: Alpha** — See `docs/PROGRESS.md` for full details.

Completed: monorepo infra, frontend (landing/docs/blog/auth/dashboard), backend (auth with JWT refresh rotation, user CRUD, health, waitlist), shared types/DTOs/constants, create-nene CLI, Vercel deployment.

Planned: API client generation, E2E testing, Docker, CI/CD, WebSocket support, file upload, caching, Swagger/OpenAPI.
