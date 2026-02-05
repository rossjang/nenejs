"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { EmailModal } from "./email-modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md px-6 lg:px-20 py-4">
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
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/docs"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/features"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/showcase"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="/blog"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Blog
            </Link>
          </nav>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-lg transition-all border border-white/10 cursor-pointer"
            >
              Join Waitlist
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 fusion-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
      <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
