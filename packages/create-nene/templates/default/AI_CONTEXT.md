# AI Context

> Universal project context for any AI coding agent. This is the single source of truth for understanding this project.

## Project Structure

```
├── apps/
│   ├── web/              # Next.js 16 frontend (port 3000)
│   │   ├── src/app/      # App Router pages
│   │   └── src/          # Components, hooks, utils
│   └── api/              # NestJS 11 backend (port 4000)
│       └── src/          # Modules, controllers, services
├── packages/
│   └── shared/           # Shared types, DTOs, constants (@app/shared)
├── docs/                 # AI-friendly documentation
│   ├── overview/
│   │   └── ARCHITECTURE.md  # Full architecture details
│   ├── API.md               # API endpoint reference
│   └── kanban/              # Task management (TODO/DOING/DONE)
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js (App Router) | 16 |
| UI | React | 19 |
| Styling | Tailwind CSS | 4 |
| Backend | NestJS | 11 |
| Validation | class-validator | 0.14 |
| Build | Turborepo | 2 |
| Package Manager | pnpm | 10 |
| Language | TypeScript | 5 |

## Design Patterns

### Type Sharing (Critical Rule)

**NEVER duplicate types.** Types are defined once in `@app/shared` and imported by both apps:

```typescript
// GOOD - import from shared
import { User, CreateUserDto } from '@app/shared';

// BAD - duplicating types
interface User { id: string; ... }
```

### Shared DTOs with Validation

```typescript
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

```typescript
import { API_ROUTES } from '@app/shared';
```

### NestJS Module Pattern

```
apps/api/src/{feature}/
├── {feature}.module.ts
├── {feature}.controller.ts
├── {feature}.service.ts
└── dto/
```

### Next.js Component Pattern

- Default: Server Component (no directive needed)
- Client Component: add `'use client'` at top
- API calls use `NEXT_PUBLIC_API_URL` env var + shared route constants

## Quick Commands

```bash
pnpm dev              # Run all apps
pnpm dev:web          # Run frontend only
pnpm dev:api          # Run backend only
pnpm build            # Build all
pnpm --filter @app/shared build  # Rebuild shared package after changes
```

## Before Making Changes

1. Read `docs/overview/ARCHITECTURE.md` for current patterns.
2. Read `docs/API.md` for existing endpoints.
3. Read `docs/kanban/README.md` for task priorities.

## After Making Changes

1. Update `docs/API.md` when adding/modifying endpoints.
2. Move completed tasks in `docs/kanban/` (DOING -> DONE).
3. Run `pnpm build` to verify shared package changes work.
4. If you edited `apps/web/**`, verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000`
5. If you edited `apps/api/**`, verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4000/api/health`

## Common Errors

- **"Cannot find module './XXX.js'"** in Next.js: Stale webpack cache. Run `rm -rf apps/web/.next` and restart.
- **Port already in use**: Check with `lsof -i :3000` or `lsof -i :4000`.
- **Shared package not found**: Rebuild with `pnpm --filter @app/shared build`.
