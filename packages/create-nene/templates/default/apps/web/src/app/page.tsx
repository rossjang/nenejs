'use client';

import { useEffect, useState } from 'react';
import { API_ROUTES } from '@app/shared';

interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
  database: 'connected' | 'disconnected';
}

type ServiceStatus = 'checking' | 'active' | 'inactive';

const EXAMPLE_PROMPT =
  'Turn this nene.js project into a blog with real-time comments. Use a light theme with modern fonts. Skip auth for now (add it as a kanban TODO), and let anyone write posts and comments.';

function StatusBadge({ status }: { status: ServiceStatus }) {
  if (status === 'checking') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-slate-400">
        Checking…
      </span>
    );
  }
  if (status === 'active') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
      Inactive
    </span>
  );
}

export default function Home() {
  const [apiStatus, setApiStatus] = useState<ServiceStatus>('checking');
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`http://localhost:4000${API_ROUTES.HEALTH}`);
        const data = await res.json();
        setHealth(data);
        setApiStatus('active');
      } catch {
        setApiStatus('inactive');
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  const allOperational = apiStatus === 'active' && health?.database === 'connected';

  return (
    <div className="bg-background-dark text-slate-200 min-h-screen flex flex-col items-center">
      {/* Top Navigation */}
      <header className="w-full max-w-[1200px] flex items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark font-bold text-sm">
            N
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white glow-text">
            nene.js
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a
            className="hover:text-primary transition-colors"
            href="https://github.com/rossjang/nenejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="https://github.com/rossjang/nenejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            className="hover:text-primary transition-colors"
            href="http://localhost:4000/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </nav>
      </header>

      <main className="w-full max-w-[960px] px-6 flex flex-col items-center">
        {/* Hero Title */}
        <div className="text-center mt-8 mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            Scaffold successful.
          </h2>
          <p className="text-slate-400 text-lg">
            Happy hacking! Your development environment is ready to go.
          </p>
        </div>

        {/* Live Status Panel */}
        <div className="w-full glass-panel rounded-xl overflow-hidden mb-12">
          <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-widest font-bold text-slate-500">
              Live Status Panel
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`size-2 rounded-full ${
                  allOperational
                    ? 'bg-green-500 pulse-dot'
                    : 'bg-red-500 pulse-dot-red'
                }`}
              />
              <span
                className={`text-[10px] font-mono font-bold uppercase ${
                  allOperational ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {allOperational
                  ? 'All Systems Operational'
                  : 'Service Degraded'}
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-slate-500 border-b border-white/5">
                  <th className="px-6 py-4 font-medium uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-4 font-medium uppercase tracking-wider">
                    Port
                  </th>
                  <th className="px-6 py-4 font-medium uppercase tracking-wider text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {/* Frontend */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5 text-sm font-medium text-white flex items-center gap-3">
                    <span className="text-primary">&#9632;</span>
                    Frontend (Next.js)
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-primary">
                    3000
                  </td>
                  <td className="px-6 py-5 text-right">
                    <StatusBadge status="active" />
                  </td>
                </tr>
                {/* Backend */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5 text-sm font-medium text-white flex items-center gap-3">
                    <span className="text-primary">&#9654;</span>
                    Backend (NestJS)
                    {health && (
                      <span className="text-xs text-slate-500 font-mono">
                        uptime {Math.floor(health.uptime)}s
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-primary">
                    4000
                  </td>
                  <td className="px-6 py-5 text-right">
                    <StatusBadge status={apiStatus} />
                  </td>
                </tr>
                {/* Database */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5 text-sm font-medium text-white flex items-center gap-3">
                    <span className="text-primary">&#9679;</span>
                    Database (SQLite)
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-slate-500">
                    —
                  </td>
                  <td className="px-6 py-5 text-right">
                    {apiStatus === 'checking' ? (
                      <StatusBadge status="checking" />
                    ) : health?.database === 'connected' ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white">
                        Connected
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                        Disconnected
                      </span>
                    )}
                  </td>
                </tr>
                {/* Shared Package */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-5 text-sm font-medium text-white flex items-center gap-3">
                    <span className="text-primary">&#9670;</span>
                    Shared Package
                  </td>
                  <td className="px-6 py-5 text-sm font-mono text-slate-500">
                    —
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                      Compiled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {/* Card 1: Project Structure */}
          <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-lg">&#128193;</span>
              <h4 className="font-bold text-white text-sm">
                Project Structure
              </h4>
            </div>
            <div className="bg-black/40 rounded-lg p-3 font-mono text-[11px] leading-relaxed text-slate-400 flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span>&#128194;</span>
                <span>apps/</span>
              </div>
              <div className="ml-4 flex items-center gap-2 text-slate-300">
                <span>&#128193;</span>
                <span>
                  web/{' '}
                  <span className="text-[10px] text-slate-600 opacity-80">
                    (Next.js)
                  </span>
                </span>
              </div>
              <div className="ml-4 flex items-center gap-2 mb-2 text-slate-300">
                <span>&#128193;</span>
                <span>
                  api/{' '}
                  <span className="text-[10px] text-slate-600 opacity-80">
                    (NestJS)
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>&#128194;</span>
                <span>packages/</span>
              </div>
              <div className="ml-4 flex items-center gap-2 text-slate-500">
                <span>&#128193;</span>
                <span>shared/</span>
              </div>
            </div>
          </div>

          {/* Card 2: Add a Feature */}
          <div className="glass-panel rounded-xl p-6 flex flex-col h-full border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-lg">&#10024;</span>
              <h4 className="font-bold text-white text-sm">Add a Feature</h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              Copy the prompt below and paste it into Cursor AI to instantly
              scaffold a full-stack feature:
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <div
                className="relative group bg-primary/10 border border-primary/20 rounded-lg p-3 pr-9 text-[11px] leading-relaxed text-primary/90 font-mono cursor-pointer hover:bg-primary/15 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(EXAMPLE_PROMPT);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                title="Click to copy"
              >
                &ldquo;{EXAMPLE_PROMPT}&rdquo;
                <span className="absolute top-2.5 right-2.5 text-primary/60 group-hover:text-primary transition-colors">
                  {copied ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </span>
              </div>
              <p className="text-[10px] text-slate-600 text-right">
                {copied ? 'Copied!' : 'Click to copy — then paste into Cursor AI'}
              </p>
            </div>
          </div>

          {/* Card 3: API & Docs */}
          <div className="glass-panel rounded-xl p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary text-lg">&#128214;</span>
              <h4 className="font-bold text-white text-sm">API &amp; Docs</h4>
            </div>
            <div className="space-y-3">
              <a
                className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors"
                href="https://github.com/rossjang/nenejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-slate-300">
                  Framework Overview
                </span>
                <span className="text-slate-600 group-hover:text-primary text-sm transition-colors">
                  →
                </span>
              </a>
              <a
                className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors"
                href="http://localhost:4000/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-slate-300">API Reference</span>
                <span className="text-slate-600 group-hover:text-primary text-sm transition-colors">
                  →
                </span>
              </a>
              <a
                className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors"
                href="https://github.com/rossjang/nenejs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-slate-300">
                  Deployment Guide
                </span>
                <span className="text-slate-600 group-hover:text-primary text-sm transition-colors">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full py-10 flex flex-col items-center border-t border-white/5">
        <div className="flex gap-6 mb-4">
          <a
            className="text-slate-500 hover:text-white transition-colors text-xs"
            href="https://github.com/rossjang/nenejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-slate-500 hover:text-white transition-colors text-xs"
            href="https://github.com/rossjang/nenejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className="text-slate-500 hover:text-white transition-colors text-xs"
            href="https://github.com/rossjang/nenejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Changelog
          </a>
        </div>
        <p className="text-slate-600 text-[10px] font-mono">
          Edit{' '}
          <span className="text-slate-500">apps/web/src/app/page.tsx</span> to
          customize this page
        </p>
      </footer>
    </div>
  );
}
