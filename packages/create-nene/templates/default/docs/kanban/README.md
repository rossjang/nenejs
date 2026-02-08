# Kanban Board

Task management board for this project.

---

## Status

| Status | Count |
| ------ | ----- |
| TODO   | 6     |
| DOING  | 0     |
| DONE   | 2     |

## How It Works

Tasks are managed as markdown files in three folders:

```
docs/kanban/
├── TODO/    # Tasks to be done
├── DOING/   # Tasks in progress
└── DONE/    # Completed tasks
```

### Task File Format

Each task file should follow this format:

```markdown
# Task Title

- **Status**: TODO / DOING / DONE
- **Priority**: High / Medium / Low
- **Created**: YYYY-MM-DD

## Description

What needs to be done.

## Checklist

- [ ] Step 1
- [ ] Step 2

## Notes

Any relevant context or references.
```

### Workflow

1. Create a new `.md` file in `TODO/`
2. When starting work, move it to `DOING/`
3. When finished, move it to `DONE/` and check off all items
4. Update the counts in this README

## Priority Order

1. `TODO/01-define-project.md` - Define what this project is about
2. `TODO/02-define-tech-stack.md` - Finalize tech stack & configuration
3. `TODO/03-define-data-models.md` - Design database schema & types
4. `TODO/04-build-first-feature.md` - Build first full-stack feature
5. `TODO/05-setup-auth.md` - Add authentication
6. `TODO/06-customize-frontend.md` - Customize UI & branding
