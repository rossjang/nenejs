import { BlogPost } from "./types";
import PostCard from "./post-card";

interface PostGridProps {
  posts: BlogPost[];
}

export default function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">No posts found in this category.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 lg:px-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
