import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionFeaturesBenefitsProps = {
  solution: SolutionDetail;
};

export function SolutionFeaturesBenefits({
  solution,
}: SolutionFeaturesBenefitsProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="grid gap-16 laptop:grid-cols-2">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Features
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
              Core capabilities
            </h2>
            <div className="mt-6 space-y-4">
              {solution.features.map((feature) => (
                <Card key={feature.title} className="p-5">
                  <h3 className="text-heading-md font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-text-secondary">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Benefits
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
              Measurable outcomes
            </h2>
            <ul className="mt-6 space-y-4">
              {solution.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-md border border-border bg-surface p-4 text-body-md font-medium text-success"
                >
                  {benefit}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-label font-semibold uppercase tracking-wide text-primary-600">
              Integrations
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {solution.integrations.map((integration) => (
                <Pill key={integration} tone="primary">
                  {integration}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
