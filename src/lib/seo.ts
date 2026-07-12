import type { Metadata } from "next";

export const siteConfig = {
  name: "Anhloom",
  tagline: "Grow your product with us",
  description:
    "Anhloom builds AI-powered software, web platforms, and cloud solutions for startups and enterprises.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://anhloom.com",
  ogImagePath: "/og-default.svg",
  twitterHandle: "@anhloom",
  locale: "en_US",
  email: "hello@anhloom.com",
} as const;

export type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function generatePageMetadata({
  title,
  description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
  };
}

function formatDisplayTitle(title: string): string {
  if (title === siteConfig.name || title.includes(siteConfig.name)) {
    return title;
  }

  return `${title} — ${siteConfig.name}`;
}

export type SiteMetadataInput = PageMetadataInput & {
  path?: string;
  type?: "website" | "article";
  imagePath?: string;
};

function resolveAbsoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

/** Builds Open Graph tags for social sharing previews. */
export function buildOpenGraphMetadata({
  title,
  description,
  path = "/",
  type = "website",
  imagePath = siteConfig.ogImagePath,
}: SiteMetadataInput): Metadata["openGraph"] {
  const pageTitle = formatDisplayTitle(title);

  return {
    title: pageTitle,
    description,
    url: resolveAbsoluteUrl(path),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type,
    images: [{ url: resolveAbsoluteUrl(imagePath) }],
  };
}

/** Builds Twitter Card metadata for X link previews. */
export function buildTwitterMetadata({
  title,
  description,
  imagePath = siteConfig.ogImagePath,
}: SiteMetadataInput): Metadata["twitter"] {
  const pageTitle = formatDisplayTitle(title);

  return {
    card: "summary_large_image",
    title: pageTitle,
    description,
    images: [resolveAbsoluteUrl(imagePath)],
    creator: siteConfig.twitterHandle,
  };
}

/** Builds canonical URL alternates for duplicate content prevention. */
export function buildCanonicalMetadata(path = "/"): Metadata["alternates"] {
  return {
    canonical: resolveAbsoluteUrl(path),
  };
}

export function buildSiteMetadata(input: SiteMetadataInput): Metadata {
  // Combines title, description, canonical URL, Open Graph, and Twitter tags.
  const base = generatePageMetadata(input);

  return {
    ...base,
    alternates: buildCanonicalMetadata(input.path),
    openGraph: buildOpenGraphMetadata(input),
    twitter: buildTwitterMetadata(input),
  };
}
