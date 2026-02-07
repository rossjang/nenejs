# Architecture

This document describes the architecture of this project for AI agents and developers.

## Overview

This is a full-stack monorepo with:
- **Frontend**: Next.js 16 with React 19
- **Backend**: NestJS 11 with class-validator
- **Shared**: TypeScript types and constants

## Project Structure

```
├── apps/
│   ├── web/              # Next.js frontend
│   │   ├── src/app/      # App router pages
│   │   └── src/          # Components, hooks, utils
│   └── api/              # NestJS backend
│       └── src/          # Modules, controllers, services
├── packages/
│   └── shared/           # Shared types and constants
│       └── src/
│           ├── types/    # TypeScript interfaces
│           └── constants/# API routes, constants
├── docs/
│   ├── overview/         # Project overview & architecture
│   ├── kanban/           # Task management (TODO/DOING/DONE)
│   └── pages/            # Page-specific documentation
```

## Data Flow

```
[Browser] <--HTTP--> [Next.js :3000] <--HTTP--> [NestJS :4000] <---> [Database]
                            |                         |
                            +---- @app/shared --------+
                                (types, constants)
```

## Key Patterns

### API Communication
- Frontend calls backend via REST API
- Shared types ensure type safety across the stack
- API routes defined in `@app/shared/constants`

### Validation
- Backend uses class-validator for request validation
- DTOs can be shared between frontend and backend

### Configuration
- Backend uses @nestjs/config for environment management
- Frontend uses Next.js environment variables

## Ports

- Frontend (web): http://localhost:3000
- Backend (api): http://localhost:4000
