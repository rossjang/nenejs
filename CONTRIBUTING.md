# Contributing to nene.js

Thank you for your interest in contributing to nene.js! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/rossjang/nenejs/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Your environment (OS, Node.js version, etc.)

### Suggesting Features

1. Check existing issues for similar suggestions
2. Create a new issue with the `enhancement` label
3. Describe the feature and its use case

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting
5. Commit with a clear message
6. Push to your fork
7. Open a Pull Request

## Development Setup

This project uses [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/) for monorepo management.

```bash
# Clone the repository
git clone https://github.com/rossjang/nenejs.git
cd nenejs

# Install dependencies
pnpm install

# Build shared package first
pnpm build:shared

# Run development server (all apps)
pnpm dev
```

### Working on specific packages

```bash
# Run only the frontend (Next.js)
pnpm dev:web

# Run only the backend (NestJS)
pnpm dev:api

# Build shared package
cd packages/shared && pnpm build

# Build create-nene CLI
cd packages/create-nene && pnpm build
```

## Project Structure

```
nenejs/
├── apps/
│   ├── web/              # Next.js frontend (port 3000)
│   │   └── src/
│   │       ├── app/          # Next.js pages
│   │       ├── components/   # React components
│   │       └── lib/          # Utilities
│   └── api/              # NestJS backend (port 4000)
│       └── src/
│           ├── config/       # Configuration
│           └── health/       # Health module
├── packages/
│   ├── shared/           # Shared types, DTOs, constants
│   │   └── src/
│   │       ├── types/        # TypeScript interfaces
│   │       ├── dto/          # Data Transfer Objects
│   │       ├── constants/    # API routes, constants
│   │       └── utils/        # Utility functions
│   └── create-nene/      # CLI scaffolding tool
│       ├── src/              # CLI source code
│       └── templates/        # Project templates
├── docs/                 # Project documentation
│   ├── ARCHITECTURE.md   # Architecture overview
│   ├── API.md            # API reference
│   └── PROGRESS.md       # Development progress
├── turbo.json            # Turborepo configuration
└── pnpm-workspace.yaml   # Workspace configuration
```

## Key Development Notes

### Shared Package

The `@nene/shared` package must be built before running the apps:

```bash
pnpm build:shared
```

Changes to shared package require rebuilding for other packages to see updates.

### Adding New API Endpoints

1. Create controller in `apps/api/src/`
2. Create module and register in `app.module.ts`
3. Add types/DTOs in `packages/shared/src/`
4. Update `docs/API.md` with endpoint documentation
5. Update `docs/PROGRESS.md` if completing a planned feature

### Documentation

- Update `docs/ARCHITECTURE.md` for structural changes
- Update `docs/API.md` for new API endpoints
- Update `docs/PROGRESS.md` to track completed/in-progress items

## Commit Message Guidelines

Use clear, descriptive commit messages:

- `feat: add new feature`
- `fix: resolve bug in component`
- `docs: update documentation`
- `refactor: improve code structure`
- `test: add tests`
- `chore: update dependencies`

## Questions?

Feel free to open an issue or reach out to the maintainers.

Thank you for contributing!
