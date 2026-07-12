import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ProjectDetail } from "@/lib/project-details";

type ProjectResultsProps = {
  project: ProjectDetail;
};

export function ProjectResults({ project }: ProjectResultsProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Results
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Measurable impact
          </h2>
        </div>
        <div className="grid gap-6 tablet:grid-cols-3">
          {project.results.map((result) => (
            <Card key={result.label} className="p-6 text-center">
              <p className="text-display-md font-bold text-success">
                {result.metric}
              </p>
              <p className="mt-2 text-body-md text-text-secondary">
                {result.label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function ProjectGallery({ project }: ProjectResultsProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Gallery
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
            {project.title} in production
          </h2>
        </div>
        <div className="grid gap-4 laptop:grid-cols-3">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 shadow-md laptop:col-span-2 laptop:aspect-auto laptop:min-h-[280px]" />
          <div className="grid gap-4">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-50 to-accent-50" />
            <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-50 to-secondary-500/10" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
