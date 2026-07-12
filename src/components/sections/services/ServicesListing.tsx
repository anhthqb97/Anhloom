import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function ServicesListingHero() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Services
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Engineering services that scale with your product
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            From AI systems to dedicated teams, Anhloom helps you design, build,
            and ship software that grows with your business.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function ServicesListingGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
