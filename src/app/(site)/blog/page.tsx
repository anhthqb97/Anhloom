import {
  BlogListingContent,
  BlogListingHero,
} from "@/components/sections/blog/BlogListing";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Blog",
  description:
    "Anhloom technical blog — AI, engineering, cloud, DevOps, and product insights from our team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <BlogListingHero />
      <BlogListingContent />
    </>
  );
}
