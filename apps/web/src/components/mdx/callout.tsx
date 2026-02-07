"use client";

import { ReactNode } from "react";
import { Info, AlertTriangle, AlertCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "error" | "tip";
  title?: string;
  children: ReactNode;
}

const styles = {
  info: {
    container: "border-blue-500/30 bg-blue-500/10",
    icon: "text-blue-400",
    title: "text-blue-400",
    IconComponent: Info,
  },
  warning: {
    container: "border-yellow-500/30 bg-yellow-500/10",
    icon: "text-yellow-400",
    title: "text-yellow-400",
    IconComponent: AlertTriangle,
  },
  error: {
    container: "border-red-500/30 bg-red-500/10",
    icon: "text-red-400",
    title: "text-red-400",
    IconComponent: AlertCircle,
  },
  tip: {
    container: "border-green-500/30 bg-green-500/10",
    icon: "text-green-400",
    title: "text-green-400",
    IconComponent: Lightbulb,
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const style = styles[type];
  const Icon = style.IconComponent;

  return (
    <div
      className={cn("my-6 flex gap-3 rounded-lg border p-4", style.container)}
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", style.icon)} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className={cn("font-semibold mb-1", style.title)}>{title}</p>
        )}
        <div className="text-slate-300 text-sm [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}
