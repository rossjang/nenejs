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
- [x] Vercel deployment (frontend) — https://nene-js.vercel.app

### apps/api (NestJS Backend)
- [x] Basic NestJS setup with global prefix `/api`
- [x] Health check endpoint
- [x] @nestjs/config integration (configuration.ts)
- [x] class-validator validation pipe (whitelist, forbidNonWhitelisted, transform)
- [x] CORS configuration (FRONTEND_URL)
- [x] Rate limiting (@nestjs/throttler — 10 req/60s global, 3 req/60s waitlist)
- [x] Database integration (Prisma + SQLite with LibSQL adapter)
- [x] Authentication module (JWT) — register, login, refresh (rotation), logout, me
- [x] Refresh token rotation with theft detection (reuse revokes all sessions)
- [x] User CRUD endpoints — list (paginated), get, update (self-only), delete (self-only)
- [x] Waitlist API endpoint (POST /waitlist with rate limit, GET /waitlist/count)
- [x] DB schema — User, RefreshToken, Waitlist, Author, BlogPost, ShowcaseProject, Feature, ComparisonRow
- [x] Seed script — demo data (authors, blog posts, showcase projects, features, comparison rows)
- [x] Blog API module — posts (paginated, category filter, published only), post by slug, authors
- [x] Showcase API module — projects (category/featured filter, approved only), categories, community submit
- [x] Features API module — features list (ordered), comparison table data
- [x] Jest test setup with spec files

### apps/web (Next.js Frontend)
- [x] Next.js 16 with App Router
- [x] Tailwind CSS 4 setup
- [x] Radix UI + Lucide Icons
- [x] Landing page
- [x] Documentation pages (MDX with i18n — en, pt-br)
- [x] Blog pages (Server Component + real API integration, MDX rendering)
- [x] Showcase page (Server Component + real API integration)
- [x] Features page (Server Component + real API integration)
- [x] Auth pages — signin, signup, forgot-password (UI)
- [x] Auth context & hooks — JWT-based auth with API client
- [x] API client with auto-refresh on 401 (mutex pattern for concurrent requests)
- [x] Protected routes — ProtectedRoute component
- [x] Dashboard page — real user data from auth context
- [x] Waitlist API integration (calls backend API)
- [x] Duplicate constants cleanup — shared constants for blog/showcase categories

### packages/shared (@nene/shared)
- [x] Shared types — User, ApiResponse, PaginatedResponse, AuthResponse, HealthStatus
- [x] Content types — BlogCategory, Author, BlogPost, ShowcaseCategory, ShowcaseProject, Feature, ComparisonRow
- [x] Shared DTOs — CreateUserDto, LoginDto, UpdateUserDto, RefreshTokenDto, PaginationDto
- [x] Content DTOs — BlogQueryDto, ShowcaseQueryDto, CreateShowcaseProjectDto
- [x] API route constants — API_ROUTES, CONTENT_ROUTES
- [x] HTTP status codes, default pagination constants
- [x] Utility functions — formatDate, parsePagination, createPaginatedResponse, sleep, isDefined

### packages/nene (Core Framework)
- [x] Codegen CLI structure (commander, chalk)
- [x] Controller analyzer (ts-morph based)
- [x] Hook generator and route generator
- [x] React hooks module
- [x] Package exports configuration (main, react, cli)

### packages/create-nene
- [x] CLI scaffolding tool
- [x] Monorepo template generation
- [x] Package name customization
- [x] Multi-agent rule files (Cursor, GitHub Copilot, Claude Code, OpenAI Codex)
- [x] AI_CONTEXT.md universal context file (single source of truth)
- [x] SQLite database integration in template (Prisma + auto-migrate on scaffold)
- [x] Database health check in template (visible in Live Status Panel)

### Documentation
- [x] ARCHITECTURE.md — full architecture overview
- [x] API.md — complete endpoint reference (22 endpoints)
- [x] PROGRESS.md — development tracker
- [x] AI_CONTEXT.md — universal AI context
- [x] CLAUDE.md — Claude Code instructions
- [x] AGENTS.md — OpenAI Codex instructions
- [x] .github/copilot-instructions.md — GitHub Copilot instructions

---

## Planned

### Phase 1: Developer Experience
- [ ] API client generation (auto-generate typed client from NestJS controllers)
- [ ] E2E testing setup (Playwright or Cypress)
- [ ] Swagger/OpenAPI documentation

### Phase 2: Production Ready
- [ ] Docker setup (Dockerfile + docker-compose)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Production deployment guide
- [ ] Backend deployment (cloud hosting)

### Phase 3: Advanced Features
- [ ] WebSocket support
- [ ] File upload
- [ ] Caching layer (Redis or in-memory)
- [ ] Email notifications
- [ ] Admin dashboard

---

## Known Issues

1. **Shared package must be built first** — Run `pnpm build:shared` before running dev if shared package changes
2. **Stale webpack cache** — If Next.js throws "Cannot find module" errors, run `rm -rf apps/web/.next`

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
pnpm dev:api

# Run only frontend
pnpm dev:web

# Build all
pnpm build

# Build shared package
pnpm build:shared

# Database
cd apps/api && npx prisma db push    # Apply schema changes
cd apps/api && npx prisma db seed    # Seed demo data
cd apps/api && npx prisma studio     # Visual DB browser

# Tests
cd apps/api && npm test              # Run Jest tests
```
