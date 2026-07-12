import { Container } from "@/components/Container";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Section } from "@/components/Section";

export function TrustedBy() {
  return (
    <Section padding="default">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Trusted By
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
            Teams building with world-class technology
          </h2>
        </div>
        <LogoCarousel />
      </Container>
    </Section>
  );
}
