import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import type { CaseStudyDetail } from "@/lib/case-study-details";

type CaseStudyExecutiveSummaryProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyHero({ caseStudy }: CaseStudyExecutiveSummaryProps) {
  return (
    <section className="relative">
      <div
        className="aspect-[21/9] w-full bg-gradient-to-br from-primary-200 via-accent-100 to-secondary-500/20"
        role="img"
        aria-label={`${caseStudy.title} hero image`}
      />
      <Container className="relative -mt-16 pb-8">
        <div className="rounded-xl border border-border bg-surface p-8 shadow-lg laptop:p-10">
          <h1 className="text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {caseStudy.title}
          </h1>
          <p className="mt-4 max-w-3xl text-body-lg text-text-secondary">
            {caseStudy.summary}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function CaseStudyExecutiveSummary({
  caseStudy,
}: CaseStudyExecutiveSummaryProps) {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-10 laptop:grid-cols-[1fr_280px] laptop:gap-16">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Executive Summary
            </p>
            <p className="mt-4 text-body-lg text-text-secondary">
              {caseStudy.executiveSummary}
            </p>
          </div>
          <aside>
            <Card className="sticky top-24 space-y-4 p-6">
              <div>
                <p className="text-label font-semibold uppercase tracking-wide text-text-muted">
                  Client
                </p>
                <p className="mt-1 text-body-md font-medium text-text-primary">
                  {caseStudy.client}
                </p>
              </div>
              <div>
                <p className="text-label font-semibold uppercase tracking-wide text-text-muted">
                  Industry
                </p>
                <p className="mt-1 text-body-md font-medium text-text-primary">
                  {caseStudy.industry}
                </p>
              </div>
              <div>
                <p className="text-label font-semibold uppercase tracking-wide text-text-muted">
                  Duration
                </p>
                <p className="mt-1 text-body-md font-medium text-text-primary">
                  {caseStudy.duration}
                </p>
              </div>
              {caseStudy.projectRef ? (
                <Link
                  href={`/portfolio/${caseStudy.projectRef}`}
                  className="inline-flex text-body-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  View related project →
                </Link>
              ) : null}
            </Card>
          </aside>
        </div>
      </Container>
    </section>
  );
}
