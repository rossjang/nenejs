import Link from "next/link";
import { Clock, User } from "lucide-react";
import { BlogPost, CATEGORY_COLORS, CATEGORY_LABELS } from "./types";

interface PostCardProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostCard({ post }: PostCardProps) {
  const categoryColor = CATEGORY_COLORS[post.category];
  const categoryLabel = CATEGORY_LABELS[post.category];

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/30 hover:translate-y-[-2px]">
        {/* Cover Image Placeholder */}
        <div
          className="aspect-video w-full"
          style={{
            background: `linear-gradient(135deg, ${categoryColor}20 0%, ${categoryColor}40 100%)`,
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full opacity-50"
              style={{ backgroundColor: categoryColor }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Tag */}
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
            }}
          >
            {categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-white text-lg font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
