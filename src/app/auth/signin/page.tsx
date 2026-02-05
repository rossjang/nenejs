"use client";

import { AuthCard } from "@/components/auth/auth-card";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { SignInForm } from "@/components/auth/signin-form";

export default function SignInPage() {
  return (
    <AuthCard title="Sign in to nene.js">
      {/* OAuth Buttons */}
      <OAuthButtons />

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-slate-500 text-sm">or</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Sign In Form */}
      <SignInForm />
    </AuthCard>
  );
}
