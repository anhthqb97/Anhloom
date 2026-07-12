import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ProjectDetail } from "@/lib/project-details";

type ProjectOverviewProps = {
  project: ProjectDetail;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 laptop:grid-cols-2 laptop:gap-16">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Overview
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
              Project summary
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              {project.overview}
            </p>
            <p className="mt-6 text-body-sm text-text-muted">
              <span className="font-semibold text-text-primary">Industry:</span>{" "}
              {project.industry}
            </p>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Challenges
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
              What we solved
            </h2>
            <ul className="mt-6 space-y-4">
              {project.challenges.map((challenge) => (
                <li key={challenge}>
                  <Card className="p-4 text-body-md text-text-secondary">
                    {challenge}
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function ProjectSolution({ project }: ProjectOverviewProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Solution
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            How we delivered
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {project.solution}
          </p>
        </div>
      </Container>
    </Section>
  );
}
