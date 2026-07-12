import { Pill } from "@/components/Pill";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceTechnologiesProps = {
  service: ServiceDetail;
};

export function ServiceTechnologies({ service }: ServiceTechnologiesProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Technologies
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Tools we use
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {service.technologies.map((tech) => (
            <Pill key={tech} tone="primary">
              {tech}
            </Pill>
          ))}
        </div>
      </Container>
    </Section>
  );
}
