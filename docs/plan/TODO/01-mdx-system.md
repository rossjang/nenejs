# MDX System 설정

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `docs` `blog`

## Description

Documentation과 Blog에서 사용할 MDX 콘텐츠 시스템 설정

## Tasks

- [ ] 패키지 설치
- [ ] `src/lib/mdx.ts` 유틸리티 함수 생성
- [ ] MDX 커스텀 컴포넌트 생성
  - [ ] `Callout` (info/warning/error 박스)
  - [ ] `CodeBlock` (탭, 복사 기능)
  - [ ] `Tabs` (탭 컨텐츠)
  - [ ] `Steps` (단계별 가이드)
- [ ] `content/docs/` 폴더 구조 생성
- [ ] `content/blog/` 폴더 구조 생성

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

- [ ] MDX 파일이 정상 렌더링됨
- [ ] 코드 하이라이팅 작동
- [ ] 커스텀 컴포넌트 작동 (Callout, Tabs 등)
- [ ] Frontmatter 파싱됨
