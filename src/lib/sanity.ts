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

import type { BlogPost } from "@/lib/blog-posts";
import type { ProjectDetail } from "@/lib/project-details";
import type { ServiceDetail } from "@/lib/service-details";
import type { SolutionDetail } from "@/lib/solution-details";

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

export type CmsSolution = {
  title: string;
  slug: string;
  headline?: string;
  tagline?: string;
  problems?: SolutionDetail["problems"];
  solutionSummary?: string;
  architectureNote?: string;
  features?: SolutionDetail["features"];
  benefits?: string[];
  integrations?: string[];
};

export function mapCmsSolutionToDetail(cms: CmsSolution): SolutionDetail {
  return {
    slug: cms.slug,
    title: cms.title,
    headline: cms.headline ?? cms.title,
    tagline: cms.tagline ?? "",
    problems: cms.problems ?? [],
    solutionSummary: cms.solutionSummary ?? "",
    architectureNote: cms.architectureNote ?? "",
    features: cms.features ?? [],
    benefits: cms.benefits ?? [],
    integrations: cms.integrations ?? [],
  };
}

export async function getCmsSolutionBySlug(
  slug: string,
): Promise<CmsSolution | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<CmsSolution | null>(
    `*[_type == "solution" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      headline,
      tagline,
      problems,
      solutionSummary,
      architectureNote,
      features,
      benefits,
      integrations
    }`,
    { slug },
  );
}

export type CmsProject = {
  title: string;
  slug: string;
  category?: ProjectDetail["category"];
  summary?: string;
  technologies?: string;
  result?: string;
  overview?: string;
  industry?: string;
  challenges?: string[];
  solution?: string;
  architectureNote?: string;
  technologyList?: string[];
  results?: ProjectDetail["results"];
};

export function mapCmsProjectToDetail(cms: CmsProject): ProjectDetail {
  return {
    slug: cms.slug,
    title: cms.title,
    category: cms.category ?? "SaaS",
    technologies: cms.technologies ?? "",
    result: cms.result ?? "",
    summary: cms.summary ?? "",
    overview: cms.overview ?? "",
    industry: cms.industry ?? "",
    challenges: cms.challenges ?? [],
    solution: cms.solution ?? "",
    architectureNote: cms.architectureNote ?? "",
    technologyList: cms.technologyList ?? [],
    results: cms.results ?? [],
  };
}

export async function getCmsProjectBySlug(
  slug: string,
): Promise<CmsProject | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<CmsProject | null>(
    `*[_type == "project" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      category,
      summary,
      technologies,
      result,
      overview,
      industry,
      challenges,
      solution,
      architectureNote,
      technologyList,
      results
    }`,
    { slug },
  );
}

export type CmsBlogPost = {
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  authorRole?: string;
  category?: BlogPost["category"];
  publishedAt?: string;
  readingTime?: string;
  featured?: boolean;
  tags?: string[];
  sections?: BlogPost["sections"];
};

export function mapCmsBlogPostToDetail(cms: CmsBlogPost): BlogPost {
  return {
    slug: cms.slug,
    title: cms.title,
    excerpt: cms.excerpt ?? "",
    author: cms.author ?? "Anhloom",
    authorRole: cms.authorRole ?? "Engineering",
    category: cms.category ?? "Engineering",
    publishedAt: cms.publishedAt?.slice(0, 10) ?? "",
    readingTime: cms.readingTime ?? "5 min read",
    featured: cms.featured,
    tags: cms.tags ?? [],
    sections: cms.sections ?? [],
  };
}

export async function getCmsBlogPostBySlug(
  slug: string,
): Promise<CmsBlogPost | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  return client.fetch<CmsBlogPost | null>(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      excerpt,
      author,
      authorRole,
      category,
      publishedAt,
      readingTime,
      featured,
      tags,
      sections
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
