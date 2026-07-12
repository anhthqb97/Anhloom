import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/lib/solutions";

export function Solutions() {
  return (
    <Section className="bg-bg-subtle">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-accent-600">
            Solutions
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Business platforms built for real-world operations
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Launch AI-powered products, enterprise systems, and digital
            platforms with battle-tested architecture and fast delivery.
          </p>
        </div>
        <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-2 laptop:mx-0 laptop:grid laptop:grid-cols-4 laptop:overflow-visible laptop:px-0">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.href}
              title={solution.title}
              description={solution.description}
              href={solution.href}
              category={solution.category}
              featured={solution.featured}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
