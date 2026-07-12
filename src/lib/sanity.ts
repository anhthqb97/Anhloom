import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

type SanityImageSource = Parameters<
  ReturnType<typeof imageUrlBuilder>["image"]
>[0];

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

export const isSanityConfigured = Boolean(projectId);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export type HeroSection = {
  _type: "heroSection";
  eyebrow?: string;
  headline?: string;
  subtext?: string;
};

export type RichTextSection = {
  _type: "richTextSection";
  heading?: string;
  body?: string;
};

export type PageSection = HeroSection | RichTextSection;

export type CmsPage = {
  title: string;
  slug: string;
  sections?: PageSection[];
  seo?: {
    title?: string;
    description?: string;
  };
};

export type SiteSettings = {
  title?: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
};

export async function getPageBySlug(slug: string): Promise<CmsPage | null> {
  if (!isSanityConfigured) {
    return null;
  }

  return sanityClient.fetch<CmsPage | null>(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      sections,
      seo
    }`,
    { slug },
  );
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!isSanityConfigured) {
    return null;
  }

  return sanityClient.fetch<SiteSettings | null>(
    `*[_type == "siteSettings"][0]{
      title,
      tagline,
      contactEmail,
      contactPhone,
      address
    }`,
  );
}

export function getHeroSection(page: CmsPage | null): HeroSection | null {
  const section = page?.sections?.find(
    (item): item is HeroSection => item._type === "heroSection",
  );

  return section ?? null;
}

export function getRichTextSection(
  page: CmsPage | null,
  index = 0,
): RichTextSection | null {
  const sections =
    page?.sections?.filter(
      (item): item is RichTextSection => item._type === "richTextSection",
    ) ?? [];

  return sections[index] ?? null;
}
