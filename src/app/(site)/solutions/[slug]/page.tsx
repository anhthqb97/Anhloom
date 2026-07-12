import { notFound } from "next/navigation";

import { SolutionDetailHero } from "@/components/sections/solutions/SolutionDetailHero";
import { SolutionProblems } from "@/components/sections/solutions/SolutionProblems";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
} from "@/lib/solution-details";

type SolutionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

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
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <SolutionDetailHero solution={solution} />
      <SolutionProblems solution={solution} />
    </>
  );
}
