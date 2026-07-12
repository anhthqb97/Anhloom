import { Container } from "@/components/Container";
import { StaggerChildren, StaggerItem } from "@/components/motion/Stagger";
import { SlideUp } from "@/components/motion/SlideUp";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function Services() {
  return (
    <Section>
      <Container>
        <SlideUp className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Services
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Engineering capabilities that scale with your product
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            From AI systems to dedicated teams, Anhloom helps you design, build,
            and ship software that grows with your business.
          </p>
        </SlideUp>
        <StaggerChildren className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.href}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
