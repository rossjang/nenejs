import { ExternalLink } from "lucide-react";
import type { ShowcaseProject } from "@/lib/showcase";
import {
  SHOWCASE_CATEGORY_COLORS as categoryColors,
  SHOWCASE_CATEGORY_LABELS as categoryLabels,
  SHOWCASE_CATEGORY_GRADIENTS as categoryGradients,
} from "@/lib/constants/showcase";

interface ShowcaseCardProps {
  project: ShowcaseProject;
  onClick?: () => void;
}

export default function ShowcaseCard({ project, onClick }: ShowcaseCardProps) {
  const color = categoryColors[project.category] || "#6B7280";
  const label = categoryLabels[project.category] || project.category;
  const gradient =
    categoryGradients[project.category] ||
    "from-gray-500/30 via-slate-500/20 to-gray-600/30";

  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div
        className="relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/[0.03]"
        style={{
          ["--category-color" as string]: color,
        }}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url("${project.image}")` }}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-105`}
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                border: `1px solid ${color}40`,
              }}
            >
              {label}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-12">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/40">
                Featured
              </span>
            </div>
          )}

          {/* External Link Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white/90 transition-colors">
            {project.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-slate-400 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
