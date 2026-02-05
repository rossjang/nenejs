# Header Buttons - Email 수집 (Waitlist)

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `header` `ui` `waitlist` `validation`

## Description

검증 단계에서 사용자 이메일 수집을 위한 Header 버튼 동작 구현

## Current State

현재 `src/components/landing/header.tsx`의 버튼들은 `<button>` 태그로만 되어있고, 클릭 시 아무 동작도 하지 않음.

## Phase 1: Email 수집 (현재 - 검증 단계) 🎯

### Sign In 버튼

- [x] 클릭 시 이메일 수집 모달 열기
- [x] 버튼 텍스트 변경: "Sign In" → "Join Waitlist"

### Deploy 버튼

- [x] 클릭 시 이메일 수집 모달 열기
- [x] 버튼 텍스트 변경: "Deploy" → "Get Started"

### 이메일 수집 모달

- [x] 이메일 입력 필드
- [x] 제출 버튼
- [x] 성공 메시지 (Thank you! We'll notify you when we launch.)
- [x] 이메일 유효성 검사

### 이메일 저장

- [x] 옵션 결정: **Option A** - DB 저장 (Prisma + Waitlist 테이블)
- [x] 중복 이메일 체크

## Implementation Details

### Email Modal Component

```tsx
// src/components/landing/email-modal.tsx
"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Get Early Access</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {status === "success" ? (
          <div className="text-center py-4">
            <p className="text-green-400 text-lg">🎉 Thank you!</p>
            <p className="text-slate-400 mt-2">
              We'll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full mt-4 px-4 py-3 fusion-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
```

### Waitlist API Route

```tsx
// src/app/api/waitlist/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // 이메일 유효성 검사
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 중복 체크 및 저장
  const existing = await prisma.waitlist.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ message: "Already registered" });
  }

  await prisma.waitlist.create({ data: { email } });

  return NextResponse.json({ message: "Success" });
}
```

### Prisma Schema 추가

```prisma
model Waitlist {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}
```

### Header 수정

```tsx
// src/components/landing/header.tsx
"use client";

import { useState } from "react";
import { EmailModal } from "./email-modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        {/* ... */}
        <div className="flex gap-3">
          <button onClick={() => setIsModalOpen(true)} className="...">
            Join Waitlist
          </button>
          <button onClick={() => setIsModalOpen(true)} className="...">
            Get Started
          </button>
        </div>
      </header>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
```

## Files to Create/Modify

- `src/components/landing/header.tsx` - 클라이언트 컴포넌트로 변경, 모달 연동
- `src/components/landing/email-modal.tsx` - (신규) 이메일 수집 모달
- `src/app/api/waitlist/route.ts` - (신규) Waitlist API
- `prisma/schema.prisma` - Waitlist 모델 추가

## Acceptance Criteria

- [x] 버튼 클릭 시 이메일 수집 모달 표시
- [x] 이메일 제출 시 DB에 저장
- [x] 중복 이메일 처리
- [x] 성공/에러 피드백 표시
- [x] 모바일 반응형 유지

---

## Phase 2: 정식 기능 (추후 - 제품 출시 후)

> 아래는 검증 완료 후 구현할 내용

### Sign In 버튼

- [ ] 버튼 클릭 시 `/auth/signin` 페이지로 이동
- [ ] 로그인 상태에 따른 버튼 표시 변경

### Deploy 버튼

- [ ] Vercel One-Click Deploy 또는 문서 페이지 연결
