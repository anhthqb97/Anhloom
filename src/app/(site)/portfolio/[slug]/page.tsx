import { notFound } from "next/navigation";

import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import {
  ProjectArchitecture,
  ProjectTechnologies,
} from "@/components/sections/portfolio/ProjectArchitecture";
import { ProjectDetailHero } from "@/components/sections/portfolio/ProjectDetailHero";
import {
  ProjectOverview,
  ProjectSolution,
} from "@/components/sections/portfolio/ProjectOverview";
import {
  ProjectGallery,
  ProjectResults,
} from "@/components/sections/portfolio/ProjectResults";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/resolve-project";
import { buildSiteMetadata } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return buildSiteMetadata({
    title: project.title,
    description: project.summary,
    path: `/portfolio/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
      />
      <ProjectDetailHero project={project} />
      <ProjectOverview project={project} />
      <ProjectSolution project={project} />
      <ProjectArchitecture project={project} />
      <ProjectTechnologies project={project} />
      <ProjectResults project={project} />
      <ProjectGallery project={project} />
    </>
  );
}
