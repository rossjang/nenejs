"use client";

import { AuthCard } from "@/components/auth/auth-card";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { SignUpForm } from "@/components/auth/signup-form";

export default function SignUpPage() {
  return (
    <AuthCard
      title="Create your account"
      description="Start building with nene.js today"
    >
      {/* OAuth Buttons */}
      <OAuthButtons />

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-slate-500 text-sm">or</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Sign Up Form */}
      <SignUpForm />
    </AuthCard>
  );
}
