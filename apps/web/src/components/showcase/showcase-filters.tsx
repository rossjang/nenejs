"use client";

export type Category = "all" | "ai" | "saas" | "ecommerce" | "opensource";

interface ShowcaseFiltersProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI Apps" },
  { id: "saas", label: "SaaS" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "opensource", label: "Open Source" },
];

export default function ShowcaseFilters({
  activeCategory,
  onCategoryChange,
}: ShowcaseFiltersProps) {
  return (
    <div className="flex justify-center px-6">
      <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 rounded-full border border-white/10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
              activeCategory === category.id
                ? "bg-white text-black"
                : "text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
