# DB Schema Extension — Blog, Showcase, Feature Models

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `backend` `infrastructure`

## Summary

Prisma 스키마에 5개 새 모델(Author, BlogPost, ShowcaseProject, Feature, ComparisonRow)을 추가하고 seed 스크립트로 기존 mock 데이터를 DB에 이관.

## What Was Done

- `apps/api/prisma/schema.prisma`에 Author, BlogPost, ShowcaseProject, Feature, ComparisonRow 모델 추가
- `apps/api/prisma/seed.ts` 작성 — 기존 mock 데이터(블로그 5편, 저자 3명, 쇼케이스 2건, 기능 4건, 비교표 8행)를 upsert 패턴으로 DB에 삽입
- `prisma.config.ts`에 seed 커맨드 등록 (Prisma 7 호환)
- `npx prisma db push` 및 seed 실행 완료

## Implementation Decisions & Alternatives

### Decision 1: SQLite에서 배열 저장 방식
- **선택**: JSON string으로 저장 후 서비스 레이어에서 `JSON.parse/stringify`
- **대안 A**: 별도 조인 테이블 (Tag, Bullet 모델) — 정규화는 좋지만 단순 read-heavy 데이터에 과도한 복잡도
- **대안 B**: PostgreSQL로 전환하여 native array 지원 — 프로덕션에서는 권장하지만 현재 개발 단계에서 SQLite 유지

### Decision 2: Seed 패턴
- **선택**: `upsert` 패턴 (slug 기준) — 멱등성 보장, 반복 실행 안전
- **대안**: `deleteMany` + `createMany` — 더 간단하지만 기존 데이터 파괴 위험

### Decision 3: 콘텐츠 저장 (블로그 본문)
- **선택**: DB에 직접 Markdown 문자열 저장
- **대안 A**: MDX 파일 시스템 (content/ 디렉토리) — 정적 빌드에 유리하나 동적 관리 어려움
- **대안 B**: 외부 CMS (Contentful, Sanity) — 비개발자 편집에 적합하나 외부 의존성 추가
