"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { BlogCategoryTabs } from "@/components/sections/blog/BlogCategoryTabs";
import { BlogFeaturedPost } from "@/components/sections/blog/BlogFeaturedPost";
import { BlogPagination } from "@/components/sections/blog/BlogPagination";
import { BlogPostGrid } from "@/components/sections/blog/BlogPostGrid";
import { BlogSearchInput } from "@/components/sections/blog/BlogSearchInput";
import {
  BLOG_PAGE_SIZE,
  blogPosts,
  getFeaturedBlogPost,
  type BlogCategory,
} from "@/lib/blog-posts";

export function BlogListingHero() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Blog
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Insights from the Anhloom team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Practical notes on AI, engineering, cloud, and building products
            that ship.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function BlogListingContent() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = getFeaturedBlogPost();

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      if (post.featured) {
        return false;
      }

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / BLOG_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedPosts = filteredPosts.slice(
    (safePage - 1) * BLOG_PAGE_SIZE,
    safePage * BLOG_PAGE_SIZE,
  );

  return (
    <>
      {featuredPost ? <BlogFeaturedPost post={featuredPost} /> : null}
      <Section>
        <Container>
          <div className="mb-8 flex flex-col gap-4 laptop:flex-row laptop:items-center laptop:justify-between">
            <BlogCategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={(category) => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
            />
            <BlogSearchInput
              value={searchQuery}
              onChange={(value) => {
                setSearchQuery(value);
                setCurrentPage(1);
              }}
              className="laptop:max-w-xs"
            />
          </div>
          <BlogPostGrid posts={paginatedPosts} />
          <BlogPagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-10"
          />
        </Container>
      </Section>
    </>
  );
}
