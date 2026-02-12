# Backend API — Showcase Module

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `backend` `showcase`

## Summary

NestJS 쇼케이스 API 모듈 구현 — 프로젝트 목록(카테고리/featured 필터), 상세, 카테고리 집계, 커뮤니티 제출 엔드포인트.

## What Was Done

- `apps/api/src/showcase/showcase.service.ts` — CRUD, 카테고리 필터, featured 필터, approved gating, 카테고리별 집계, slug 생성, 제출 기능
- `apps/api/src/showcase/showcase.controller.ts` — GET /showcase/projects, GET /showcase/projects/:slug, GET /showcase/categories, POST /showcase/submit
- `apps/api/src/showcase/showcase.module.ts` + `index.ts`

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/showcase/projects` | 프로젝트 목록 (?category=, ?featured=) |
| GET | `/api/showcase/projects/:slug` | 프로젝트 상세 |
| GET | `/api/showcase/categories` | 카테고리별 프로젝트 수 |
| POST | `/api/showcase/submit` | 커뮤니티 프로젝트 제출 |

## Implementation Decisions & Alternatives

### Decision 1: 프로젝트 승인 플로우
- **선택**: `approved` boolean 필드 + 목록 API에서 기본 필터링
- **대안 A**: 상태 enum (pending, approved, rejected) — 더 세분화된 워크플로우
- **대안 B**: 별도 관리자 API 모듈 — 프로덕션에서 권장하나 현재 불필요

### Decision 2: 이미지 저장
- **선택**: URL 문자열만 DB에 저장 (외부 이미지 호스팅 전제)
- **대안**: 파일 업로드 API + S3/R2 스토리지 — 자체 호스팅에 필요하나 인프라 추가 필요
