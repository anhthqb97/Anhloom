import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TimelineStep } from "@/components/TimelineStep";
import { processSteps } from "@/lib/process";

export function Process() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Process
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            A proven path from idea to production
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Our eight-step delivery framework keeps discovery, design, and
            engineering aligned so your product ships with confidence.
          </p>
        </div>
        <div className="mx-auto max-w-xl">
          {processSteps.map((step, index) => (
            <TimelineStep
              key={step}
              number={index + 1}
              title={step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
