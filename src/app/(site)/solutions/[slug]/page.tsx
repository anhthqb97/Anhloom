import { notFound } from "next/navigation";

import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { SolutionArchitecture } from "@/components/sections/solutions/SolutionArchitecture";
import { SolutionDetailHero } from "@/components/sections/solutions/SolutionDetailHero";
import { SolutionFeaturesBenefits } from "@/components/sections/solutions/SolutionFeaturesBenefits";
import { SolutionGalleryDemo } from "@/components/sections/solutions/SolutionGalleryDemo";
import { SolutionProblems } from "@/components/sections/solutions/SolutionProblems";
import { SolutionProposed } from "@/components/sections/solutions/SolutionProposed";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
} from "@/lib/resolve-solution";
import { buildSiteMetadata } from "@/lib/seo";

type SolutionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return buildSiteMetadata({
    title: solution.title,
    description: solution.tagline,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({
  params,
}: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />
      <SolutionDetailHero solution={solution} />
      <SolutionProblems solution={solution} />
      <SolutionProposed solution={solution} />
      <SolutionArchitecture solution={solution} />
      <SolutionFeaturesBenefits solution={solution} />
      <SolutionGalleryDemo solution={solution} />
    </>
  );
}
