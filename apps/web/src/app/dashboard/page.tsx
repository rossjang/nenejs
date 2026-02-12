"use client";

import Link from "next/link";
import { Layers, User, FolderOpen, Key, Calendar } from "lucide-react";
import { ProtectedRoute } from "@/components/auth";
import { useAuth } from "@/contexts/auth-context";

function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

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
          {/* Profile Card */}
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Profile</h3>
                <p className="text-slate-500 text-xs">Your account info</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Name</span>
                <span className="text-slate-300">{user?.name || "Not set"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email</span>
                <span className="text-slate-300 truncate ml-4">{user?.email}</span>
              </div>
              {user?.createdAt && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Joined</span>
                  <span className="text-slate-300">{formatDate(user.createdAt)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Projects Card */}
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Projects</h3>
                <p className="text-slate-500 text-xs">Your nene.js apps</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <p className="text-slate-500 text-sm mb-3">No projects yet</p>
              <span className="text-xs text-slate-600">
                Project management coming in nene Cloud
              </span>
            </div>
          </div>

          {/* API Keys Card */}
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Key className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">API Keys</h3>
                <p className="text-slate-500 text-xs">Access credentials</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 text-center">
              <p className="text-slate-500 text-sm mb-3">No API keys yet</p>
              <span className="text-xs text-slate-600">
                API key management coming in nene Cloud
              </span>
            </div>
          </div>
        </div>

        {/* Account Activity */}
        {user?.createdAt && (
          <div className="mt-8 p-6 bg-white/[0.03] border border-white/10 rounded-xl">
            <h3 className="text-white font-semibold mb-4">Account Activity</h3>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Account created on {formatDate(user.createdAt)}</span>
            </div>
          </div>
        )}
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
