import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/lib/solutions";

export function Solutions() {
  return (
    <Section className="bg-bg-subtle">
      <Container>
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
