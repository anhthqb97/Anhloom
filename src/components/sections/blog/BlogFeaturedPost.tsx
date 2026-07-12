import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import type { BlogPost } from "@/lib/blog-posts";

type BlogFeaturedPostProps = {
  post: BlogPost;
};

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <Section>
      <Container>
        <Card className="overflow-hidden p-0 laptop:grid laptop:grid-cols-2">
          <div className="aspect-video w-full bg-gradient-to-br from-primary-200 via-accent-100 to-secondary-500/20 laptop:aspect-auto laptop:min-h-[320px]" />
          <div className="flex flex-col justify-center p-8 laptop:p-10">
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Featured
            </p>
            <Pill tone="primary" className="mt-4 w-fit">
              {post.category}
            </Pill>
            <h2 className="mt-4 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
              {post.title}
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">{post.excerpt}</p>
            <p className="mt-4 text-body-sm text-text-muted">
              {post.author} · {post.publishedAt} · {post.readingTime}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-1 text-body-md font-medium text-primary-600 hover:text-primary-700"
            >
              Read Featured Article
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
