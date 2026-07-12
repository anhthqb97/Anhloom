import {
  getProjectBySlug,
  type ProjectDetail,
} from "@/lib/project-details";

export type ProjectSeedDocument = {
  _type: "project";
  _id: string;
  title: string;
  slug: { _type: "slug"; current: string };
  category: string;
  summary: string;
  technologies: string;
  result: string;
  overview: string;
  industry: string;
  challenges: string[];
  solution: string;
  architectureNote: string;
  technologyList: string[];
  results: ProjectDetail["results"];
};

export function toProjectSeed(detail: ProjectDetail): ProjectSeedDocument {
  return {
    _type: "project",
    _id: `project-${detail.slug}`,
    title: detail.title,
    slug: { _type: "slug", current: detail.slug },
    category: detail.category,
    summary: detail.summary,
    technologies: detail.technologies,
    result: detail.result,
    overview: detail.overview,
    industry: detail.industry,
    challenges: detail.challenges,
    solution: detail.solution,
    architectureNote: detail.architectureNote,
    technologyList: detail.technologyList,
    results: detail.results,
  };
}

export function getProjectSeed(slug: string): ProjectSeedDocument | undefined {
  const detail = getProjectBySlug(slug);
  if (!detail) {
    return undefined;
  }
  return toProjectSeed(detail);
}
