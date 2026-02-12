# Web — Blog Mock Data → API Integration

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `ui` `blog`
- **Depends on**: `17-blog-api-module.md`

## Description

프론트엔드 블로그 컴포넌트에서 하드코딩/mock 데이터를 제거하고 백엔드 API를 호출하도록 변경한다.

## Current State (Mock Data 위치)

| 파일 | 문제 |
|------|------|
| `apps/web/src/components/blog/data.ts` | `authors` 객체 (3명 가짜 저자), `samplePosts` 배열 (5개 가짜 글) |
| `apps/web/src/components/blog/post-content.tsx` | Lorem ipsum 플레이스홀더 본문, 하드코딩 코드 블록 |
| `apps/web/src/components/blog/category-filter.tsx` (lines 12-18) | 하드코딩 카테고리 배열 |

## Tasks

- [ ] API 클라이언트 함수 작성 (`apps/web/src/lib/api/blog.ts`)
  - [ ] `fetchBlogPosts(params?)` — 글 목록 fetch
  - [ ] `fetchBlogPost(slug)` — 글 상세 fetch
  - [ ] `fetchAuthors()` — 저자 목록 fetch
- [ ] 블로그 목록 페이지 수정
  - [ ] `data.ts`의 `samplePosts` → API fetch로 교체
  - [ ] Server Component에서 직접 fetch 또는 API route 사용
- [ ] 블로그 상세 페이지 수정
  - [ ] `post-content.tsx`의 Lorem ipsum → API에서 받은 실제 MDX 콘텐츠 렌더링
  - [ ] `next-mdx-remote`로 동적 MDX 렌더링
- [ ] 카테고리 필터 수정
  - [ ] `category-filter.tsx`의 하드코딩 배열 → API 데이터 또는 shared 상수 사용
- [ ] `data.ts`의 `authors` 객체 → API fetch로 교체
- [ ] 사용하지 않는 mock 데이터 파일 정리/삭제

## Files to Modify

```
apps/web/src/
├── lib/api/
│   └── blog.ts              # NEW: API client functions
├── components/blog/
│   ├── data.ts               # DELETE or REPLACE: mock data 제거
│   ├── post-content.tsx       # MODIFY: Lorem ipsum → API content
│   └── category-filter.tsx    # MODIFY: 하드코딩 → dynamic
└── app/blog/
    ├── page.tsx               # MODIFY: API fetch 사용
    └── [slug]/page.tsx        # MODIFY: API fetch 사용
```

## Acceptance Criteria

- [ ] 블로그 목록 페이지가 API에서 받은 데이터를 표시
- [ ] 블로그 상세 페이지가 실제 MDX 콘텐츠를 렌더링
- [ ] 카테고리 필터가 정상 동작
- [ ] `data.ts`의 mock 데이터가 더 이상 사용되지 않음
- [ ] API 서버 꺼져 있을 때 적절한 에러/로딩 상태 표시
