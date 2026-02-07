"use client";

import { useEffect, useCallback } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import type { ShowcaseProject } from "@/lib/showcase";

interface ShowcaseDetailProps {
  project: ShowcaseProject;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  ai: "#0070F3",
  saas: "#10B981",
  ecommerce: "#F59E0B",
  opensource: "#8B5CF6",
  devtools: "#EC4899",
  creative: "#F97316",
};

const categoryGradients: Record<string, string> = {
  ai: "from-blue-500/30 via-cyan-500/20 to-blue-600/30",
  saas: "from-emerald-500/30 via-teal-500/20 to-green-600/30",
  ecommerce: "from-amber-500/30 via-orange-500/20 to-yellow-600/30",
  opensource: "from-violet-500/30 via-purple-500/20 to-fuchsia-600/30",
  devtools: "from-pink-500/30 via-rose-500/20 to-pink-600/30",
  creative: "from-orange-500/30 via-amber-500/20 to-orange-600/30",
};

export default function ShowcaseDetail({
  project,
  onClose,
}: ShowcaseDetailProps) {
  const color = categoryColors[project.category] || "#6B7280";
  const gradient =
    categoryGradients[project.category] ||
    "from-gray-500/30 via-slate-500/20 to-gray-600/30";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl bg-slate-900 rounded-2xl border border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image */}
        <div className="relative aspect-video">
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${project.image}")` }}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 -mt-12 relative">
          {/* Category Badge */}
          <span
            className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4"
            style={{
              backgroundColor: `${color}20`,
              color: color,
              border: `1px solid ${color}40`,
            }}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>

          <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
