import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // --- Authors ---
  const johndoe = await prisma.author.upsert({
    where: { id: 'author-johndoe' },
    update: {},
    create: {
      id: 'author-johndoe',
      name: 'John Doe',
      role: 'Core Team Lead',
      twitter: 'johndoe',
      github: 'johndoe',
    },
  });

  const janesmith = await prisma.author.upsert({
    where: { id: 'author-janesmith' },
    update: {},
    create: {
      id: 'author-janesmith',
      name: 'Jane Smith',
      role: 'Developer Advocate',
      twitter: 'janesmith',
      github: 'janesmith',
    },
  });

  const alexchen = await prisma.author.upsert({
    where: { id: 'author-alexchen' },
    update: {},
    create: {
      id: 'author-alexchen',
      name: 'Alex Chen',
      role: 'Software Engineer',
      twitter: 'alexchen',
      github: 'alexchen',
    },
  });

  console.log(`  Authors: ${johndoe.name}, ${janesmith.name}, ${alexchen.name}`);

  // --- Blog Posts ---
  const posts = [
    {
      id: 'post-1',
      slug: 'introducing-nene-js',
      title: 'Introducing nene.js 1.0',
      excerpt:
        'Today we\'re excited to announce the public release of nene.js, the full-stack framework that merges Next.js and NestJS in one monorepo with shared types and auto-generated hooks.',
      content: `# Introducing nene.js 1.0

Today we're excited to announce the public release of **nene.js**, the full-stack framework that merges Next.js and NestJS in one monorepo with shared types and auto-generated hooks.

## Why nene.js?

Modern full-stack development requires managing two separate projects — a frontend and a backend — with duplicated types, manual API wiring, and constant context switching. nene.js eliminates all of that.

## Key Features

- **Unified Monorepo**: Frontend (Next.js 16) and backend (NestJS 11) in one repo
- **Shared Types**: TypeScript interfaces shared via \`@nene/shared\`
- **Auto-Generated Hooks**: Write controllers once, get React hooks automatically
- **AI-Native**: Built-in context files for Cursor, Copilot, Claude Code, and Codex

## Getting Started

\`\`\`bash
npm create nene@latest my-app
cd my-app
npm run dev
\`\`\`

That's it. Your full-stack app is running with frontend on port 3000 and backend on port 4000.

## What's Next

We're working on cloud deployment, WebSocket support, and more. Stay tuned!`,
      category: 'announcement',
      tags: JSON.stringify(['release', 'nene.js', '1.0']),
      readingTime: 5,
      featured: true,
      published: true,
      publishedAt: new Date('2026-01-15'),
      authorId: johndoe.id,
    },
    {
      id: 'post-2',
      slug: 'getting-started-tutorial',
      title: 'Getting Started with nene.js',
      excerpt:
        'Learn how to build your first nene.js app in 10 minutes. We\'ll cover project setup, creating your first API route, and deploying to production.',
      content: `# Getting Started with nene.js

In this tutorial, you'll build your first nene.js application from scratch in about 10 minutes.

## Prerequisites

- Node.js 20+
- pnpm 10+

## Step 1: Create a New Project

\`\`\`bash
npm create nene@latest my-app
cd my-app
pnpm install
\`\`\`

## Step 2: Start Development

\`\`\`bash
pnpm dev
\`\`\`

This starts both the Next.js frontend (port 3000) and NestJS backend (port 4000).

## Step 3: Create an API Endpoint

Create a new controller in \`apps/api/src/\`:

\`\`\`typescript
@Controller('api/todos')
export class TodosController {
  @Get()
  findAll() {
    return [{ id: 1, title: 'Learn nene.js', done: false }];
  }
}
\`\`\`

## Step 4: Use It in the Frontend

\`\`\`typescript
const res = await fetch('http://localhost:4000/api/todos');
const todos = await res.json();
\`\`\`

## Next Steps

- Read the [Architecture Guide](/docs/architecture)
- Explore [Auto-Generated Hooks](/blog/auto-generated-hooks-deep-dive)`,
      category: 'tutorial',
      tags: JSON.stringify(['tutorial', 'beginner', 'getting-started']),
      readingTime: 10,
      featured: false,
      published: true,
      publishedAt: new Date('2026-01-10'),
      authorId: janesmith.id,
    },
    {
      id: 'post-3',
      slug: 'auto-generated-hooks-deep-dive',
      title: 'Deep Dive: Auto-Generated Hooks in nene.js',
      excerpt:
        'How nene.js generates type-safe React hooks from your NestJS controllers. Write your API once, use useGetUsers() and useCreateUser() on the frontend with no fetch boilerplate.',
      content: `# Deep Dive: Auto-Generated Hooks

One of the most powerful features of nene.js is automatic hook generation. Let's explore how it works.

## The Problem

Traditional full-stack apps require you to:
1. Define API endpoints in the backend
2. Write fetch calls in the frontend
3. Manually keep types in sync

## The nene.js Solution

Define a controller once:

\`\`\`typescript
@Controller('api/users')
export class UsersController {
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }
}
\`\`\`

nene.js generates type-safe hooks automatically:

\`\`\`typescript
// Auto-generated — do not edit
import { useGetUsers } from '@/hooks';
import { useCreateUser } from '@/hooks';

const { data: users } = useGetUsers();
const { mutate: createUser } = useCreateUser();
\`\`\`

## How It Works

The code generator scans NestJS controllers, extracts route metadata and TypeScript types, then generates React Query hooks with full type safety.`,
      category: 'engineering',
      tags: JSON.stringify(['hooks', 'codegen', 'types']),
      readingTime: 15,
      featured: false,
      published: true,
      publishedAt: new Date('2026-01-08'),
      authorId: alexchen.id,
    },
    {
      id: 'post-4',
      slug: 'building-real-time-features',
      title: 'Building Real-time Features with nene.js',
      excerpt:
        'Learn how to implement real-time functionality in your nene.js applications using WebSockets and Server-Sent Events with a shared API layer.',
      content: `# Building Real-time Features with nene.js

Real-time features like live notifications, chat, and collaborative editing are essential for modern apps. nene.js makes this straightforward.

## WebSocket Support

nene.js leverages NestJS's built-in WebSocket gateway:

\`\`\`typescript
@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: ChatMessage): ChatMessage {
    return { ...data, timestamp: new Date() };
  }
}
\`\`\`

## Server-Sent Events

For one-way real-time streams:

\`\`\`typescript
@Controller('api/events')
export class EventsController {
  @Sse('stream')
  stream(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map(() => ({ data: { timestamp: Date.now() } })),
    );
  }
}
\`\`\`

## Frontend Integration

Use the auto-generated hooks with real-time subscriptions for a seamless developer experience.`,
      category: 'tutorial',
      tags: JSON.stringify(['real-time', 'websockets', 'sse']),
      readingTime: 12,
      featured: false,
      published: true,
      publishedAt: new Date('2026-01-05'),
      authorId: janesmith.id,
    },
    {
      id: 'post-5',
      slug: 'community-showcase-january',
      title: 'Community Showcase: January 2026',
      excerpt:
        "Check out the projects our community has built with nene.js this month — dashboards, tools, and full-stack apps using shared types and auto-generated hooks.",
      content: `# Community Showcase: January 2026

Every month we highlight the best projects built with nene.js. Here are January's picks!

## Featured Projects

### 1. nene.js Documentation Site
Our own docs site, built with nene.js. Next.js frontend, NestJS API, shared types throughout.

### 2. Community Dashboard
A real-time analytics dashboard built by the community, showcasing WebSocket integration.

## Submit Your Project

Built something with nene.js? We'd love to feature it! Submit your project through our showcase page.

## Community Stats

- **50+** projects submitted
- **200+** GitHub stars
- **1,000+** npm downloads

Keep building, and we'll see you next month!`,
      category: 'community',
      tags: JSON.stringify(['community', 'showcase', 'projects']),
      readingTime: 8,
      featured: false,
      published: true,
      publishedAt: new Date('2026-01-02'),
      authorId: johndoe.id,
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { id: post.id },
      update: {},
      create: post,
    });
  }
  console.log(`  Blog posts: ${posts.length} seeded`);

  // --- Showcase Projects ---
  const showcaseProjects = [
    {
      id: 'showcase-1',
      slug: 'nenejs-docs',
      name: 'nene.js Documentation',
      description:
        'This documentation and marketing site — built with nene.js. Next.js frontend, NestJS API, shared types.',
      category: 'devtools',
      tags: JSON.stringify(['Docs', 'Next.js', 'NestJS']),
      url: 'https://nenejs.com',
      github: 'https://github.com/rossjang/nenejs',
      featured: true,
      approved: true,
    },
    {
      id: 'showcase-2',
      slug: 'your-project',
      name: 'Your Project',
      description:
        'Submit your nene.js project to be featured here. Join the community.',
      category: 'opensource',
      tags: JSON.stringify(['Community', 'Showcase']),
      url: '#',
      featured: true,
      approved: true,
    },
  ];

  for (const project of showcaseProjects) {
    await prisma.showcaseProject.upsert({
      where: { id: project.id },
      update: {},
      create: project,
    });
  }
  console.log(`  Showcase projects: ${showcaseProjects.length} seeded`);

  // --- Features ---
  const features = [
    {
      id: 'feature-1',
      title: 'Next + Nest, Unified',
      description:
        'Manage frontend and backend in one monorepo. Develop without context switching, from a single repo to a single deploy.',
      bullets: JSON.stringify([
        'Frontend and backend in one monorepo',
        'Develop without context switching',
        'Single repo, single deploy',
      ]),
      codeExample: `// apps/api/src/users/users.controller.ts
@Controller('/api/users')
export class UsersController {
  @Get('/')
  async getUsers() {
    return this.usersService.findAll();
  }
}

// apps/web - use auto-generated hook
import { useGetUsers } from '@/hooks';

export default function UsersPage() {
  const { data } = useGetUsers();
  return <UserList users={data?.users} />;
}`,
      codeFilename: 'users.controller.ts → @/hooks',
      accentColor: '#0070f3',
      reversed: false,
      order: 0,
    },
    {
      id: 'feature-2',
      title: 'AI-Agnostic',
      description:
        'Works with Cursor, GitHub Copilot, Claude Code, and OpenAI Codex out of the box. One universal context file powers every AI coding assistant.',
      bullets: JSON.stringify([
        'AI_CONTEXT.md - single source of truth for all agents',
        'Built-in rules for Cursor, Copilot, Claude Code, and Codex',
        'Shared types reduce ambiguity for AI agents',
      ]),
      codeExample: `// Every nene.js project includes:
// AI_CONTEXT.md    → Universal context (SSOT)
// .cursor/rules/   → Cursor AI rules
// .github/         → GitHub Copilot instructions
// CLAUDE.md        → Claude Code rules
// AGENTS.md        → OpenAI Codex rules

// Plus structured docs AI agents read:
// docs/ARCHITECTURE.md, docs/API.md`,
      codeFilename: 'AI Agent Integration',
      accentColor: '#e0234e',
      reversed: true,
      order: 1,
    },
    {
      id: 'feature-3',
      title: 'Auto-Generated Hooks',
      description:
        'Remove fetch() boilerplate. Define controllers once and get type-safe React hooks. Call your API like local functions.',
      bullets: JSON.stringify([
        'No fetch() boilerplate',
        'Use backend via auto-generated hooks',
        'Type-safe API calls',
      ]),
      codeExample: `// Before (traditional)
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message }),
});
const data = await res.json();

// After (nene.js - auto-generated hook)
import { useSendMessage } from '@/hooks';
const { mutate } = useSendMessage();
mutate({ message });`,
      codeFilename: 'comparison.tsx',
      accentColor: '#0070f3',
      reversed: false,
      order: 2,
    },
    {
      id: 'feature-4',
      title: 'End-to-End Type Safety',
      description:
        'Types are shared between frontend and backend via @nene/shared. Catch errors at compile time and get full IDE autocomplete.',
      bullets: JSON.stringify([
        'Frontend-backend types in @nene/shared',
        'Compile-time error detection',
        'Full IDE autocomplete',
      ]),
      codeExample: `// packages/shared/src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// apps/api - same type
// apps/web - same type, useGetUser() returns User`,
      codeFilename: 'packages/shared',
      accentColor: '#e0234e',
      reversed: true,
      order: 3,
    },
  ];

  for (const feature of features) {
    await prisma.feature.upsert({
      where: { id: feature.id },
      update: {},
      create: feature,
    });
  }
  console.log(`  Features: ${features.length} seeded`);

  // --- Comparison Rows ---
  const comparisonRows = [
    { id: 'cmp-1', feature: 'Setup time', neneValue: '5 min', othersValue: '2hr+', hasNeneCheck: false, hasOthersCheck: false, order: 0 },
    { id: 'cmp-2', feature: 'Type sharing', neneValue: 'Automatic', othersValue: 'Manual setup', hasNeneCheck: false, hasOthersCheck: false, order: 1 },
    { id: 'cmp-3', feature: 'API boilerplate', neneValue: 'None', othersValue: 'fetch/axios required', hasNeneCheck: false, hasOthersCheck: false, order: 2 },
    { id: 'cmp-4', feature: 'Front/back integration', neneValue: '', othersValue: '', hasNeneCheck: true, hasOthersCheck: false, order: 3 },
    { id: 'cmp-5', feature: 'AI-friendly docs', neneValue: 'Built-in structure', othersValue: 'Ad-hoc', hasNeneCheck: false, hasOthersCheck: false, order: 4 },
    { id: 'cmp-6', feature: 'Single deploy', neneValue: '', othersValue: '', hasNeneCheck: true, hasOthersCheck: false, order: 5 },
    { id: 'cmp-7', feature: 'Context switching', neneValue: 'Minimal', othersValue: 'Frequent', hasNeneCheck: false, hasOthersCheck: false, order: 6 },
    { id: 'cmp-8', feature: 'Documentation structure', neneValue: 'Optimized for agents', othersValue: 'Limited', hasNeneCheck: false, hasOthersCheck: false, order: 7 },
  ];

  for (const row of comparisonRows) {
    await prisma.comparisonRow.upsert({
      where: { id: row.id },
      update: {},
      create: row,
    });
  }
  console.log(`  Comparison rows: ${comparisonRows.length} seeded`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
