import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { BlogPost, CATEGORY_COLORS, CATEGORY_LABELS } from "./types";

interface PostHeaderProps {
  post: BlogPost;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostHeader({ post }: PostHeaderProps) {
  const categoryColor = CATEGORY_COLORS[post.category];
  const categoryLabel = CATEGORY_LABELS[post.category];

  return (
    <header className="pt-12 pb-8 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Blog</span>
        </Link>

        {/* Category & Reading Time */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
            }}
          >
            {categoryLabel}
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
            <User className="w-6 h-6 text-slate-400" />
          </div>
          <div>
            <p className="text-white font-semibold">{post.author.name}</p>
            <p className="text-slate-500 text-sm">
              {post.author.role} • {formatDate(post.publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
