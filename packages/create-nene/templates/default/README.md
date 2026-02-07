# My Nene App

A full-stack monorepo with Next.js frontend and NestJS backend.

## Project Structure

```
├── apps/
│   ├── web/          # Next.js frontend (port 3000)
│   └── api/          # NestJS backend (port 4000)
├── packages/
│   └── shared/       # Shared types, DTOs, utilities
└── docs/             # Project documentation
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
