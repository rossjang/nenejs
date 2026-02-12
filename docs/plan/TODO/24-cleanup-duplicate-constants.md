# Cleanup — Duplicate Constants & Category Mappings

- **Status**: 📋 Todo
- **Priority**: 🔵 Low
- **Labels**: `ui` `infrastructure`
- **Depends on**: `20-web-blog-api-integration.md`, `21-web-showcase-api-integration.md`

## Description

여러 컴포넌트에 중복 정의된 카테고리 색상, 라벨, 그라디언트 매핑을 하나의 공통 파일로 통합한다.

## Current State (중복 위치)

### Showcase 카테고리 — 2곳 중복

| 파일 | 중복 데이터 |
|------|------------|
| `apps/web/src/components/showcase/showcase-card.tsx` (lines 9-34) | `categoryColors`, `categoryGradients`, `categoryLabels` |
| `apps/web/src/components/showcase/showcase-detail.tsx` (lines 12-28) | `categoryColors`, `categoryGradients` (동일 매핑) |

### Blog 카테고리 — 분산 정의

| 파일 | 데이터 |
|------|-------|
| `apps/web/src/components/blog/types.ts` (lines 26-38) | `CATEGORY_COLORS`, `CATEGORY_LABELS` |
| `apps/web/src/components/blog/category-filter.tsx` (lines 12-18) | `categories` 배열 |

## Tasks

- [ ] Showcase 카테고리 상수 통합
  - [ ] `apps/web/src/lib/constants/showcase.ts` 생성
  - [ ] `categoryColors`, `categoryGradients`, `categoryLabels` 이동
  - [ ] `showcase-card.tsx`, `showcase-detail.tsx`에서 import로 교체
  - [ ] 기존 중복 코드 제거
- [ ] Blog 카테고리 상수 정리
  - [ ] `apps/web/src/lib/constants/blog.ts` 생성
  - [ ] `CATEGORY_COLORS`, `CATEGORY_LABELS`, `categories` 배열 통합
  - [ ] `types.ts`, `category-filter.tsx`에서 import로 교체
- [ ] (Optional) `@nene/shared`로 이동 검토
  - [ ] 백엔드에서도 사용하는 상수라면 shared로 이동
  - [ ] 프론트엔드 전용이면 `apps/web/src/lib/constants/`에 유지

## Files to Create/Modify

```
apps/web/src/lib/constants/
├── showcase.ts               # NEW: 통합 Showcase 상수
└── blog.ts                   # NEW: 통합 Blog 상수

apps/web/src/components/showcase/
├── showcase-card.tsx          # MODIFY: import from constants
└── showcase-detail.tsx        # MODIFY: import from constants

apps/web/src/components/blog/
├── types.ts                   # MODIFY: 상수 제거, import로 교체
└── category-filter.tsx        # MODIFY: import from constants
```

## Acceptance Criteria

- [ ] 카테고리 색상/라벨이 단일 파일에서만 정의됨 (Single Source of Truth)
- [ ] 기존 컴포넌트의 동작이 변경 없이 유지됨
- [ ] `pnpm build` 성공
