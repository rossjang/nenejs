# Documentation Search

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `docs` `feature`
- **Depends on**: `02-docs-content.md`

## Description

문서 검색 기능 구현 (Cmd+K)

## Tasks

- [ ] Pagefind 설치 및 설정
- [ ] `src/components/docs/docs-search.tsx` 생성
- [ ] Command+K 단축키 지원
- [ ] 검색 결과 UI 구현
- [ ] Header에 검색 버튼 추가

## Install

```bash
npm install -D pagefind
```

## Setup

**`package.json`**

```json
{
  "scripts": {
    "postbuild": "npx pagefind --site .next/server/app"
  }
}
```

## Code Example

**`src/components/docs/docs-search.tsx`**

```typescript
"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Cmd+K shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg 
                   bg-white/5 border border-white/10 text-slate-400"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search...</span>
        <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-white/10 rounded">⌘K</kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          {/* Search modal */}
        </div>
      )}
    </>
  );
}
```

## Acceptance Criteria

- [ ] Cmd+K로 검색 모달 열림
- [ ] 검색 결과 표시됨
- [ ] 검색 결과 클릭 시 해당 문서로 이동
- [ ] ESC로 모달 닫힘
