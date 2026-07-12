import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { careerBenefits } from "@/lib/careers";

export function CareersHero() {
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
            Careers
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Help products bloom with us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Join a small, senior team building AI and software products for
            clients worldwide.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function CareersCultureGrid() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Culture
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            How we work together
          </h2>
        </div>
        <div className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-4">
          <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 laptop:col-span-2 laptop:row-span-2 laptop:aspect-auto laptop:min-h-[320px]" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-50 to-accent-50" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-50 to-secondary-500/10" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-50 to-secondary-500/10" />
          <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-50 to-primary-100" />
        </div>
      </Container>
    </Section>
  );
}

export function CareersBenefits() {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Benefits
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            What you get
          </h2>
        </div>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {careerBenefits.map((benefit) => (
            <Card key={benefit.title} className="p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-100 text-body-sm font-bold text-primary-700">
                {benefit.icon}
              </span>
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
