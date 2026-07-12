import { Container } from "@/components/Container";
import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";
import { pricingTiers } from "@/lib/pricing";

export function PricingHero() {
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
            Pricing
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Engagements that match your stage
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Transparent starting points for MVPs, growth teams, and enterprise
            programs — scoped after discovery.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function PricingTiers() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 laptop:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
