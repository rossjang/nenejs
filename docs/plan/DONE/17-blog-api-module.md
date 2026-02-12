# Backend API — Blog Module

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `backend` `blog`

## Summary

NestJS 블로그 API 모듈 구현 — 글 목록(페이지네이션/카테고리 필터), 글 상세(slug), 저자 목록 엔드포인트.

## What Was Done

- `apps/api/src/blog/blog.service.ts` — PrismaService 기반, 페이지네이션, 카테고리 필터, JSON tags 파싱
- `apps/api/src/blog/blog.controller.ts` — GET /blog/posts, GET /blog/posts/:slug, GET /blog/authors
- `apps/api/src/blog/blog.module.ts` + `index.ts`
- `app.module.ts`에 BlogModule 등록

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/blog/posts` | 글 목록 (paginated, ?category= filter) |
| GET | `/api/blog/posts/:slug` | 글 상세 |
| GET | `/api/blog/authors` | 저자 목록 |

## Implementation Decisions & Alternatives

### Decision 1: 콘텐츠 렌더링 위치
- **선택**: 서버에서 Markdown raw string 반환 → 프론트엔드에서 렌더링
- **대안 A**: 서버에서 HTML로 변환하여 반환 — SEO 유리하나 서버 부하 증가
- **대안 B**: MDX 컴파일을 서버에서 처리 — 더 풍부한 콘텐츠 가능하나 복잡도 높음

### Decision 2: 페이지네이션
- **선택**: offset 기반 (`page`, `limit` 쿼리 파라미터)
- **대안**: cursor 기반 — 대량 데이터에 유리하나 현재 규모에서 불필요한 복잡도
