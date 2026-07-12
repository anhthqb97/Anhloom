import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TechCategory } from "@/components/TechCategory";
import { techStack } from "@/lib/tech-stack";

export function TechStack() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Technology Stack
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Built with modern, battle-tested tools
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            We choose the right stack for each product — from frontend frameworks
            to cloud infrastructure and AI platforms.
          </p>
        </div>
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
