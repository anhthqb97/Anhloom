import Link from "next/link";

import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Card } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/blog-posts";

type BlogPostCardProps = {
  post: BlogPost;
  className?: string;
};

export type { BlogPostCardProps };

export function BlogPostCard({ post, className }: BlogPostCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <PlaceholderMedia alt={`${post.title} cover`} className="aspect-video w-full" />
      <div className="p-6">
        <Pill tone="primary">{post.category}</Pill>
        <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-body-sm text-text-secondary">{post.excerpt}</p>
        <p className="mt-3 text-body-sm text-text-muted">
          {post.author} · {post.readingTime}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          Read Article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}
