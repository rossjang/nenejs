# Shared Types & DTO — Blog, Showcase, Feature

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `shared` `types`

## Summary

`@nene/shared` 패키지에 Blog, Showcase, Feature 관련 TypeScript 인터페이스, DTO, API 라우트 상수를 추가.

## What Was Done

- `packages/shared/src/types/index.ts` — BlogCategory, Author, BlogPost, ShowcaseCategory, ShowcaseProject, Feature, ComparisonRow 인터페이스 추가
- `packages/shared/src/dto/index.ts` — BlogQueryDto, ShowcaseQueryDto, CreateShowcaseProjectDto 클래스 추가 (class-validator 데코레이터)
- `packages/shared/src/constants/index.ts` — CONTENT_ROUTES 상수 추가 (Blog, Showcase, Features 라우트)
- `pnpm build:shared` 빌드 성공 확인

## Implementation Decisions & Alternatives

### Decision 1: 타입 위치
- **선택**: `@nene/shared`에 집중 — 프론트/백엔드 모두에서 import 가능
- **대안**: 프론트엔드 전용 타입은 `apps/web/src/types/`에 유지 — 현재는 단일 소스가 더 관리 용이

### Decision 2: DTO 검증 라이브러리
- **선택**: `class-validator` + `class-transformer` (기존 프로젝트 패턴 유지)
- **대안 A**: Zod — 함수형 스타일, 프론트엔드에서 더 가벼움
- **대안 B**: Joi — 풍부한 기능이지만 NestJS와 class-validator가 더 자연스러운 통합

### Decision 3: 카테고리 타입
- **선택**: string union type (`"announcement" | "tutorial" | ...`)
- **대안**: enum — 런타임 값이 필요할 때 유용하나 tree-shaking에 불리
