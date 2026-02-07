# Backend (NestJS) - Codex Rules

> See `AI_CONTEXT.md` in the project root for full project context.

## Backend-Specific Rules

- Follow the NestJS module pattern: `{feature}.module.ts`, `{feature}.controller.ts`, `{feature}.service.ts`.
- Use class-validator with shared DTOs from `@app/shared`.
- Use `@nestjs/config` for environment variables.
- Update `docs/API.md` when adding or modifying endpoints.
- Rebuild shared package after changes: `pnpm --filter @app/shared build`
