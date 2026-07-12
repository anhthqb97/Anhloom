"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BlogPostCard } from "@/components/BlogPostCard";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { fetchRecommendations } from "@/lib/ai-api";
import { getBlogPostBySlug, type BlogPost } from "@/lib/blog-posts";

type ArticleRelatedProps = {
  post: BlogPost;
};

export function ArticleRelated({ post }: ArticleRelatedProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    void fetchRecommendations(post.slug).then((results) => {
      const mapped = results
        .map((result) => getBlogPostBySlug(result.slug))
        .filter((item): item is BlogPost => Boolean(item));
      setRelatedPosts(mapped);
    });
  }, [post.slug]);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <Section className="bg-bg-muted">
      <Container>
        <h2 className="text-heading-xl font-semibold text-text-primary">
          You might also like
        </h2>
        <div className="mt-8 grid gap-6 laptop:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogPostCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/blog" className="text-body-sm font-medium text-primary-600">
            Browse all articles →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
