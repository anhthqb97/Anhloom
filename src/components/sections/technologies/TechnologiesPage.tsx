import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TechCategory } from "@/components/TechCategory";
import {
  techStack,
  technologyCategories,
} from "@/lib/technologies";

export function TechnologiesHero() {
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
            Technologies
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Built with modern, battle-tested tools
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            We choose the right stack for each product — from frontend frameworks
            to cloud infrastructure, AI platforms, and security tooling.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function TechnologiesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 tablet:grid-cols-2 laptop:grid-cols-4">
          {technologyCategories.map((category) => (
            <TechCategory
              key={category}
              title={category}
              items={techStack[category]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
