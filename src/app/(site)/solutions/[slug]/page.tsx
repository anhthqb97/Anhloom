import { notFound } from "next/navigation";

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
    return { title: "Solution Not Found — Anhloom" };
  }

  return {
    title: `${solution.title} — Anhloom`,
    description: solution.tagline,
  };
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
      <SolutionDetailHero solution={solution} />
      <SolutionProblems solution={solution} />
      <SolutionProposed solution={solution} />
      <SolutionArchitecture solution={solution} />
      <SolutionFeaturesBenefits solution={solution} />
      <SolutionGalleryDemo solution={solution} />
    </>
  );
}
