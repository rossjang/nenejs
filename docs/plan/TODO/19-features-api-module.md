# Features & Comparison Backend API Module

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `backend` `feature`
- **Depends on**: `15-db-schema-extension.md`, `16-shared-types-dto.md`

## Description

NestJS 백엔드에 Features 모듈을 생성한다.
기능 소개 및 비교 테이블 데이터를 DB에서 관리하여 코드 변경 없이 마케팅 콘텐츠를 업데이트할 수 있게 한다.

## Current State

- `apps/web/src/app/features/page.tsx` (lines 8-106) — `featuresData` 배열에 4개 기능 하드코딩
- `apps/web/src/components/features/comparison-table.tsx` (lines 9-50) — `comparisonData` 배열에 8개 비교 행 하드코딩

## Tasks

- [ ] Features 모듈 생성 (`apps/api/src/features/`)
  - [ ] `features.module.ts`
  - [ ] `features.controller.ts`
  - [ ] `features.service.ts`
- [ ] API 엔드포인트 구현
  - [ ] `GET /api/features` — 기능 목록 (order 순서)
  - [ ] `GET /api/features/comparison` — 비교 테이블 데이터 (order 순서)
- [ ] AppModule에 FeaturesModule 등록
- [ ] Jest 테스트 작성

## Code Example

**`apps/api/src/features/features.controller.ts`**

```typescript
@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Get()
  findAll() {
    return this.featuresService.findAll();
  }

  @Get('comparison')
  getComparison() {
    return this.featuresService.getComparison();
  }
}
```

## Acceptance Criteria

- [ ] `curl http://localhost:4000/api/features` — 200 응답, 기능 목록 반환
- [ ] `curl http://localhost:4000/api/features/comparison` — 200 응답, 비교 테이블 반환
- [ ] 기능 목록이 order 필드 순서대로 정렬됨
- [ ] `docs/API.md` 업데이트 완료
