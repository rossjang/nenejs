"use client";

import { useState, useCallback } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = "text",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [children]);

  const lines = children.trim().split("\n");
  const isShell =
    language === "bash" || language === "sh" || language === "shell";

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0D0D0D]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          {isShell && <Terminal className="h-4 w-4 text-slate-500" />}
          {filename ? (
            <span className="text-xs text-slate-400 font-mono">{filename}</span>
          ) : (
            <span className="text-xs text-slate-500 font-mono">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white transition-colors rounded hover:bg-white/10"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code
          className={cn(
            "text-sm font-mono text-slate-300",
            `language-${language}`
          )}
        >
          {showLineNumbers ? (
            <div className="table">
              {lines.map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell text-right pr-4 text-slate-600 select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </div>
          ) : (
            children.trim()
          )}
        </code>
      </pre>
    </div>
  );
}

// Pre component for MDX - wraps code elements
interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export function Pre({ children, ...props }: PreProps) {
  // Check if children is a code element with props
  if (
    children &&
    typeof children === "object" &&
    "props" in children &&
    children.props
  ) {
    const { className, children: code } = children.props as {
      className?: string;
      children?: string;
    };
    const language = className?.replace(/language-/, "") || "text";
    return <CodeBlock language={language}>{String(code || "")}</CodeBlock>;
  }

  // Fallback to regular pre
  return <pre {...props}>{children}</pre>;
}
