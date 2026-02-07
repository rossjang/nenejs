# Pages Documentation

This directory contains documentation for each page/feature in the application.

## How to Use

When adding a new page or feature, create a folder here with a `README.md` describing:

- **Purpose**: What the page does
- **Route**: The URL path (e.g., `/blog`, `/dashboard`)
- **Components**: Key components used
- **API Dependencies**: Which backend endpoints it calls
- **Data Flow**: How data moves through the page

## Example Structure

```
docs/pages/
├── blog/
│   └── README.md       # Blog page documentation
├── dashboard/
│   └── README.md       # Dashboard page documentation
└── auth/
    └── README.md       # Authentication pages documentation
```

## Template

Use this template when documenting a new page:

```markdown
# Page Name

## Overview
Brief description of the page.

## Route
`/route-path`

## Components
- `ComponentName` - Description
- `ComponentName` - Description

## API Endpoints Used
- `GET /api/resource` - Description
- `POST /api/resource` - Description

## Notes
Any additional context.
```
