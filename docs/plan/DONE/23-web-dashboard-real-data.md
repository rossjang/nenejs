# Web — Dashboard Placeholder → Real User Data

- **Status**: ✅ Done
- **Completed**: 2026-02-12
- **Labels**: `ui` `dashboard`

## Summary

대시보드 페이지의 플레이스홀더 카드를 실제 사용자 데이터(useAuth 컨텍스트)로 교체.

## What Was Done

- `apps/web/src/app/dashboard/page.tsx` — Profile 카드에 실제 사용자 데이터(name, email, 가입일) 표시, Projects/API Keys 카드에 적절한 빈 상태 메시지("coming in nene Cloud"), Account Activity 섹션에 가입일 표시

## Implementation Decisions & Alternatives

### Decision 1: 데이터 소스
- **선택**: `useAuth()` 컨텍스트에서 현재 사용자 정보 사용 (이미 JWT에서 디코딩됨)
- **대안 A**: 별도 `/api/dashboard` 엔드포인트 — 대시보드 전용 집계 데이터 제공에 유리하나 현재 불필요
- **대안 B**: Server Component + cookie 기반 인증 — SSR 가능하나 현재 인증 구조와 불일치

### Decision 2: Projects/API Keys 빈 상태
- **선택**: "coming in nene Cloud" 안내 메시지 — 로드맵 커뮤니케이션
- **대안 A**: 빈 카드 숨기기 — 깔끔하나 기능 예고 효과 없음
- **대안 B**: CTA 버튼 ("Create Project") — 기능 미구현 시 혼란 유발
