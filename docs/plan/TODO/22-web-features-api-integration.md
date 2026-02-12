# Web — Features/Comparison Hardcoded → API Integration

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `ui` `feature`
- **Depends on**: `19-features-api-module.md`

## Description

프론트엔드 Features 페이지의 하드코딩 데이터를 백엔드 API에서 가져오도록 변경한다.

## Current State (Mock Data 위치)

| 파일 | 문제 |
|------|------|
| `apps/web/src/app/features/page.tsx` (lines 8-106) | `featuresData` 배열에 4개 기능 하드코딩 (title, description, bullets, codeExample 등) |
| `apps/web/src/components/features/comparison-table.tsx` (lines 9-50) | `comparisonData` 배열에 8개 비교 행 하드코딩 |

## Tasks

- [ ] API 클라이언트 함수 작성 (`apps/web/src/lib/api/features.ts`)
  - [ ] `fetchFeatures()` — 기능 목록
  - [ ] `fetchComparison()` — 비교 테이블 데이터
- [ ] Features 페이지 수정
  - [ ] `features/page.tsx`의 `featuresData` 하드코딩 → API fetch (Server Component)
  - [ ] 로딩/에러 상태 처리
- [ ] Comparison 테이블 수정
  - [ ] `comparison-table.tsx`의 `comparisonData` 하드코딩 → props로 데이터 전달
  - [ ] 부모 컴포넌트에서 API fetch 후 전달
- [ ] 사용하지 않는 하드코딩 데이터 정리

## Files to Modify

```
apps/web/src/
├── lib/api/
│   └── features.ts             # NEW: API client functions
├── app/features/
│   └── page.tsx                # MODIFY: 하드코딩 → API fetch
└── components/features/
    └── comparison-table.tsx    # MODIFY: 하드코딩 → props 전달
```

## Acceptance Criteria

- [ ] Features 페이지가 API에서 받은 기능 목록을 표시
- [ ] Comparison 테이블이 API에서 받은 데이터를 표시
- [ ] 기능 목록이 order 순서대로 정렬됨
- [ ] 하드코딩 데이터가 코드에서 제거됨
