import { ArrowRight } from "lucide-react";

interface ShowcaseItem {
  title: string;
  description: string;
  imageUrl?: string;
  gradient?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "nene.js Docs",
    description: "This documentation site - built with nene.js",
    gradient: "from-[#0667ef]/30 via-[#E0234E]/20 to-purple-500/30",
  },
  {
    title: "Your Project",
    description: "Submit your nene.js project to be featured",
    gradient: "from-slate-500/20 via-slate-600/20 to-slate-700/20",
  },
];

export default function Showcase() {
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
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video border border-white/10 hover:border-white/20 transition-colors"
            >
              {item.imageUrl ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${item.imageUrl}")` }}
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient || "from-blue-500/20 via-purple-500/20 to-pink-500/20"}`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
