import { BlogPost, CATEGORY_COLORS } from "./types";

interface PostContentProps {
  post: BlogPost;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={key++} className="bg-[#111111] border border-white/10 rounded-xl p-6 my-8 font-mono text-sm">
          <pre className="text-slate-300 overflow-x-auto">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-white text-2xl font-bold mt-12 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("# ")) {
      // Skip top-level headings (redundant with PostHeader)
      i++;
      continue;
    }

    // Unordered list items
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="text-slate-400 space-y-3 mb-6 list-disc list-inside">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Bold text inline
    const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Regular paragraphs
    elements.push(
      <p
        key={key++}
        className="text-slate-400 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    );
    i++;
  }

  return elements;
}

export default function PostContent({ post }: PostContentProps) {
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <article className="px-6 lg:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Cover Image / Placeholder */}
        <div
          className="aspect-video w-full rounded-2xl mb-12"
          style={{
            background: post.coverImage
              ? `url(${post.coverImage}) center/cover`
              : `linear-gradient(135deg, ${categoryColor}30 0%, ${categoryColor}50 100%)`,
          }}
        >
          {!post.coverImage && (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-24 h-24 rounded-full opacity-50"
                style={{ backgroundColor: categoryColor }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {post.content ? (
            renderMarkdown(post.content)
          ) : (
            <p className="text-slate-500 italic">Content is not available yet.</p>
          )}
        </div>
      </div>
    </article>
  );
}
