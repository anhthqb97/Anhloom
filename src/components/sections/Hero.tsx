import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid items-center gap-12 laptop:grid-cols-2 laptop:gap-16">
          <div className="flex flex-col" />
          <div className="relative flex items-center justify-center" />
        </div>
      </Container>
    </Section>
  );
}
