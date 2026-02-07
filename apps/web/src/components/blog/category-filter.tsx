"use client";

import { BlogPost, CATEGORY_COLORS, CATEGORY_LABELS } from "./types";

type CategoryOption = BlogPost["category"] | "all";

interface CategoryFilterProps {
  activeCategory: CategoryOption;
  onCategoryChange: (category: CategoryOption) => void;
}

const categories: CategoryOption[] = [
  "all",
  "announcement",
  "tutorial",
  "engineering",
  "community",
];

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="px-6 lg:px-20 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const color =
              category === "all" ? "#ffffff" : CATEGORY_COLORS[category];
            const label =
              category === "all" ? "All Posts" : CATEGORY_LABELS[category];

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-white/30 text-white"
                    : "bg-transparent border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
                style={
                  isActive && category !== "all"
                    ? {
                        borderColor: `${color}50`,
                        backgroundColor: `${color}15`,
                        color: color,
                      }
                    : undefined
                }
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
