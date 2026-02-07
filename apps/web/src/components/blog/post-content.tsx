import { BlogPost, CATEGORY_COLORS } from "./types";

interface PostContentProps {
  post: BlogPost;
}

export default function PostContent({ post }: PostContentProps) {
  const categoryColor = CATEGORY_COLORS[post.category];

  return (
    <article className="px-6 lg:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Cover Image Placeholder */}
        <div
          className="aspect-video w-full rounded-2xl mb-12"
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
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-4">
            Introduction
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-4">
            Getting Started
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          {/* Code Block Placeholder */}
          <div className="bg-[#111111] border border-white/10 rounded-xl p-6 my-8 font-mono text-sm">
            <div className="flex items-center gap-2 text-slate-500 mb-4">
              <span className="text-xs uppercase tracking-wider">
                Terminal
              </span>
            </div>
            <pre className="text-slate-300 overflow-x-auto">
              <code>{`npm create nene@latest my-app
cd my-app
npm run dev`}</code>
            </pre>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h2 className="text-white text-2xl font-bold mt-12 mb-4">
            Key Features
          </h2>
          <ul className="text-slate-400 space-y-3 mb-6 list-disc list-inside">
            <li>
              Unified full-stack development with merged Next.js and NestJS
              patterns
            </li>
            <li>AI-native optimization for performance and developer experience</li>
            <li>Zero-config setup with sensible defaults</li>
            <li>Built-in TypeScript support with enhanced type inference</li>
            <li>Seamless deployment to any cloud platform</li>
          </ul>

          <h2 className="text-white text-2xl font-bold mt-12 mb-4">
            Conclusion
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio.
          </p>
        </div>
      </div>
    </article>
  );
}
