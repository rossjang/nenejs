# Blog Backend API Module

- **Status**: 📋 Todo
- **Priority**: 🔥 High
- **Labels**: `backend` `blog`
- **Depends on**: `15-db-schema-extension.md`, `16-shared-types-dto.md`

## Description

NestJS 백엔드에 Blog 모듈을 생성한다.
블로그 글 목록, 상세, 카테고리 필터, 저자 정보 API를 제공한다.

## Current State

블로그 관련 백엔드 모듈 없음. 프론트엔드에서 `components/blog/data.ts`의 하드코딩 데이터 사용 중.

## Tasks

- [ ] Blog 모듈 생성 (`apps/api/src/blog/`)
  - [ ] `blog.module.ts`
  - [ ] `blog.controller.ts`
  - [ ] `blog.service.ts`
- [ ] API 엔드포인트 구현
  - [ ] `GET /api/blog/posts` — 글 목록 (페이지네이션, 카테고리 필터)
  - [ ] `GET /api/blog/posts/:slug` — 글 상세 (MDX 콘텐츠 포함)
  - [ ] `GET /api/blog/authors` — 저자 목록
  - [ ] `GET /api/blog/authors/:id` — 저자 상세
- [ ] (Optional) 관리자 API
  - [ ] `POST /api/blog/posts` — 글 생성 (JWT 인증)
  - [ ] `PATCH /api/blog/posts/:id` — 글 수정 (JWT 인증)
  - [ ] `DELETE /api/blog/posts/:id` — 글 삭제 (JWT 인증)
- [ ] AppModule에 BlogModule 등록
- [ ] Jest 테스트 작성

## Code Example

**`apps/api/src/blog/blog.controller.ts`**

```typescript
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('posts')
  findAll(@Query() query: BlogQueryDto) {
    return this.blogService.findAll(query);
  }

  @Get('posts/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.blogService.findBySlug(slug);
  }

  @Get('authors')
  findAllAuthors() {
    return this.blogService.findAllAuthors();
  }
}
```

## Acceptance Criteria

- [ ] `curl http://localhost:4000/api/blog/posts` — 200 응답, 글 목록 반환
- [ ] `curl http://localhost:4000/api/blog/posts/introducing-nene-js` — 200 응답, 글 상세 반환
- [ ] `curl http://localhost:4000/api/blog/posts?category=tutorial` — 카테고리 필터 동작
- [ ] `curl http://localhost:4000/api/blog/authors` — 200 응답, 저자 목록 반환
- [ ] `docs/API.md` 업데이트 완료
