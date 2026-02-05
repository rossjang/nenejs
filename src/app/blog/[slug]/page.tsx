import { notFound } from "next/navigation";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { PostHeader, PostContent, getPostBySlug, samplePosts } from "@/components/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  return samplePosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | nene.js Blog",
    };
  }

  return {
    title: `${post.title} | nene.js Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <PostHeader post={post} />
        <PostContent post={post} />
      </main>
      <Footer />
    </div>
  );
}
