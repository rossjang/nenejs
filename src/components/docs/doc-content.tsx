import { ReactNode } from "react";
import { LOCALE_NAMES, type Locale } from "@/lib/i18n";

interface DocContentProps {
  title: string;
  description?: string;
  locale?: Locale;
  children: ReactNode;
}

export function DocContent({ title, description, locale, children }: DocContentProps) {
  return (
    <article className="flex-1 min-w-0 max-w-3xl py-8 px-6 lg:px-8">
      <header className="mb-8">
        {locale && locale !== "en" && (
          <div className="mb-4 inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-xs text-blue-400 font-medium">
              {LOCALE_NAMES[locale]}
            </span>
          </div>
        )}
        <h1 className="text-4xl font-black text-white mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
      </header>
      <div className="prose prose-invert prose-slate max-w-none">
        {children}
      </div>
    </article>
  );
}

// Reusable components for documentation content
export function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2
        id={id}
        className="text-2xl font-bold text-white mb-4 scroll-mt-24"
      >
        {title}
      </h2>
      <div className="text-slate-400 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function DocSubSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <h3
        id={id}
        className="text-xl font-semibold text-white mb-3 scroll-mt-24"
      >
        {title}
      </h3>
      <div className="text-slate-400 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function CodeBlock({
  language,
  code,
  filename,
}: {
  language: string;
  code: string;
  filename?: string;
}) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0D0D0D]">
      {filename && (
        <div className="px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-xs text-slate-500 font-mono">{filename}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language} text-sm font-mono text-slate-300`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "tip" | "danger";
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    info: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-400",
    },
    warning: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      text: "text-yellow-400",
    },
    tip: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
    },
    danger: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      text: "text-red-400",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`my-6 p-4 rounded-lg border ${style.bg} ${style.border}`}
    >
      {title && (
        <p className={`font-semibold mb-2 ${style.text}`}>{title}</p>
      )}
      <div className="text-slate-300 text-sm">{children}</div>
    </div>
  );
}
