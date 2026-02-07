# MDX System Setup

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `docs` `blog`

## Description

Setup MDX content system for Documentation and Blog

## Tasks

- [ ] Install packages
- [ ] Create `src/lib/mdx.ts` utility
- [ ] Create MDX custom components
  - [ ] `Callout` (info/warning/error box)
  - [ ] `CodeBlock` (tabs, copy button)
  - [ ] `Tabs` (tab content)
  - [ ] `Steps` (step-by-step guide)
- [ ] Create `content/docs/` folder structure
- [ ] Create `content/blog/` folder structure

## Install

```bash
npm install next-mdx-remote gray-matter shiki rehype-slug rehype-autolink-headings remark-gfm reading-time
```

## Files to Create

```
src/
├── lib/
│   └── mdx.ts
└── components/
    └── mdx/
        ├── index.ts
        ├── callout.tsx
        ├── code-block.tsx
        ├── tabs.tsx
        └── steps.tsx

content/
├── docs/
│   └── en/
│       └── getting-started/
└── blog/
```

## Code Example

**`src/lib/mdx.ts`**

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const DOCS_PATH = path.join(process.cwd(), "content/docs");

export async function getDocBySlug(locale: string, slug: string[]) {
  const filePath = path.join(DOCS_PATH, locale, ...slug) + ".mdx";
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  return { content: compiledContent, frontmatter: data };
}
```

**`src/components/mdx/callout.tsx`**

```typescript
interface CalloutProps {
  type: "info" | "warning" | "error" | "tip";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    info: "border-blue-500 bg-blue-500/10",
    warning: "border-yellow-500 bg-yellow-500/10",
    error: "border-red-500 bg-red-500/10",
    tip: "border-green-500 bg-green-500/10",
  };

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${styles[type]}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-slate-400">{children}</div>
    </div>
  );
}
```

## Acceptance Criteria

- [ ] MDX files render correctly
- [ ] Code highlighting works
- [ ] Custom components work (Callout, Tabs, etc.)
- [ ] Frontmatter is parsed
