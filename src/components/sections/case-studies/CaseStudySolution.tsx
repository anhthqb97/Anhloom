import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { CaseStudyDetail } from "@/lib/case-study-details";

type CaseStudySolutionProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudySolution({ caseStudy }: CaseStudySolutionProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Solution
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            What we built
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {caseStudy.solution}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudyArchitecture({ caseStudy }: CaseStudySolutionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Architecture
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Solution architecture
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {caseStudy.architectureNote}
          </p>
        </div>
        <div
          className="mx-auto mt-10 flex aspect-video max-w-4xl items-center justify-center rounded-xl border border-dashed border-border bg-bg-muted text-body-sm text-text-muted"
          role="img"
          aria-label={`${caseStudy.title} architecture diagram`}
        >
          Architecture diagram
        </div>
      </Container>
    </Section>
  );
}
