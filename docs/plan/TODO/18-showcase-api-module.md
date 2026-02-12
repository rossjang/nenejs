# Showcase Backend API Module

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `backend` `showcase`
- **Depends on**: `15-db-schema-extension.md`, `16-shared-types-dto.md`

## Description

NestJS 백엔드에 Showcase 모듈을 생성한다.
프로젝트 목록, 카테고리, 커뮤니티 제출 API를 제공한다.

## Current State

- `apps/web/data/showcase.json` — 2개 플레이스홀더 프로젝트만 존재
- `apps/web/src/components/landing/showcase.tsx` — 2개 하드코딩 아이템
- 백엔드 Showcase 모듈 없음

## Tasks

- [ ] Showcase 모듈 생성 (`apps/api/src/showcase/`)
  - [ ] `showcase.module.ts`
  - [ ] `showcase.controller.ts`
  - [ ] `showcase.service.ts`
- [ ] API 엔드포인트 구현
  - [ ] `GET /api/showcase/projects` — 프로젝트 목록 (카테고리 필터, featured 필터)
  - [ ] `GET /api/showcase/projects/:slug` — 프로젝트 상세
  - [ ] `GET /api/showcase/categories` — 카테고리 목록 (프로젝트 수 포함)
  - [ ] `POST /api/showcase/submit` — 커뮤니티 프로젝트 제출
- [ ] AppModule에 ShowcaseModule 등록
- [ ] Jest 테스트 작성

## Code Example

**`apps/api/src/showcase/showcase.controller.ts`**

```typescript
@Controller('showcase')
export class ShowcaseController {
  constructor(private readonly showcaseService: ShowcaseService) {}

  @Get('projects')
  findAll(@Query('category') category?: string, @Query('featured') featured?: string) {
    return this.showcaseService.findAll({ category, featured: featured === 'true' });
  }

  @Get('projects/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.showcaseService.findBySlug(slug);
  }

  @Get('categories')
  getCategories() {
    return this.showcaseService.getCategories();
  }

  @Post('submit')
  submit(@Body() dto: CreateShowcaseProjectDto) {
    return this.showcaseService.submit(dto);
  }
}
```

## Acceptance Criteria

- [ ] `curl http://localhost:4000/api/showcase/projects` — 200 응답, 프로젝트 목록
- [ ] `curl http://localhost:4000/api/showcase/projects?category=ai` — 카테고리 필터 동작
- [ ] `curl http://localhost:4000/api/showcase/projects?featured=true` — featured 필터 동작
- [ ] `curl http://localhost:4000/api/showcase/categories` — 카테고리별 프로젝트 수 반환
- [ ] `docs/API.md` 업데이트 완료
