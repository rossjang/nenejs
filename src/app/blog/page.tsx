"use client";

import { useState } from "react";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import {
  BlogHero,
  FeaturedPost,
  CategoryFilter,
  PostGrid,
  samplePosts,
  getFeaturedPost,
  BlogPost,
} from "@/components/blog";

type CategoryOption = BlogPost["category"] | "all";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryOption>("all");
  const featuredPost = getFeaturedPost();

  // Filter posts by category (excluding featured post from grid)
  const filteredPosts = samplePosts.filter((post) => {
    // Exclude featured post from the grid
    if (post.featured) return false;
    // Filter by category
    if (activeCategory === "all") return true;
    return post.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <BlogHero />
        {featuredPost && <FeaturedPost post={featuredPost} />}
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <PostGrid posts={filteredPosts} />
      </main>
      <Footer />
    </div>
  );
}
