import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TechCategory } from "@/components/TechCategory";
import { techStack } from "@/lib/tech-stack";

export function TechStack() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 tablet:grid-cols-2 laptop:grid-cols-3">
          <TechCategory title="Frontend" items={techStack.frontend} />
          <TechCategory title="Backend" items={techStack.backend} />
          <TechCategory title="Cloud" items={techStack.cloud} />
          <TechCategory title="Database" items={techStack.database} />
          <TechCategory
            title="AI"
            items={techStack.ai}
            className="tablet:col-span-2 laptop:col-span-1"
          />
        </div>
      </Container>
    </Section>
  );
}
