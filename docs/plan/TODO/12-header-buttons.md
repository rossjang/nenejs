# Header Buttons - Email Collection (Waitlist)

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `header` `ui` `waitlist` `validation`

## Description

Implement Header button behavior for user email collection during validation phase

## Current State

Currently the buttons in `src/components/landing/header.tsx` are plain `<button>` elements with no click behavior.

## Phase 1: Email Collection (Current - Validation Phase)

### Sign In button

- [x] Open email collection modal on click
- [x] Change button text: "Sign In" → "Join Waitlist"

### Deploy button

- [x] Open email collection modal on click
- [x] Change button text: "Deploy" → "Get Started"

### Email collection modal

- [x] Email input field
- [x] Submit button
- [x] Success message (Thank you! We'll notify you when we launch.)
- [x] Email validation

### Email storage

- [x] Option chosen: **Option A** - DB storage (Prisma + Waitlist table)
- [x] Duplicate email check

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

  // Email validation
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Duplicate check and save
  const existing = await prisma.waitlist.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ message: "Already registered" });
  }

  await prisma.waitlist.create({ data: { email } });

  return NextResponse.json({ message: "Success" });
}
```

### Add to Prisma Schema

```prisma
model Waitlist {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())
}
```

### Header update

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

- `src/components/landing/header.tsx` - Convert to client component, wire modal
- `src/components/landing/email-modal.tsx` - (New) Email collection modal
- `src/app/api/waitlist/route.ts` - (New) Waitlist API
- `prisma/schema.prisma` - Add Waitlist model

## Acceptance Criteria

- [x] Email collection modal shows on button click
- [x] Email is saved to DB on submit
- [x] Duplicate email handled
- [x] Success/error feedback shown
- [x] Mobile responsive preserved

---

## Phase 2: Full Feature (Later - After product launch)

> Implement after validation is complete

### Sign In button

- [ ] Navigate to `/auth/signin` on click
- [ ] Change button display based on login state

### Deploy button

- [ ] Vercel One-Click Deploy or link to docs page
