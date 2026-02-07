# nene.js

The AI-native full-stack framework for building modern web applications.

[![npm version](https://badge.fury.io/js/create-nene.svg)](https://www.npmjs.com/package/create-nene)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

nene.js is a **Next.js + NestJS monorepo** framework designed for AI-assisted development. It provides a unified project structure where AI agents can understand and work with the entire stack from a single repository.

## Quick Start

```bash
npx create-nene@latest my-app
cd my-app
pnpm dev
```

This creates a full-stack monorepo with:
- **Frontend**: Next.js 15 (port 3000)
- **Backend**: NestJS 11 (port 4000)
- **Shared**: TypeScript types and DTOs
- **Docs**: AI-friendly project documentation

## Features

- **Full-Stack Monorepo** - Next.js frontend + NestJS backend in one repo
- **Type-Safe** - Shared types between frontend and backend
- **AI-Native** - Documentation structure optimized for AI agents
- **NestJS Backend** - Full decorator support, validation, DI
- **Zero Config** - Sensible defaults that just work

## Project Structure

```
my-app/
├── apps/
│   ├── web/              # Next.js frontend (port 3000)
│   └── api/              # NestJS backend (port 4000)
├── packages/
│   └── shared/           # Shared types, DTOs, constants
├── docs/                 # AI-friendly documentation
│   ├── ARCHITECTURE.md   # Project architecture
│   ├── API.md            # API reference
│   └── PROGRESS.md       # Development progress
├── turbo.json
└── pnpm-workspace.yaml
```

## Example

### Backend (NestJS)

```typescript
// apps/api/src/users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '@my-app/shared';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return { users: [] };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return { id: '1', ...createUserDto };
  }
}
```

### Shared Types

```typescript
// packages/shared/src/dto/index.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
```

### Frontend (Next.js)

```typescript
// apps/web/src/app/page.tsx
import { User, API_ROUTES } from '@my-app/shared';

async function getUsers(): Promise<User[]> {
  const res = await fetch(`http://localhost:4000${API_ROUTES.USERS.BASE}`);
  return res.json();
}
```

## Development

This monorepo uses [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/).

```bash
# Install dependencies
pnpm install

# Run all apps in development
pnpm dev

# Run only frontend
pnpm dev:web

# Run only backend
pnpm dev:api

# Build all packages
pnpm build

# Build shared package first
pnpm build:shared
```

## Packages

| Package | Description |
|---------|-------------|
| [@nene/web](apps/web) | Next.js frontend & documentation site |
| [@nene/api](apps/api) | NestJS backend API |
| [@nene/shared](packages/shared) | Shared types, DTOs, and constants |
| [create-nene](packages/create-nene) | CLI to create new nene.js projects |

## For AI Agents

This project is designed for AI-assisted development:

1. **Check `docs/PROGRESS.md`** - Current development status
2. **Read `docs/ARCHITECTURE.md`** - Project structure and patterns
3. **See `docs/API.md`** - API endpoint reference
4. **Use shared types** - Don't duplicate type definitions

## Documentation

- [Architecture](docs/ARCHITECTURE.md) - Project structure and patterns
- [API Reference](docs/API.md) - Backend API documentation
- [Progress](docs/PROGRESS.md) - Development progress tracker

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.
