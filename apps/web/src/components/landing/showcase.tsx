import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, type ShowcaseProject } from "@/lib/showcase";

const categoryGradients: Record<string, string> = {
  ai: "from-blue-500/30 via-cyan-500/20 to-blue-600/30",
  saas: "from-emerald-500/30 via-teal-500/20 to-green-600/30",
  ecommerce: "from-amber-500/30 via-orange-500/20 to-yellow-600/30",
  opensource: "from-violet-500/30 via-purple-500/20 to-fuchsia-600/30",
  devtools: "from-[#0667ef]/30 via-[#E0234E]/20 to-purple-500/30",
  creative: "from-orange-500/30 via-amber-500/20 to-orange-600/30",
};

function getGradient(category: string): string {
  return categoryGradients[category] || "from-slate-500/20 via-slate-600/20 to-slate-700/20";
}

export default async function Showcase() {
  const projects = await getFeaturedProjects();

  // Fallback if no projects from API
  const items: (ShowcaseProject | { name: string; description: string; category: string })[] =
    projects.length > 0
      ? projects.slice(0, 2)
      : [
          { name: "nene.js Docs", description: "This documentation site - built with nene.js", category: "devtools" },
          { name: "Your Project", description: "Submit your nene.js project to be featured", category: "opensource" },
        ];

  return (
    <section className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-white text-3xl font-bold">
              Built with nene.js
            </h3>
          <p className="text-slate-500 mt-2">
            Full-stack apps built with shared types and auto-generated hooks.
          </p>
          </div>
          <button className="text-white text-sm font-medium hover:underline flex items-center gap-1 transition-colors cursor-pointer">
            View showcase <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const image = "image" in item ? item.image : undefined;
            return (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video border border-white/10 hover:border-white/20 transition-colors"
              >
                {image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(item.category)}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
