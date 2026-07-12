import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section padding="lg">
      <Container>
        <div className="grid items-center gap-12 laptop:grid-cols-2 laptop:gap-16">
          <div className="flex flex-col">
            <h1 className="text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg ultra:text-display-xl">
              We Help Products Bloom — From MVP to Scale
            </h1>
          </div>
          <div className="relative flex items-center justify-center" />
        </div>
      </Container>
    </Section>
  );
}
