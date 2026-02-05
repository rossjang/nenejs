# Implementation Plan

nene.js 웹사이트 구현 칸반 보드입니다.

---

## 🚀 Project Vision & Roadmap

### Business Model

```
Phase 1: Open Source        Phase 2: Cloud Platform       Phase 3: Enterprise
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[현재]                      [사용자 확보 후]              [스케일업]

• nene.js 오픈소스 공개     • nene Cloud 출시             • Enterprise 플랜
• 문서 사이트 운영          • 웹 배포 기능 (like Vercel)  • 전용 지원
• 커뮤니티 구축             • 프리미엄 기능               • SLA 보장
• Waitlist 이메일 수집      • 유료 플랜 도입              • On-premise 옵션
```

### Phase 1: Open Source Foundation (현재)

**목표**: 오픈소스 프레임워크로 개발자 커뮤니티 확보

| 항목      | 설명                                         |
| --------- | -------------------------------------------- |
| 핵심 가치 | 무료, 오픈소스, 커뮤니티 중심                |
| 수익      | 없음 (투자 단계)                             |
| KPI       | GitHub Stars, NPM Downloads, Waitlist 가입자 |

**우선 작업:**

- ✅ 랜딩 페이지
- ✅ 문서 사이트 UI
- 📋 문서 콘텐츠 작성
- 📋 Waitlist 이메일 수집
- 📋 GitHub 레포 공개

### Phase 2: Cloud Platform (사용자 확보 후)

**목표**: Vercel처럼 nene.js 앱을 웹에서 쉽게 배포하는 플랫폼

| 항목      | 설명                                      |
| --------- | ----------------------------------------- |
| 핵심 가치 | One-click deploy, 자동 스케일링, 모니터링 |
| 수익 모델 | Freemium (무료 + Pro/Team 유료)           |
| KPI       | MAU, 배포 수, 유료 전환율                 |

**계획 기능:**

- nene Cloud Dashboard
- GitHub 연동 자동 배포
- 커스텀 도메인
- 환경 변수 관리
- 로그/모니터링
- Team 협업

### Phase 3: Enterprise (스케일업)

**목표**: 대규모 조직을 위한 엔터프라이즈 솔루션

| 항목      | 설명                          |
| --------- | ----------------------------- |
| 핵심 가치 | 보안, 컴플라이언스, 전용 지원 |
| 수익 모델 | Enterprise 라이센스           |
| KPI       | ARR, 고객사 수                |

---

## 📁 Structure

```
docs/plan/
├── TODO/       # 할 일
├── DOING/      # 진행 중
└── DONE/       # 완료
```

## 📊 Current Status

| Status   | Count |
| -------- | ----- |
| ✅ DONE  | 14    |
| 🔄 DOING | 0     |
| 📋 TODO  | 8     |

## 🎯 Priority Order (Phase 1 기준)

### 🔥 Phase 1 Critical - 검증 & 런칭

> 오픈소스 공개 및 초기 사용자 확보에 필수

1. `12-header-buttons.md` - **Waitlist 이메일 수집** ⭐
2. ~~`13-create-nene-package.md` - **create-nene NPM 패키지 배포**~~ ✅
3. `14-github-repository.md` - **GitHub 레포지토리 생성** ⭐
4. `01-mdx-system.md` - MDX 시스템 설정
5. `02-docs-content.md` - 문서 콘텐츠 작성
6. `11-deployment.md` - 사이트 배포

### 🟠 Phase 1 Important - 완성도

> 사용자 경험 향상

7. `03-docs-search.md` - 문서 검색 기능
8. `08-seo-optimization.md` - SEO 최적화
9. `10-analytics.md` - 분석 도구 (사용자 행동 추적)

### 🔵 Phase 1 Nice-to-have

> 있으면 좋지만 런칭 필수 아님

10. `05-blog-system.md` - 블로그 시스템
11. `06-showcase-system.md` - 쇼케이스 시스템
12. `07-i18n-content.md` - 다국어 콘텐츠
13. `09-performance.md` - 성능 최적화

### ⏸️ Phase 2 Deferred - 추후 개발

> 사용자 확보 후 Cloud Platform 단계에서 구현

14. `04-auth-backend.md` - 인증 백엔드 (Cloud 로그인용)

## 🚀 How to Use

### 작업 시작할 때

```bash
# TODO에서 DOING으로 파일 이동
mv docs/plan/TODO/01-mdx-system.md docs/plan/DOING/
```

### 작업 완료할 때

```bash
# DOING에서 DONE으로 파일 이동
mv docs/plan/DOING/01-mdx-system.md docs/plan/DONE/
```

### 각 Task 파일 구조

```markdown
# Task 제목

- **Status**: 📋 Todo / 🔄 Doing / ✅ Done
- **Priority**: 🔥 High / 🟠 Medium / 🔵 Low
- **Labels**: `tag1` `tag2`
- **Depends on**: (의존성 있는 경우)

## Description

작업 설명

## Tasks

- [ ] 체크리스트

## Install

설치 명령어

## Code Example

코드 예시

## Acceptance Criteria

완료 조건
```

## 🏷️ Labels

| Label            | Description          |
| ---------------- | -------------------- |
| `infrastructure` | 인프라/설정          |
| `ui`             | UI 컴포넌트          |
| `backend`        | 백엔드 로직          |
| `content`        | 콘텐츠 작성          |
| `feature`        | 새 기능              |
| `docs`           | 문서 관련            |
| `blog`           | 블로그 관련          |
| `auth`           | 인증 관련            |
| `showcase`       | 쇼케이스 관련        |
| `i18n`           | 다국어               |
| `seo`            | 검색 최적화          |
| `performance`    | 성능                 |
| `analytics`      | 분석                 |
| `launch`         | 런칭 준비            |
| `deploy`         | 배포                 |
| `waitlist`       | 이메일/Waitlist      |
| `validation`     | 검증 단계 핵심       |
| `phase-1`        | Phase 1 (OSS)        |
| `phase-2`        | Phase 2 (Cloud)      |
| `phase-3`        | Phase 3 (Enterprise) |
