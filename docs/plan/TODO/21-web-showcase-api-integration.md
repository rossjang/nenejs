# Web — Showcase Mock Data → API Integration

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `ui` `showcase`
- **Depends on**: `18-showcase-api-module.md`

## Description

프론트엔드 쇼케이스 컴포넌트에서 하드코딩/mock 데이터를 제거하고 백엔드 API를 호출하도록 변경한다.

## Current State (Mock Data 위치)

| 파일 | 문제 |
|------|------|
| `apps/web/data/showcase.json` | 2개 플레이스홀더 프로젝트 (빈 image 필드) |
| `apps/web/src/components/landing/showcase.tsx` (lines 10-21) | `showcaseItems` 배열 2개 하드코딩 (gradient 배경) |
| `apps/web/src/components/showcase/showcase-filters.tsx` (lines 10-16) | 하드코딩 카테고리 배열 |

## Tasks

- [ ] API 클라이언트 함수 작성 (`apps/web/src/lib/api/showcase.ts`)
  - [ ] `fetchShowcaseProjects(params?)` — 프로젝트 목록
  - [ ] `fetchShowcaseProject(slug)` — 프로젝트 상세
  - [ ] `fetchShowcaseCategories()` — 카테고리 목록
- [ ] Showcase 페이지 수정
  - [ ] `showcase.json` 의존 → API fetch로 교체
  - [ ] `apps/web/src/lib/showcase.ts`의 함수들을 API 호출로 변경
- [ ] Landing 페이지 Showcase 섹션 수정
  - [ ] `landing/showcase.tsx`의 `showcaseItems` 하드코딩 → API에서 featured 프로젝트 fetch
  - [ ] gradient 플레이스홀더 → 실제 프로젝트 이미지
- [ ] Showcase 필터 수정
  - [ ] `showcase-filters.tsx`의 하드코딩 카테고리 → API에서 동적 로드
- [ ] 사용하지 않는 `data/showcase.json` 정리/삭제

## Files to Modify

```
apps/web/
├── src/lib/
│   ├── api/showcase.ts        # NEW: API client functions
│   └── showcase.ts            # MODIFY: JSON 읽기 → API 호출
├── src/components/
│   ├── landing/showcase.tsx   # MODIFY: 하드코딩 → API fetch
│   └── showcase/
│       └── showcase-filters.tsx  # MODIFY: 하드코딩 → dynamic
└── data/
    └── showcase.json          # DELETE: 더 이상 불필요
```

## Acceptance Criteria

- [ ] Showcase 페이지가 API에서 받은 프로젝트를 표시
- [ ] Landing 페이지 Showcase 섹션이 featured 프로젝트를 API에서 가져옴
- [ ] 카테고리 필터가 API에서 받은 카테고리로 동작
- [ ] `data/showcase.json`이 더 이상 사용되지 않음
- [ ] API 서버 꺼져 있을 때 적절한 에러/로딩 상태 표시
