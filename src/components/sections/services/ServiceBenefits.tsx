import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceBenefitsProps = {
  service: ServiceDetail;
};

export function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Benefits
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Why teams choose Anhloom
          </h2>
        </div>
        <div className="grid gap-6 laptop:grid-cols-3">
          {service.benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-body-sm font-bold" aria-hidden="true">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
