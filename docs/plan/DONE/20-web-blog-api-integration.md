# Web — Blog Mock Data → API Integration

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `ui` `blog`

## Summary

프론트엔드 블로그의 하드코딩/mock 데이터를 제거하고 백엔드 API 호출로 전환. Server Component + Client Component 패턴 적용.

## What Was Done

- `apps/web/src/components/blog/data.ts` — mock 배열 제거 → `fetchBlogPosts()`, `getPostBySlug()`, `getFeaturedPost()` async API 함수로 교체
- `apps/web/src/components/blog/blog-content.tsx` — 새 Client Component, 카테고리 필터링 + 동적 상태 관리
- `apps/web/src/app/blog/page.tsx` — `"use client"` 제거 → async Server Component로 전환, 데이터를 BlogContent에 props 전달
- `apps/web/src/app/blog/[slug]/page.tsx` — `generateStaticParams`, 데이터 호출 모두 async API 함수 사용
- `apps/web/src/components/blog/post-content.tsx` — Lorem ipsum 제거 → `renderMarkdown()` 함수로 실제 콘텐츠 렌더링 (headings, code blocks, lists, bold)
- `apps/web/src/components/blog/index.ts` — barrel export 업데이트

## Implementation Decisions & Alternatives

### Decision 1: 데이터 페칭 아키텍처
- **선택**: Server Component에서 fetch → Client Component에 props 전달 (ISR, revalidate: 60)
- **대안 A**: 클라이언트 사이드 fetch (SWR/React Query) — 실시간 업데이트에 유리하나 초기 로딩 느림
- **대안 B**: Next.js API Routes 프록시 — CORS 문제 회피, 하지만 불필요한 hop 추가
- **대안 C**: 완전한 SSG (getStaticProps) — 가장 빠르나 데이터 업데이트 시 재빌드 필요

### Decision 2: Markdown 렌더링
- **선택**: 커스텀 `renderMarkdown()` 함수 (headings, code blocks, lists, bold)
- **대안 A**: `next-mdx-remote` — 풍부한 MDX 기능, 커스텀 컴포넌트 지원. 권장하나 의존성 추가
- **대안 B**: `react-markdown` + `remark-gfm` — 가볍고 확장 가능
- **대안 C**: `@mdx-js/mdx` 직접 사용 — 더 저수준 제어 가능

### Decision 3: 에러 처리
- **선택**: API 실패 시 빈 배열 반환 (graceful degradation)
- **대안**: 에러 바운더리 + 재시도 UI — 사용자에게 더 명확하나 구현 복잡도 증가
