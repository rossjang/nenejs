# Project Progress

This document tracks the development progress of nene.js for AI agents and developers.

## Current Status: Alpha

The project is in active development.

---

## Completed

### Infrastructure
- [x] Monorepo setup with Turborepo
- [x] pnpm workspaces configuration
- [x] TypeScript configuration for all packages

### apps/api (NestJS Backend)
- [x] Basic NestJS setup
- [x] Health check endpoint
- [x] @nestjs/config integration
- [x] class-validator validation pipe
- [x] CORS configuration
- [x] Database integration (Prisma + SQLite)
- [x] Waitlist API endpoint (POST /waitlist, GET /waitlist/count)

### apps/web (Next.js Frontend)
- [x] Next.js 16 with App Router
- [x] Tailwind CSS setup
- [x] Landing page
- [x] Documentation pages (MDX)
- [x] Blog pages
- [x] Auth pages (UI only)

### packages/shared
- [x] Shared types (User, ApiResponse, etc.)
- [x] Shared DTOs with validation
- [x] API route constants
- [x] Utility functions

### packages/create-nene
- [x] CLI scaffolding tool
- [x] Monorepo template generation
- [x] Package name customization
- [x] Multi-agent rule files (Cursor, GitHub Copilot, Claude Code, OpenAI Codex)
- [x] AI_CONTEXT.md universal context file (single source of truth)

### Documentation
- [x] ARCHITECTURE.md
- [x] API.md
- [x] PROGRESS.md

---

## In Progress

### apps/api
- [ ] Authentication module (JWT) - deferred, not needed for waitlist MVP
- [ ] User CRUD endpoints - deferred, not needed for waitlist MVP

### apps/web
- [x] Waitlist API integration (calls backend API)
- [ ] Auth context and hooks - deferred
- [ ] Protected routes - deferred

---

## Planned

### Phase 1: Core Features
- [ ] Complete auth flow (register, login, logout)
- [ ] User management
- [ ] Session handling

### Phase 2: Developer Experience
- [ ] Swagger/OpenAPI documentation
- [ ] API client generation
- [ ] E2E testing setup

### Phase 3: Production Ready
- [x] Vercel deployment (frontend) - https://nene-js.vercel.app
- [ ] Docker setup
- [ ] CI/CD pipeline
- [ ] Production deployment guide

### Phase 4: Advanced Features
- [ ] WebSocket support
- [ ] File upload
- [ ] Rate limiting
- [ ] Caching

---

## Known Issues

1. **Shared package must be built first** - Run `pnpm build` in packages/shared before running dev

---

## Notes for AI Agents

When making changes to this project:

1. **Always check this file first** to understand current state
2. **Update this file** after completing tasks
3. **Follow the patterns** in ARCHITECTURE.md
4. **Update API.md** when adding new endpoints
5. **Test both apps** after making changes to shared package
6. **Use existing utilities** from @nene/shared instead of creating duplicates

### Quick Commands

```bash
# Install dependencies
pnpm install

# Run development (all apps)
pnpm dev

# Run only backend
pnpm dev --filter=@nene/api

# Run only frontend
pnpm dev --filter=@nene/web

# Build all
pnpm build

# Build shared package
pnpm --filter=@nene/shared build
```
