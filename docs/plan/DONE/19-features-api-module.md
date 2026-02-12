# Backend API — Features Module

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `backend` `features`

## Summary

NestJS 기능 소개 API 모듈 구현 — 기능 목록(순서 정렬), 비교표 데이터 엔드포인트.

## What Was Done

- `apps/api/src/features/features.service.ts` — PrismaService 기반, order 정렬, JSON bullets 파싱
- `apps/api/src/features/features.controller.ts` — GET /features, GET /features/comparison
- `apps/api/src/features/features.module.ts` + `index.ts`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/features` | 기능 목록 (order 정렬) |
| GET | `/api/features/comparison` | 비교표 데이터 |

## Implementation Decisions & Alternatives

### Decision 1: 기능 데이터 관리
- **선택**: DB 저장 + API — 런타임에 수정 가능, CMS 연동 용이
- **대안 A**: 정적 JSON/MDX 파일 — 빌드 타임 처리, 더 빠르지만 동적 수정 불가
- **대안 B**: 하드코딩 유지 + shared 상수 — 가장 간단하나 확장성 제한

### Decision 2: 비교표 데이터 구조
- **선택**: hasNeneCheck/hasOthersCheck boolean 필드 — UI에서 체크마크/X 렌더링에 직접 활용
- **대안**: 단일 value 필드 + 프론트엔드 파싱 — 유연하나 타입 안전성 감소
