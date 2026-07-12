import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function AboutStory() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-10 laptop:grid-cols-2 laptop:gap-16">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Our Story
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
              Born from a belief that great products deserve great engineering
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              Anhloom blends the founder&apos;s name with <em>bloom</em> — a
              reminder that every product starts as a seed and needs the right
              team, process, and technology to grow.
            </p>
            <p className="mt-4 text-body-lg text-text-secondary">
              We started as a small studio helping startups ship MVPs fast. Today
              we partner with teams worldwide on AI systems, custom software,
              and cloud infrastructure — always with the same focus on quality,
              clarity, and long-term scale.
            </p>
          </div>
          <div
            className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 shadow-lg"
            role="img"
            aria-label="Anhloom team collaboration placeholder"
          />
        </div>
      </Container>
    </Section>
  );
}
