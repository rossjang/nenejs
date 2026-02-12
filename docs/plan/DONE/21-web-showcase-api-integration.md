# Web — Showcase Mock Data → API Integration

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `ui` `showcase`

## Summary

프론트엔드 쇼케이스의 JSON 파일/하드코딩 데이터를 백엔드 API 호출로 전환. 인터페이스 변경 (`title` → `name`) 포함.

## What Was Done

- `apps/web/src/lib/showcase.ts` — JSON import 제거 → async API fetch 함수로 전환 (`getShowcaseProjects()`, `getShowcaseCategories()`, `getFeaturedProjects()`)
- `apps/web/src/components/showcase/showcase-grid.tsx` — `projects: ShowcaseProject[]` props 방식으로 변경
- `apps/web/src/app/showcase/page.tsx` — async Server Component로 전환
- `apps/web/src/components/landing/showcase.tsx` — async Server Component + API fetch, 폴백 데이터 포함
- `apps/web/src/components/showcase/showcase-card.tsx` — `project.title` → `project.name`
- `apps/web/src/components/showcase/showcase-detail.tsx` — `project.title` → `project.name`

## Implementation Decisions & Alternatives

### Decision 1: 랜딩 페이지 쇼케이스 폴백
- **선택**: API 실패 시 하드코딩된 폴백 데이터 표시
- **대안 A**: 로딩 스켈레톤 + 재시도 — 동적이나 빈 화면 리스크
- **대안 B**: 빌드 타임에 데이터 embed — 항상 표시되나 데이터 업데이트에 재빌드 필요

### Decision 2: 필터링 위치
- **선택**: 클라이언트 사이드 필터링 (전체 데이터를 props로 받아서)
- **대안**: 서버 사이드 필터링 (API 쿼리 파라미터) — 대량 데이터에 유리하나 현재 소규모에 불필요

### Decision 3: 인터페이스 변경
- **선택**: `title` → `name`으로 일괄 변경 (DB 모델과 일치)
- **대안**: DB에 `title` 필드 사용 — 기존 코드 변경 없으나 관례적으로 `name`이 더 적절
