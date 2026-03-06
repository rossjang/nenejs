# Claude Code Rules

> See `AI_CONTEXT.md` for universal AI agent context (single source of truth).

## Project Structure

```
├── apps/
│   ├── web/                    # Next.js 16 frontend (port 3000)
│   │   ├── src/app/            # App Router pages
│   │   ├── src/components/     # React components
│   │   └── src/lib/            # Utilities
│   └── api/                    # NestJS 11 backend (port 4000)
│       ├── src/                # Modules, controllers, services
│       └── prisma/             # Database schema
├── packages/
│   └── shared/                 # @app/shared — types, DTOs, constants
│       ├── src/types/          # TypeScript interfaces
│       ├── src/dto/            # DTOs with class-validator
│       └── src/constants/      # API routes, HTTP status codes
├── docs/                       # Project documentation
│   ├── overview/
│   │   └── ARCHITECTURE.md     # Architecture overview
│   ├── API.md                  # API endpoint reference
│   └── kanban/                 # Task management (TODO/DOING/DONE)
├── AI_CONTEXT.md               # Universal AI context
├── CLAUDE.md                   # This file
├── AGENTS.md                   # OpenAI Codex rules
└── .cursor/rules/              # Cursor AI rules
```

## Critical Rules

1. **NEVER duplicate types.** All types, DTOs, and constants must be imported from `@app/shared`.
2. Read `docs/overview/ARCHITECTURE.md` before making structural changes.
3. Read `docs/kanban/README.md` for current task priorities.
4. Update `docs/API.md` when adding or modifying endpoints.
5. Move completed tasks in `docs/kanban/` (DOING -> DONE).
6. Run `pnpm build` to verify shared package changes work.

## Common Commands

```bash
# Development
pnpm dev              # Run all apps (frontend + backend)
pnpm dev:web          # Frontend only (port 3000)
pnpm dev:api          # Backend only (port 4000)

# Building
pnpm build:shared     # Build shared package (must run first after shared changes)
pnpm build            # Build all packages

# Testing
pnpm test             # Run all tests
```

## Build Order

The shared package **must** be built before other packages. Turborepo handles this automatically, but if building manually:

```bash
pnpm build:shared    # 1. Build shared types/DTOs/constants
pnpm build           # 2. Build everything else
```

## Key Patterns

### Type Sharing

```typescript
// GOOD — import from shared
import { User, CreateUserDto, API_ROUTES } from '@app/shared';

// BAD — duplicating types
interface User { id: string; email: string; ... }
```

### NestJS Module Pattern

```
apps/api/src/{feature}/
├── {feature}.module.ts       # Module definition
├── {feature}.controller.ts   # HTTP endpoints
├── {feature}.service.ts      # Business logic
```

### Next.js Component Pattern

- **Server Components** are the default (no directive needed)
- **Client Components** require `'use client'` at the top
- API calls use `NEXT_PUBLIC_API_URL` environment variable

## Environment Variables

**apps/api/.env**:
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
