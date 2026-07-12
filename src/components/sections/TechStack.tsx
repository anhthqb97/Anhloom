import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TechCategory } from "@/components/TechCategory";
import { techStack } from "@/lib/tech-stack";

export function TechStack() {
  return (
    <Section>
      <Container>
        <TechCategory title="Frontend" items={techStack.frontend} />
      </Container>
    </Section>
  );
}
