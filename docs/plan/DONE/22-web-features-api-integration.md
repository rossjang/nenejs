# Web — Features Page Mock Data → API Integration

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `ui` `features`

## Summary

기능 소개 페이지의 하드코딩된 배열(featuresData 4건, comparisonData 8건)을 백엔드 API 호출로 전환.

## What Was Done

- `apps/web/src/lib/features.ts` — 신규 생성, `FeatureItem` / `ComparisonRowItem` 인터페이스, `fetchFeatures()` / `fetchComparison()` async 함수
- `apps/web/src/app/features/page.tsx` — 106줄 하드코딩 배열 제거 → async Server Component로 전환
- `apps/web/src/components/features/comparison-table.tsx` — `rows: ComparisonRowItem[]` props 방식으로 변경, `hasNeneCheck`/`hasOthersCheck` boolean 사용
- `apps/web/src/components/features/feature-section.tsx` — `codeExample`, `codeFilename`, `accentColor` 옵셔널 props로 변경, 기본값 및 조건부 렌더링 추가

## Implementation Decisions & Alternatives

### Decision 1: 옵셔널 기능 데이터 처리
- **선택**: FeatureSection에서 optional props + 기본값 (accentColor="#6B7280") + 조건부 CodeDemo 렌더링
- **대안 A**: DB에서 필수값으로 강제 — 간단하나 유연성 감소
- **대안 B**: 프론트엔드에서 기본값 매핑 객체 — 더 유연하나 과도한 추상화

### Decision 2: 비교표 데이터 전달
- **선택**: Server Component에서 fetch → ComparisonTable에 rows props 전달
- **대안**: ComparisonTable을 Client Component로 만들고 직접 fetch — 독립적이나 불필요한 클라이언트 번들 증가
