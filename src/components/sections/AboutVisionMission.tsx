import { Card, CardBody, CardHeader } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function AboutVisionMission() {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="grid gap-6 laptop:grid-cols-2">
          <Card>
            <CardHeader>
              <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
                Vision
              </p>
              <h2 className="text-heading-lg font-semibold text-text-primary">
                A world where every bold idea can bloom
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-body-lg text-text-secondary">
                We envision a future where startups and enterprises alike have
                access to world-class engineering — so great products reach
                users faster and scale with confidence.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
                Mission
              </p>
              <h2 className="text-heading-lg font-semibold text-text-primary">
                Engineer growth from MVP to scale
              </h2>
            </CardHeader>
            <CardBody>
              <p className="text-body-lg text-text-secondary">
                Anhloom helps teams design, build, and ship digital products
                with AI, custom software, and cloud expertise — delivering
                measurable outcomes at every stage of growth.
              </p>
            </CardBody>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
