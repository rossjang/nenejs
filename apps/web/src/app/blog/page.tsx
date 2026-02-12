import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { BlogHero } from "@/components/blog";
import BlogContent from "@/components/blog/blog-content";
import { fetchBlogPosts, getFeaturedPost } from "@/components/blog/data";

export default async function BlogPage() {
  const [posts, featuredPost] = await Promise.all([
    fetchBlogPosts(),
    getFeaturedPost(),
  ]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <BlogHero />
        <BlogContent posts={posts} featuredPost={featuredPost} />
      </main>
      <Footer />
    </div>
  );
}
