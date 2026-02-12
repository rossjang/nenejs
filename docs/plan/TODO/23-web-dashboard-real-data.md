# Web — Dashboard Placeholder → Real User Data

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `ui` `auth`
- **Depends on**: `17-blog-api-module.md`

## Description

대시보드 페이지의 플레이스홀더 카드를 실제 사용자 데이터와 연동한다.

## Current State

**`apps/web/src/app/dashboard/page.tsx`** (lines 46-59)
- "Profile" — "Manage your account settings" (플레이스홀더 텍스트)
- "Projects" — "View and manage your projects" (플레이스홀더 텍스트)
- "API Keys" — "Manage your API credentials" (플레이스홀더 텍스트)

이 카드들은 실제 데이터가 아닌 정적 설명 텍스트만 표시하고 있음.

## Tasks

- [ ] Profile 카드 개선
  - [ ] `/api/auth/me`에서 사용자 프로필 데이터 표시 (이름, 이메일, 가입일)
  - [ ] 프로필 편집 링크 연결 → `/dashboard/profile`
- [ ] 통계 데이터 표시
  - [ ] 사용자의 활동 요약 (가입일로부터 경과 일수 등)
  - [ ] Waitlist 총 가입자 수 (`/api/waitlist/count` 활용)
- [ ] 빈 상태(Empty State) 디자인
  - [ ] Projects — "아직 프로젝트가 없습니다" + CTA 버튼
  - [ ] API Keys — "아직 API 키가 없습니다" + 생성 안내

## Files to Modify

```
apps/web/src/app/dashboard/
├── page.tsx               # MODIFY: 플레이스홀더 → 실제 데이터
└── profile/
    └── page.tsx           # NEW (optional): 프로필 편집 페이지
```

## Acceptance Criteria

- [ ] 대시보드에 로그인한 사용자의 실제 이름/이메일 표시
- [ ] 플레이스홀더 텍스트가 의미 있는 데이터 또는 빈 상태 UI로 교체됨
- [ ] 비로그인 상태에서 대시보드 접근 시 로그인 페이지로 리다이렉트
