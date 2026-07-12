import Link from "next/link";

import { Card } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { cn } from "@/lib/cn";
import type { BlogPost } from "@/lib/blog-posts";

type BlogPostCardProps = {
  post: BlogPost;
  className?: string;
};

export function BlogPostCard({ post, className }: BlogPostCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg",
        className,
      )}
    >
      <div className="aspect-video w-full bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10" />
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
