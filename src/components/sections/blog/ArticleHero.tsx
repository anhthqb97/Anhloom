import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import type { BlogPost } from "@/lib/blog-posts";

type ArticleHeroProps = {
  post: BlogPost;
};

export function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl">
          <Pill tone="primary">{post.category}</Pill>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {post.title}
          </h1>
          <p className="mt-4 text-body-lg text-text-secondary">{post.excerpt}</p>
          <div className="mt-6 aspect-video w-full rounded-xl bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10" />
          <div className="mt-6 flex flex-wrap gap-4 text-body-sm text-text-muted">
            <span>{post.author}</span>
            <span>{post.authorRole}</span>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
