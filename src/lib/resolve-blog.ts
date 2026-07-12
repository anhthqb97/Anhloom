import {
  getBlogPostBySlug as getStaticBlogPostBySlug,
  getAllBlogPostSlugs as getStaticBlogPostSlugs,
  type BlogPost,
} from "@/lib/blog-posts";
import {
  getCmsBlogPostBySlug,
  mapCmsBlogPostToDetail,
} from "@/lib/sanity";

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const cmsPost = await getCmsBlogPostBySlug(slug);
  if (cmsPost) {
    return mapCmsBlogPostToDetail(cmsPost);
  }
  return getStaticBlogPostBySlug(slug);
}

export function getAllBlogPostSlugs(): string[] {
  return getStaticBlogPostSlugs();
}
