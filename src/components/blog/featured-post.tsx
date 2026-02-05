import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { BlogPost, CATEGORY_COLORS, CATEGORY_LABELS } from "./types";

interface FeaturedPostProps {
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

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const categoryColor = CATEGORY_COLORS[post.category];
  const categoryLabel = CATEGORY_LABELS[post.category];

  return (
    <section className="px-6 lg:px-20 pb-16">
      <div className="max-w-7xl mx-auto">
        <Link href={`/blog/${post.slug}`} className="group block">
          <article className="grid md:grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300 hover:border-white/30">
            {/* Cover Image Placeholder */}
            <div
              className="aspect-video md:aspect-auto md:h-full min-h-[300px]"
              style={{
                background: `linear-gradient(135deg, ${categoryColor}30 0%, ${categoryColor}50 100%)`,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full opacity-50"
                  style={{ backgroundColor: categoryColor }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:py-12 flex flex-col justify-center">
              {/* Featured Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded bg-white/10 text-white">
                  Featured
                </span>
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    backgroundColor: `${categoryColor}20`,
                    color: categoryColor,
                  }}
                >
                  {categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black mb-4 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <User className="w-4 h-4 text-slate-400" />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span>•</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                <span>Read article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}
