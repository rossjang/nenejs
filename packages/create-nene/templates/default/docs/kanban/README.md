# Kanban Board

Task management board for this project.

---

## Status

| Status | Count |
| ------ | ----- |
| TODO   | 1     |
| DOING  | 0     |
| DONE   | 1     |

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

1. `TODO/01-database-integration.md` - Database setup
