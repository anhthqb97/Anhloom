import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionProblemsProps = {
  solution: SolutionDetail;
};

export function SolutionProblems({ solution }: SolutionProblemsProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Challenges
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Business problems we solve
          </h2>
        </div>
        <div className="grid gap-6 laptop:grid-cols-3">
          {solution.problems.map((problem) => (
            <Card key={problem.title} className="p-6">
              <h3 className="text-heading-md font-semibold text-text-primary">
                {problem.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
