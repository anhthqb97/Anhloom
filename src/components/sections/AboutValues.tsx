import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { coreValues } from "@/lib/values";

export function AboutValues() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Core Values
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            What guides every engagement
          </h2>
        </div>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-4">
          {coreValues.map((value) => (
            <Card
              key={value.title}
              className="p-6 text-center transition-transform hover:scale-[1.02]"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                {value.icon}
              </div>
              <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
