# Architecture

This document describes the architecture of nene.js for AI agents and developers.

## Overview

nene.js is a full-stack monorepo framework combining:
- **Frontend**: Next.js 16 with React 19
- **Backend**: NestJS 11 with full decorator support
- **Shared**: TypeScript types, DTOs, and constants
- **Tooling**: Turborepo for build orchestration, pnpm workspaces

## Project Structure

```
nenejs/
├── apps/
│   ├── web/                  # Next.js frontend & documentation site
│   │   ├── src/app/          # App router pages
│   │   ├── src/components/   # React components
│   │   └── src/lib/          # Utilities
│   └── api/                  # NestJS backend
│       ├── src/              # Modules, controllers, services
│       └── src/config/       # Configuration
├── packages/
│   ├── shared/               # Shared types and constants
│   │   ├── src/types/        # TypeScript interfaces
│   │   ├── src/dto/          # Data Transfer Objects
│   │   ├── src/constants/    # API routes, constants
│   │   └── src/utils/        # Shared utilities
│   └── create-nene/          # CLI scaffolding tool
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
                                        |                    [Database]
                                        |                          |
                                        +--- Server Components ----+
```

## Key Packages

### apps/web (Next.js Frontend)
- Port: 3000
- Uses App Router
- Server and Client Components
- Tailwind CSS for styling
- Consumes `@nene/shared` for types

### apps/api (NestJS Backend)
- Port: 4000
- Full NestJS with decorators
- class-validator for request validation
- @nestjs/config for environment management
- Consumes `@nene/shared` for types and DTOs

### packages/shared
- Shared TypeScript types and interfaces
- DTOs with class-validator decorators
- API route constants
- Utility functions

### packages/create-nene
- CLI tool to scaffold new projects
- Creates full monorepo structure with multi-agent support
- `npx create-nene my-app`
- Generates rule files for Cursor, Claude Code, and OpenAI Codex

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

// Used in apps/api
import { User } from '@nene/shared';

// Used in apps/web
import { User } from '@nene/shared';
```

### API Routes
API routes are defined as constants to ensure consistency:

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

## Configuration

### Environment Variables

**apps/api/.env:**
```
PORT=4000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=postgresql://...
JWT_SECRET=...
```

**apps/web/.env.local:**
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Turborepo

Build pipeline is configured in `turbo.json`:
- `build` depends on `^build` (packages first)
- `dev` runs in parallel for all apps
- Outputs cached: `dist/**`, `.next/**`

## Deployment

- **Frontend (Next.js)**: Vercel - https://nene-js.vercel.app
- **Backend (NestJS)**: TBD

## Development Workflow

1. Install dependencies: `pnpm install`
2. Start development: `pnpm dev`
3. Frontend available at: http://localhost:3000
4. Backend available at: http://localhost:4000

## AI Agent Integration

Every nene.js project ships with built-in rule files for multiple AI coding tools:

| Tool | Rule Files | How It Works |
|------|-----------|--------------|
| Any AI Agent | `AI_CONTEXT.md` | Universal context file - single source of truth |
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
4. **Use shared types** - don't duplicate type definitions
5. **Test both apps** after changes to shared package
