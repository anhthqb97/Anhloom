import { getBlogPostBySlug, type BlogPost } from "@/lib/blog-posts";

export type BlogPostSeedDocument = {
  _type: "blogPost";
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  excerpt: string;
  author: string;
  authorRole: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  sections: BlogPost["sections"];
};

export function toBlogPostSeed(post: BlogPost): BlogPostSeedDocument {
  return {
    _type: "blogPost",
    _id: `blogPost-${post.slug}`,
    title: post.title,
    slug: { _type: "slug", current: post.slug },
    excerpt: post.excerpt,
    author: post.author,
    authorRole: post.authorRole,
    category: post.category,
    publishedAt: `${post.publishedAt}T09:00:00.000Z`,
    readingTime: post.readingTime,
    featured: post.featured,
    tags: post.tags,
    sections: post.sections,
  };
}

export function getBlogPostSeed(
  slug: string,
): BlogPostSeedDocument | undefined {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return undefined;
  }
  return toBlogPostSeed(post);
}
