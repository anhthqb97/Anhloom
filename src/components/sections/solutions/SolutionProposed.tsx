import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionProposedProps = {
  solution: SolutionDetail;
};

export function SolutionProposed({ solution }: SolutionProposedProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="grid items-center gap-10 laptop:grid-cols-2 laptop:gap-16">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Proposed Solution
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
              How {solution.title} works for you
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              {solution.solutionSummary}
            </p>
          </div>
          <div
            className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 shadow-lg"
            role="img"
            aria-label={`${solution.title} solution diagram placeholder`}
          />
        </div>
      </Container>
    </Section>
  );
}
