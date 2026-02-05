# Authentication Pages

## Page Info

- **Routes**:
  - `/auth/signin` - 로그인
  - `/auth/signup` - 회원가입
  - `/auth/forgot-password` - 비밀번호 찾기
  - `/auth/reset-password` - 비밀번호 재설정
  - `/auth/verify-email` - 이메일 인증
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

사용자 인증 관련 페이지들입니다. 깔끔하고 미니멀한 디자인으로 구현합니다.

## Page Designs

### Sign In Page (`/auth/signin`)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                     ┌─────────────────┐                     │
│                     │  nene.js Logo   │                     │
│                     └─────────────────┘                     │
│                                                              │
│                     Sign in to nene.js                      │
│                                                              │
│               ┌─────────────────────────────┐               │
│               │  Continue with GitHub       │               │
│               └─────────────────────────────┘               │
│               ┌─────────────────────────────┐               │
│               │  Continue with Google       │               │
│               └─────────────────────────────┘               │
│                                                              │
│                    ────── or ──────                         │
│                                                              │
│               Email                                          │
│               ┌─────────────────────────────┐               │
│               │                             │               │
│               └─────────────────────────────┘               │
│                                                              │
│               Password                                       │
│               ┌─────────────────────────────┐               │
│               │                             │               │
│               └─────────────────────────────┘               │
│                                                              │
│               [Forgot password?]                            │
│                                                              │
│               ┌─────────────────────────────┐               │
│               │        Sign In              │               │
│               └─────────────────────────────┘               │
│                                                              │
│               Don't have an account? Sign up                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Sign Up Page (`/auth/signup`)

- 이름, 이메일, 비밀번호 입력
- 이용약관 동의 체크박스
- OAuth 버튼 (GitHub, Google)

### Forgot Password (`/auth/forgot-password`)

- 이메일 입력
- "Reset Password" 버튼
- 성공 메시지 표시

## Components to Build

### 1. AuthLayout

- **File**: `src/app/auth/layout.tsx`
- **Description**: 인증 페이지 공통 레이아웃
- **Features**:
  - 중앙 정렬 컨테이너
  - 로고 표시
  - 다크 배경

### 2. AuthCard

- **File**: `src/components/auth/auth-card.tsx`
- **Description**: 인증 폼 카드 래퍼
- **Features**:
  - Glass card 스타일
  - Max width 제한 (400px)
  - 패딩, 테두리

### 3. OAuthButtons

- **File**: `src/components/auth/oauth-buttons.tsx`
- **Description**: 소셜 로그인 버튼들
- **Features**:
  - GitHub 버튼
  - Google 버튼
  - 로딩 상태

### 4. SignInForm

- **File**: `src/components/auth/signin-form.tsx`
- **Features**:
  - 이메일/비밀번호 입력
  - 폼 검증
  - 에러 메시지
  - 로딩 상태

### 5. SignUpForm

- **File**: `src/components/auth/signup-form.tsx`
- **Features**:
  - 이름, 이메일, 비밀번호
  - 비밀번호 강도 표시 (optional)
  - 이용약관 체크

### 6. ForgotPasswordForm

- **File**: `src/components/auth/forgot-password-form.tsx`

### 7. ResetPasswordForm

- **File**: `src/components/auth/reset-password-form.tsx`
- **Features**:
  - 새 비밀번호 입력
  - 비밀번호 확인

### 8. EmailVerification

- **File**: `src/components/auth/email-verification.tsx`
- **Features**:
  - 인증 상태 표시
  - 재전송 버튼

## Form Validation

### Email Validation

```typescript
const emailSchema = z.string().email("Invalid email address");
```

### Password Validation

```typescript
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain uppercase letter")
  .regex(/[0-9]/, "Password must contain a number");
```

## Required Skills

### Frontend Developer

- **필수 역량**:

  - React Hook Form 또는 폼 관리
  - Zod 또는 폼 검증
  - TypeScript
  - Tailwind CSS

- **권장 역량**:
  - NextAuth.js (인증 라이브러리)
  - OAuth 2.0 이해
  - 에러 핸들링

### Backend Integration

- **인증 옵션**:
  - NextAuth.js (추천)
  - Supabase Auth
  - Firebase Auth
  - Custom JWT

### Required Packages (추천)

```json
{
  "next-auth": "latest",
  "react-hook-form": "latest",
  "@hookform/resolvers": "latest",
  "zod": "latest"
}
```

## Design Specifications

### Layout

- 전체 화면 높이: `min-h-screen`
- 수직 중앙 정렬: `flex items-center justify-center`
- 배경: `bg-[#0A0A0A]`

### Auth Card

```css
max-width: 400px;
width: 100%;
padding: 32px;
background: rgba(255, 255, 255, 0.03);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
```

### Input Fields

```css
width: 100%;
padding: 12px 16px;
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 8px;
color: white;
```

### Primary Button

```css
width: 100%;
padding: 12px 24px;
background: linear-gradient(90deg, #0070f3, #e0234e);
color: white;
font-weight: 600;
border-radius: 8px;
```

### OAuth Button

```css
width: 100%;
padding: 12px 24px;
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
color: white;
font-weight: 500;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
```

### Error Message

```css
color: #ef4444;
font-size: 14px;
margin-top: 4px;
```

## Security Considerations

- CSRF 토큰 사용
- Rate limiting
- Secure password hashing (서버 측)
- HTTPS only
- HttpOnly 쿠키
- Session 관리

## User Flow

### Sign In Flow

1. 사용자가 `/auth/signin` 접속
2. OAuth 또는 이메일/비밀번호 입력
3. 폼 검증
4. API 호출
5. 성공 시 리다이렉트 (대시보드 또는 이전 페이지)
6. 실패 시 에러 메시지 표시

### Sign Up Flow

1. 사용자가 `/auth/signup` 접속
2. 정보 입력 및 폼 검증
3. API 호출로 계정 생성
4. 이메일 인증 전송
5. `/auth/verify-email` 리다이렉트

### Password Reset Flow

1. `/auth/forgot-password`에서 이메일 입력
2. 리셋 링크 이메일 전송
3. 링크 클릭 시 `/auth/reset-password?token=xxx`
4. 새 비밀번호 설정
5. 성공 시 로그인 페이지로 리다이렉트
