# Cleanup — Duplicate Constants & Category Mappings

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `ui` `infrastructure`

## Summary

여러 컴포넌트에 중복 정의된 카테고리 색상/라벨/그라디언트를 단일 소스 파일로 통합.

## What Was Done

### Showcase 상수
- `apps/web/src/lib/constants/showcase.ts` — 신규 생성, `SHOWCASE_CATEGORY_COLORS`, `SHOWCASE_CATEGORY_LABELS`, `SHOWCASE_CATEGORY_GRADIENTS` 통합
- `apps/web/src/components/showcase/showcase-card.tsx` — 인라인 상수 제거, shared constants import
- `apps/web/src/components/showcase/showcase-detail.tsx` — 인라인 상수 제거, shared constants import

### Blog 상수
- `apps/web/src/lib/constants/blog.ts` — 신규 생성, `BLOG_CATEGORY_COLORS`, `BLOG_CATEGORY_LABELS` 통합
- `apps/web/src/components/blog/types.ts` — 상수 정의 제거, re-export로 교체 (하위 호환성 유지)

## Implementation Decisions & Alternatives

### Decision 1: 상수 위치
- **선택**: `apps/web/src/lib/constants/` — 프론트엔드 전용 UI 상수
- **대안 A**: `@nene/shared` — 백엔드에서도 동일 색상을 사용할 경우 (이메일 템플릿 등)
- **대안 B**: CSS 변수 — 런타임 테마 전환에 유리하나 JS 로직에서 사용 어려움
- **대안 C**: Tailwind config — 빌드 타임 통합, 하지만 동적 값에 부적합

### Decision 2: 하위 호환성
- **선택**: `types.ts`에서 re-export (`BLOG_CATEGORY_COLORS as CATEGORY_COLORS`) — 기존 import 경로 유지
- **대안 A**: 모든 import 경로를 직접 변경 — 더 깔끔하나 변경 범위가 넓음
- **대안 B**: barrel export (`constants/index.ts`) — 한 곳에서 모든 상수 re-export
