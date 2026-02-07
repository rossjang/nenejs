# create-nene

Create a new [nene.js](https://github.com/rossjang/nenejs) project with a single command.

## Usage

```bash
# npm
npm create nene@latest

# yarn
yarn create nene

# pnpm
pnpm create nene
```

### With project name

```bash
npm create nene@latest my-app
```

## Options

```
Usage: create-nene [project-name] [options]

Options:
  -V, --version  Output the version number
  -h, --help     Display help for command
```

During setup, you will be prompted to select a package manager (pnpm, npm, or yarn).

## What's Inside

A newly created project is a full-stack monorepo with the following structure:

```
my-app/
├── apps/
│   ├── web/              # Next.js 16 frontend (port 3000)
│   │   └── src/app/      # Pages and layouts
│   └── api/              # NestJS 11 backend (port 4000)
│       └── src/          # Controllers, modules, services
├── packages/
│   └── shared/           # Shared types, DTOs, constants
│       └── src/
│           ├── types/    # TypeScript types and DTOs
│           └── constants/ # Shared constants (API routes, etc.)
├── docs/                 # AI-friendly documentation
│   ├── API.md            # API endpoint reference
│   ├── overview/
│   │   └── ARCHITECTURE.md  # Project architecture
│   ├── kanban/           # Task management (TODO/DOING/DONE)
│   └── pages/            # Page documentation
├── scripts/
│   └── dev.sh            # Development server startup script
├── .cursor/
│   └── rules/            # Cursor AI agent rules
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── package.json
```

## License

MIT
