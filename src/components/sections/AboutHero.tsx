import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function AboutHero() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-25" />
        <div className="hero-glow-bg absolute inset-0 opacity-70" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            About Anhloom
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Helping Products Bloom
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            We partner with startups and global brands to engineer software,
            cloud systems, and AI products that grow from idea to scale.
          </p>
        </div>
      </Container>
    </Section>
  );
}
