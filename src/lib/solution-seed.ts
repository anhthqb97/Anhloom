import {
  getSolutionBySlug,
  type SolutionDetail,
} from "@/lib/solution-details";

export type SolutionSeedDocument = {
  _type: "solution";
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  headline: string;
  tagline: string;
  problems: SolutionDetail["problems"];
  solutionSummary: string;
  architectureNote: string;
  features: SolutionDetail["features"];
  benefits: string[];
  integrations: string[];
};

export function toSolutionSeed(detail: SolutionDetail): SolutionSeedDocument {
  return {
    _type: "solution",
    _id: `solution-${detail.slug}`,
    title: detail.title,
    slug: { _type: "slug", current: detail.slug },
    headline: detail.headline,
    tagline: detail.tagline,
    problems: detail.problems,
    solutionSummary: detail.solutionSummary,
    architectureNote: detail.architectureNote,
    features: detail.features,
    benefits: detail.benefits,
    integrations: detail.integrations,
  };
}

export function getSolutionSeed(
  slug: string,
): SolutionSeedDocument | undefined {
  const detail = getSolutionBySlug(slug);
  if (!detail) {
    return undefined;
  }
  return toSolutionSeed(detail);
}
