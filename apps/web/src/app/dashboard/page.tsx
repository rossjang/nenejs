"use client";

import Link from "next/link";
import { Layers } from "lucide-react";
import { ProtectedRoute } from "@/components/auth";
import { useAuth } from "@/contexts/auth-context";

function DashboardContent() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="border-b border-white/10 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="h-8 w-8 fusion-gradient rounded flex items-center justify-center">
              <Layers className="text-white text-xl" />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              nene.js
            </h2>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">
              {user?.email}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors border border-white/10 cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400 mb-8">
          Welcome back, {user?.name || user?.email}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-1">Profile</h3>
            <p className="text-slate-400 text-sm">Manage your account settings</p>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-1">Projects</h3>
            <p className="text-slate-400 text-sm">View and manage your projects</p>
          </div>
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-1">API Keys</h3>
            <p className="text-slate-400 text-sm">Manage your API credentials</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
