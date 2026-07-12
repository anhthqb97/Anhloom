import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TimelineStep } from "@/components/TimelineStep";
import { processSteps } from "@/lib/process";

export function Process() {
  return (
    <Section>
      <Container>
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
