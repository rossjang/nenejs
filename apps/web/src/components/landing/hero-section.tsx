"use client";

import { Terminal, Copy } from "lucide-react";
import { useState } from "react";
import CodeBlock from "./code-block";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const command = "npm create nene@latest";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now in Public Alpha
        </div>

        {/* Heading */}
        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-6">
          The AI-Native Stack <br />
          <span className="fusion-gradient-text">You Already Know</span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12">
          Merge Next.js and NestJS for a seamless full-stack experience.
          Shared types, auto-generated hooks, and built-in rules for Cursor,
          GitHub Copilot, Claude Code, and OpenAI Codex.
        </p>

        {/* Command input */}
        <div className="w-full max-w-xl mb-20">
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl items-center gap-2">
            <div className="flex-1 flex items-center px-4 gap-3">
              <Terminal className="text-slate-500 text-lg" />
              <code className="text-sm md:text-base text-slate-300 font-mono">
                {command}
              </code>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-3 fusion-gradient text-white font-bold rounded-lg hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <Copy className="text-sm" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* CodeBlock component */}
        <CodeBlock />
      </div>
    </section>
  );
}
