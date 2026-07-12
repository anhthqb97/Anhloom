import { BlogPostCard } from "@/components/BlogPostCard";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { getRelatedBlogPosts, type BlogPost } from "@/lib/blog-posts";

type ArticleRelatedProps = {
  post: BlogPost;
};

export function ArticleRelated({ post }: ArticleRelatedProps) {
  const relatedPosts = getRelatedBlogPosts(post.slug);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <Section className="bg-bg-muted">
      <Container>
        <h2 className="text-heading-xl font-semibold text-text-primary">
          Related articles
        </h2>
        <div className="mt-8 grid gap-6 laptop:grid-cols-3">
          {relatedPosts.map((relatedPost) => (
            <BlogPostCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
