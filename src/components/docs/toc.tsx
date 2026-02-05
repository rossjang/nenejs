"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TocItem[];
}

export function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block w-52 shrink-0">
      <div className="sticky top-20 pl-6">
        <h4 className="text-slate-500 text-xs uppercase font-bold tracking-wider mb-4">
          On this page
        </h4>
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`block text-left w-full text-sm transition-colors py-1 border-l-2 pl-3 ${
                item.level === 3 ? "ml-3" : ""
              } ${
                activeId === item.id
                  ? "text-white border-blue-500"
                  : "text-slate-500 border-transparent hover:text-slate-300 hover:border-white/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
