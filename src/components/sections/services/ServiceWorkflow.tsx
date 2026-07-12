import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TimelineStep } from "@/components/TimelineStep";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceWorkflowProps = {
  service: ServiceDetail;
};

export function ServiceWorkflow({ service }: ServiceWorkflowProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Workflow
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            How we deliver
          </h2>
        </div>
        <div className="mx-auto max-w-xl">
          {service.workflow.map((step, index) => (
            <TimelineStep
              key={step}
              number={index + 1}
              title={step}
              isLast={index === service.workflow.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
