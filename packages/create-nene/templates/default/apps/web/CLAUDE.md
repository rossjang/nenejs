# Frontend (Next.js) - Claude Code Rules

> See `AI_CONTEXT.md` in the project root for full project context.

## Frontend-Specific Rules

- Default components are Server Components (no directive needed).
- Add `'use client'` at top for interactive components.
- Use Tailwind CSS for styling. Follow mobile-first responsive design.
- Import API routes from `@app/shared`: `import { API_ROUTES } from '@app/shared';`

## Post-Edit Verification (REQUIRED)

After every edit to `apps/web/**`, verify the app still works:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

## Troubleshooting

- `Cannot find module './NNN.js'`: Run `rm -rf apps/web/.next` then restart dev server.
- `Invalid hook call`: Add `'use client'` directive or restructure.
