import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { CaseStudyDetail } from "@/lib/case-study-details";

type CaseStudyTimelineProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyTimeline({ caseStudy }: CaseStudyTimelineProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Development Process
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            How we delivered
          </h2>
        </div>
        <ol className="mx-auto max-w-2xl space-y-6">
          {caseStudy.timeline.map((phase, index) => (
            <li key={phase.phase} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 text-body-sm font-semibold text-white">
                {index + 1}
              </span>
              <Card className="flex-1 p-5">
                <h3 className="text-heading-md font-semibold text-text-primary">
                  {phase.phase}
                </h3>
                <p className="mt-2 text-body-sm text-text-secondary">
                  {phase.description}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
