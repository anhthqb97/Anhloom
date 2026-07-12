import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { CaseStudyDetail } from "@/lib/case-study-details";

type CaseStudyResultsProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyResults({ caseStudy }: CaseStudyResultsProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Results
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Measurable impact
          </h2>
        </div>
        <div className="grid gap-6 tablet:grid-cols-3">
          {caseStudy.results.map((result) => (
            <Card key={result.label} className="p-6 text-center">
              <p className="text-display-md font-bold text-success">
                {result.metric}
              </p>
              <p className="mt-2 text-body-md text-text-secondary">
                {result.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudyLessons({ caseStudy }: CaseStudyResultsProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Lessons Learned
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            What we took away
          </h2>
          <ul className="mt-8 space-y-4">
            {caseStudy.lessonsLearned.map((lesson) => (
              <li
                key={lesson}
                className="rounded-md border border-border bg-surface p-4 text-body-md text-text-secondary"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
