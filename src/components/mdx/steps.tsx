"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  children: ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <div className="my-8 ml-4 border-l-2 border-slate-700 pl-6 [counter-reset:step]">
      {children}
    </div>
  );
}

interface StepProps {
  title: string;
  children: ReactNode;
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="relative pb-8 last:pb-0 [counter-increment:step]">
      {/* Step number */}
      <div className="absolute -left-8.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 border-2 border-slate-700 text-sm font-bold text-white before:content-[counter(step)]" />

      {/* Content */}
      <div>
        <h4 className="mb-2 text-lg font-semibold text-white">{title}</h4>
        <div className="text-slate-400 text-sm [&>p]:mb-3">{children}</div>
      </div>
    </div>
  );
}

// Alternative numbered list style
interface StepListProps {
  children: ReactNode;
  start?: number;
}

export function StepList({ children, start = 1 }: StepListProps) {
  return (
    <ol
      className="my-6 space-y-4 list-none"
      style={{ counterReset: `step ${start - 1}` }}
    >
      {children}
    </ol>
  );
}

interface StepItemProps {
  children: ReactNode;
}

export function StepItem({ children }: StepItemProps) {
  return (
    <li className="relative pl-10 [counter-increment:step]">
      <span className="absolute left-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-400 before:content-[counter(step)]" />
      <div className="text-slate-300">{children}</div>
    </li>
  );
}
