"use client";

import { useState } from "react";
import { BlogPost } from "./types";
import FeaturedPost from "./featured-post";
import CategoryFilter from "./category-filter";
import PostGrid from "./post-grid";

type CategoryOption = BlogPost["category"] | "all";

interface BlogContentProps {
  posts: BlogPost[];
  featuredPost: BlogPost | null;
}

export default function BlogContent({ posts, featuredPost }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryOption>("all");

  const filteredPosts = posts.filter((post) => {
    if (post.featured) return false;
    if (activeCategory === "all") return true;
    return post.category === activeCategory;
  });

  return (
    <>
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <PostGrid posts={filteredPosts} />
    </>
  );
}
