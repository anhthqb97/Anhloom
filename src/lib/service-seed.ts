import {
  getServiceBySlug,
  type ServiceDetail,
} from "@/lib/service-details";

export type ServiceSeedDocument = {
  _type: "service";
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  tagline: string;
  overviewHeading: string;
  overview: string;
  benefits: Array<{ title: string; description: string; icon: string }>;
  features: Array<{
    title: string;
    description: string;
    imageSide: "left" | "right";
  }>;
  technologies: string[];
  workflow: string[];
  faq: Array<{ question: string; answer: string }>;
};

export function toServiceSeed(detail: ServiceDetail): ServiceSeedDocument {
  return {
    _type: "service",
    _id: `service-${detail.slug}`,
    title: detail.title,
    slug: { _type: "slug", current: detail.slug },
    tagline: detail.tagline,
    overviewHeading: detail.overviewHeading,
    overview: detail.overviewBody,
    benefits: detail.benefits,
    features: detail.features,
    technologies: detail.technologies,
    workflow: detail.workflow,
    faq: detail.faq,
  };
}

export function getServiceSeed(slug: string): ServiceSeedDocument | undefined {
  const detail = getServiceBySlug(slug);
  if (!detail) {
    return undefined;
  }
  return toServiceSeed(detail);
}
