import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionArchitectureProps = {
  solution: SolutionDetail;
};

export function SolutionArchitecture({ solution }: SolutionArchitectureProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Architecture
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Built to scale and integrate
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {solution.architectureNote}
          </p>
        </div>
        <div
          className="mx-auto mt-10 flex aspect-video max-w-4xl items-center justify-center rounded-xl border border-dashed border-border bg-bg-muted text-body-sm text-text-muted"
          role="img"
          aria-label={`${solution.title} architecture diagram placeholder`}
        >
          Architecture diagram
        </div>
      </Container>
    </Section>
  );
}
