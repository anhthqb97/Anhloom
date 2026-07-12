import { BlogPostCard } from "@/components/BlogPostCard";
import type { BlogPost } from "@/lib/blog-posts";

type BlogPostGridProps = {
  posts: BlogPost[];
};

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <div className="grid gap-6 laptop:grid-cols-3">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
