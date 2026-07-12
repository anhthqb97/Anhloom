import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/lib/solutions";

export function SolutionsListingHero() {
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
            Solutions
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Product solutions for complex business problems
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            From AI chatbots to marketplaces, Anhloom delivers tailored platforms
            that solve real operational challenges.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function SolutionsListingGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              href={solution.href}
              category={solution.category}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
