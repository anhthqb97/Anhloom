import { notFound } from "next/navigation";

import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { ArticleBody } from "@/components/sections/blog/ArticleBody";
import { ArticleHero } from "@/components/sections/blog/ArticleHero";
import { ArticleRelated } from "@/components/sections/blog/ArticleRelated";
import { ArticleShare } from "@/components/sections/blog/ArticleShare";
import { ArticleTOC } from "@/components/sections/blog/ArticleTOC";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/json-ld";
import { getAllBlogPostSlugs, getBlogPostBySlug } from "@/lib/resolve-blog";
import { buildSiteMetadata } from "@/lib/seo";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return buildSiteMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${slug}`,
          author: post.author,
          publishedAt: post.publishedAt,
        })}
      />
      <ArticleHero post={post} />
      <Section>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-10 laptop:grid-cols-[220px_1fr]">
            <ArticleTOC sections={post.sections} className="sticky top-24 self-start" />
            <div className="space-y-10">
              <ArticleBody sections={post.sections} />
              <ArticleShare post={post} />
            </div>
          </div>
        </Container>
      </Section>
      <ArticleRelated post={post} />
    </>
  );
}
