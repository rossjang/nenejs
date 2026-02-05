"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

interface ForgotPasswordFormProps {
  onSubmit?: (email: string) => void;
}

export function ForgotPasswordForm({ onSubmit }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      return false;
    }
    setError(undefined);
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    console.log("Forgot password submitted:", { email });

    if (onSubmit) {
      onSubmit(email);
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-white text-lg font-semibold">Check your email</h3>
        <p className="text-slate-400 text-sm">
          We&apos;ve sent a password reset link to{" "}
          <span className="text-white">{email}</span>
        </p>
        <p className="text-slate-500 text-xs">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-white hover:underline"
          >
            try again
          </button>
        </p>
        <Link
          href="/auth/signin"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(undefined);
          }}
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-colors"
          disabled={isLoading}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 fusion-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isLoading ? "Sending..." : "Send Reset Link"}
      </button>

      {/* Back to Sign In Link */}
      <Link
        href="/auth/signin"
        className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to sign in
      </Link>
    </form>
  );
}
