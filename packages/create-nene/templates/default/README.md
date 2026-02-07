# My Nene App

A full-stack monorepo with Next.js frontend and NestJS backend.

## Project Structure

```
├── apps/
│   ├── web/          # Next.js frontend (port 3000)
│   └── api/          # NestJS backend (port 4000)
├── packages/
│   └── shared/       # Shared types, DTOs, utilities
├── docs/             # Project documentation
├── AI_CONTEXT.md     # Universal AI context (single source of truth)
├── .cursor/rules/    # Cursor AI agent rules
├── .github/          # GitHub Copilot instructions
├── CLAUDE.md         # Claude Code agent rules
└── AGENTS.md         # OpenAI Codex agent rules
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Development

Run both frontend and backend:

```bash
pnpm dev
```

Run only frontend:

```bash
pnpm dev:web
```

Run only backend:

```bash
pnpm dev:api
```

### Build

```bash
pnpm build
```

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: NestJS 11, class-validator
- **Shared**: TypeScript, shared types and DTOs
- **Tooling**: Turborepo, pnpm workspaces

## AI Agent Support

This project includes built-in configuration for AI coding assistants:

| Tool | Config File |
|------|------------|
| Any AI Agent | `AI_CONTEXT.md` (universal context) |
| Cursor | `.cursor/rules/*.mdc` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Claude Code | `CLAUDE.md` |
| OpenAI Codex | `AGENTS.md` |

`AI_CONTEXT.md` is the single source of truth. Tool-specific files are lightweight pointers that reference it.
