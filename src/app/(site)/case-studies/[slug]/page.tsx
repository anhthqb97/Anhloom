import { notFound } from "next/navigation";

import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import {
  CaseStudyChallenges,
  CaseStudyResearch,
} from "@/components/sections/case-studies/CaseStudyChallenges";
import {
  CaseStudyExecutiveSummary,
  CaseStudyHero,
} from "@/components/sections/case-studies/CaseStudyExecutiveSummary";
import {
  CaseStudyLessons,
  CaseStudyResults,
} from "@/components/sections/case-studies/CaseStudyResults";
import {
  CaseStudyArchitecture,
  CaseStudySolution,
} from "@/components/sections/case-studies/CaseStudySolution";
import { CaseStudyTimeline } from "@/components/sections/case-studies/CaseStudyTimeline";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/case-study-details";
import { buildSiteMetadata } from "@/lib/seo";

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

  return buildSiteMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/case-studies/${slug}`,
  });
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
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: caseStudy.title },
        ]}
      />
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyExecutiveSummary caseStudy={caseStudy} />
      <CaseStudyChallenges caseStudy={caseStudy} />
      <CaseStudyResearch caseStudy={caseStudy} />
      <CaseStudySolution caseStudy={caseStudy} />
      <CaseStudyArchitecture caseStudy={caseStudy} />
      <CaseStudyTimeline caseStudy={caseStudy} />
      <CaseStudyResults caseStudy={caseStudy} />
      <CaseStudyLessons caseStudy={caseStudy} />
    </>
  );
}
