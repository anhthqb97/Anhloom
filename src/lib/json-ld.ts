import type { BreadcrumbItem } from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
  };
}

export function serviceJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}${path}`,
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  author,
  publishedAt,
}: {
  title: string;
  description: string;
  path: string;
  author: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished: publishedAt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}

export function jobPostingJsonLd({
  title,
  description,
  department,
  location,
  employmentType,
  path,
}: {
  title: string;
  description: string;
  department: string;
  location: string;
  employmentType: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    jobLocation: {
      "@type": "Place",
      address: location,
    },
    employmentType,
    industry: department,
    url: `${siteConfig.url}${path}`,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };
}
