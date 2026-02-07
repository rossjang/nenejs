# Implementation Plan

Kanban board for nene.js website implementation.

---

## Project Vision & Roadmap

### Business Model

```
Phase 1: Open Source        Phase 2: Cloud Platform       Phase 3: Enterprise
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Current]                   [After user acquisition]     [Scale-up]

• nene.js open source       • nene Cloud launch          • Enterprise plan
• Documentation site       • Web deploy (like Vercel)    • Dedicated support
• Community building       • Premium features            • SLA guarantee
• Waitlist email collection • Paid plans                  • On-premise option
```

### Phase 1: Open Source Foundation (Current)

**Goal**: Build developer community with open source framework

| Item        | Description                              |
| ----------- | ---------------------------------------- |
| Core value  | Free, open source, community-centric      |
| Revenue     | None (investment stage)                  |
| KPI         | GitHub Stars, NPM Downloads, Waitlist signups |

**Priority work:**

- ✅ Landing page
- ✅ Documentation site UI
- 📋 Documentation content writing
- 📋 Waitlist email collection
- 📋 GitHub repo public release

### Phase 2: Cloud Platform (After user acquisition)

**Goal**: Platform to deploy nene.js apps on the web easily, like Vercel

| Item        | Description                                   |
| ----------- | --------------------------------------------- |
| Core value  | One-click deploy, auto scaling, monitoring    |
| Revenue     | Freemium (free + Pro/Team paid)                |
| KPI         | MAU, deployment count, paid conversion rate   |

**Planned features:**

- nene Cloud Dashboard
- GitHub integration auto deploy
- Custom domain
- Environment variable management
- Logs/monitoring
- Team collaboration

### Phase 3: Enterprise (Scale-up)

**Goal**: Enterprise solution for large organizations

| Item        | Description                          |
| ----------- | ------------------------------------- |
| Core value  | Security, compliance, dedicated support |
| Revenue     | Enterprise license                    |
| KPI         | ARR, customer count                   |

---

## Structure

```
docs/plan/
├── TODO/       # To do
├── DOING/      # In progress
└── DONE/       # Done
```

## Current Status

| Status   | Count |
| -------- | ----- |
| ✅ DONE  | 15    |
| 🔄 DOING | 0     |
| 📋 TODO  | 7     |

## Priority Order (Phase 1)

### Phase 1 Critical - Validation & Launch

> Essential for open source release and initial user acquisition

1. `12-header-buttons.md` - **Waitlist email collection** ⭐
2. ~~`13-create-nene-package.md` - **create-nene NPM package release**~~ ✅
3. ~~`14-github-repository.md` - **GitHub repository creation**~~ ✅
4. `01-mdx-system.md` - MDX system setup
5. `02-docs-content.md` - Documentation content writing
6. `11-deployment.md` - Site deployment

### Phase 1 Important - Polish

> Improve user experience

7. `03-docs-search.md` - Documentation search
8. `08-seo-optimization.md` - SEO optimization
9. `10-analytics.md` - Analytics (user behavior tracking)

### Phase 1 Nice-to-have

> Nice to have but not required for launch

10. `05-blog-system.md` - Blog system
11. `06-showcase-system.md` - Showcase system
12. `07-i18n-content.md` - i18n content
13. `09-performance.md` - Performance optimization

### Phase 2 Deferred - Later development

> Implement in Cloud Platform phase after user acquisition

14. `04-auth-backend.md` - Auth backend (for Cloud login)

## How to Use

### When starting a task

```bash
# Move file from TODO to DOING
mv docs/plan/TODO/01-mdx-system.md docs/plan/DOING/
```

### When completing a task

```bash
# Move file from DOING to DONE
mv docs/plan/DOING/01-mdx-system.md docs/plan/DONE/
```

### Task file structure

```markdown
# Task title

- **Status**: 📋 Todo / 🔄 Doing / ✅ Done
- **Priority**: 🔥 High / 🟠 Medium / 🔵 Low
- **Labels**: `tag1` `tag2`
- **Depends on**: (when there are dependencies)

## Description

Task description

## Tasks

- [ ] Checklist

## Install

Install commands

## Code Example

Code example

## Acceptance Criteria

Completion criteria
```

## Labels

| Label            | Description        |
| ---------------- | ------------------ |
| `infrastructure` | Infrastructure/setup |
| `ui`             | UI components      |
| `backend`        | Backend logic      |
| `content`        | Content writing    |
| `feature`        | New feature        |
| `docs`           | Documentation      |
| `blog`           | Blog               |
| `auth`           | Authentication     |
| `showcase`       | Showcase           |
| `i18n`           | Internationalization |
| `seo`            | Search optimization |
| `performance`    | Performance        |
| `analytics`      | Analytics          |
| `launch`         | Launch preparation |
| `deploy`         | Deployment         |
| `waitlist`       | Email/Waitlist     |
| `validation`     | Validation phase   |
| `phase-1`        | Phase 1 (OSS)      |
| `phase-2`        | Phase 2 (Cloud)    |
| `phase-3`        | Phase 3 (Enterprise) |
