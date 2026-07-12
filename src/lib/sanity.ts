import imageUrlBuilder from "@sanity/image-url";
import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = "2024-01-01";

export const isSanityConfigured = Boolean(projectId);

function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured) {
    return null;
  }

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    token: process.env.SANITY_API_READ_TOKEN,
  });
}

type SanityImageSource = Parameters<
  ReturnType<typeof imageUrlBuilder>["image"]
>[0];

export function urlFor(source: SanityImageSource) {
  const client = getSanityClient();
  if (!client) {
    throw new Error("Sanity client is not configured.");
  }

  return imageUrlBuilder(client).image(source);
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

import type { ServiceDetail } from "@/lib/service-details";

export type CmsService = {
  title: string;
  slug: string;
  tagline?: string;
  overviewHeading?: string;
  overview?: string;
  benefits?: ServiceDetail["benefits"];
  features?: ServiceDetail["features"];
  technologies?: string[];
  workflow?: string[];
  faq?: ServiceDetail["faq"];
};

export function mapCmsServiceToDetail(cms: CmsService): ServiceDetail {
  return {
    slug: cms.slug,
    title: cms.title,
    tagline: cms.tagline ?? "",
    overviewHeading: cms.overviewHeading ?? cms.title,
    overviewBody: cms.overview ?? "",
    benefits: cms.benefits ?? [],
    features: cms.features ?? [],
    technologies: cms.technologies ?? [],
    workflow: cms.workflow ?? [],
    faq: cms.faq ?? [],
  };
}

export async function getCmsServiceBySlug(
  slug: string,
): Promise<CmsService | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<CmsService | null>(
    `*[_type == "service" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      tagline,
      overviewHeading,
      overview,
      benefits,
      features,
      technologies,
      workflow,
      faq
    }`,
    { slug },
  );
}

export async function getPageBySlug(slug: string): Promise<CmsPage | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<CmsPage | null>(
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
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<SiteSettings | null>(
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
