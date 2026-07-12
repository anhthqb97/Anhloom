import { notFound } from "next/navigation";

import {
  ProjectArchitecture,
  ProjectTechnologies,
} from "@/components/sections/portfolio/ProjectArchitecture";
import { ProjectDetailHero } from "@/components/sections/portfolio/ProjectDetailHero";
import {
  ProjectOverview,
  ProjectSolution,
} from "@/components/sections/portfolio/ProjectOverview";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/project-details";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — Anhloom" };
  }

  return {
    title: `${project.title} — Anhloom`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <ProjectSolution project={project} />
      <ProjectArchitecture project={project} />
      <ProjectTechnologies project={project} />
    </>
  );
}
