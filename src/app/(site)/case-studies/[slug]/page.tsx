import { notFound } from "next/navigation";

import {
  CaseStudyChallenges,
  CaseStudyResearch,
} from "@/components/sections/case-studies/CaseStudyChallenges";
import {
  CaseStudyExecutiveSummary,
  CaseStudyHero,
} from "@/components/sections/case-studies/CaseStudyExecutiveSummary";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/case-study-details";

type CaseStudyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found — Anhloom" };
  }

  return {
    title: `${caseStudy.title} — Anhloom`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyExecutiveSummary caseStudy={caseStudy} />
      <CaseStudyChallenges caseStudy={caseStudy} />
      <CaseStudyResearch caseStudy={caseStudy} />
    </>
  );
}
