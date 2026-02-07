# Authentication Pages

## Page Info

- **Routes**:
  - `/auth/signin` - Sign in
  - `/auth/signup` - Sign up
  - `/auth/forgot-password` - Forgot password
  - `/auth/reset-password` - Reset password
  - `/auth/verify-email` - Email verification
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

User authentication pages. Implement with a clean, minimal design.

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

- Name, email, password inputs
- Terms of service checkbox
- OAuth buttons (GitHub, Google)

### Forgot Password (`/auth/forgot-password`)

- Email input
- "Reset Password" button
- Success message display

## Components to Build

### 1. AuthLayout

- **File**: `src/app/auth/layout.tsx`
- **Description**: Shared layout for auth pages
- **Features**:
  - Centered container
  - Logo display
  - Dark background

### 2. AuthCard

- **File**: `src/components/auth/auth-card.tsx`
- **Description**: Auth form card wrapper
- **Features**:
  - Glass card style
  - Max width (400px)
  - Padding, border

### 3. OAuthButtons

- **File**: `src/components/auth/oauth-buttons.tsx`
- **Description**: Social login buttons
- **Features**:
  - GitHub button
  - Google button
  - Loading state

### 4. SignInForm

- **File**: `src/components/auth/signin-form.tsx`
- **Features**:
  - Email/password inputs
  - Form validation
  - Error messages
  - Loading state

### 5. SignUpForm

- **File**: `src/components/auth/signup-form.tsx`
- **Features**:
  - Name, email, password
  - Password strength (optional)
  - Terms checkbox

### 6. ForgotPasswordForm

- **File**: `src/components/auth/forgot-password-form.tsx`

### 7. ResetPasswordForm

- **File**: `src/components/auth/reset-password-form.tsx`
- **Features**:
  - New password input
  - Password confirmation

### 8. EmailVerification

- **File**: `src/components/auth/email-verification.tsx`
- **Features**:
  - Verification status
  - Resend button

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

- **Required**:
  - React Hook Form or form management
  - Zod or form validation
  - TypeScript
  - Tailwind CSS

- **Recommended**:
  - NextAuth.js (auth library)
  - OAuth 2.0 understanding
  - Error handling

### Backend Integration

- **Auth options**:
  - NextAuth.js (recommended)
  - Supabase Auth
  - Firebase Auth
  - Custom JWT

### Required Packages (recommended)

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

- Full height: `min-h-screen`
- Vertical center: `flex items-center justify-center`
- Background: `bg-[#0A0A0A]`

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

- CSRF tokens
- Rate limiting
- Secure password hashing (server-side)
- HTTPS only
- HttpOnly cookies
- Session management

## User Flow

### Sign In Flow

1. User visits `/auth/signin`
2. OAuth or email/password input
3. Form validation
4. API call
5. On success: redirect (dashboard or previous page)
6. On failure: show error message

### Sign Up Flow

1. User visits `/auth/signup`
2. Enter info and validate form
3. API call to create account
4. Send verification email
5. Redirect to `/auth/verify-email`

### Password Reset Flow

1. Enter email on `/auth/forgot-password`
2. Send reset link email
3. Link opens `/auth/reset-password?token=xxx`
4. Set new password
5. On success redirect to sign-in page
