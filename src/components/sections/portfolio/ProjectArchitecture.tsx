import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import type { ProjectDetail } from "@/lib/project-details";

type ProjectArchitectureProps = {
  project: ProjectDetail;
};

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Architecture
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            System design
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {project.architectureNote}
          </p>
        </div>
        <div
          className="mx-auto mt-10 flex aspect-video max-w-4xl items-center justify-center rounded-xl border border-dashed border-border bg-bg-muted text-body-sm text-text-muted"
          role="img"
          aria-label={`${project.title} architecture diagram`}
        >
          Architecture diagram
        </div>
      </Container>
    </Section>
  );
}

export function ProjectTechnologies({ project }: ProjectArchitectureProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Technologies
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
            Stack we used
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {project.technologyList.map((technology) => (
            <Pill key={technology} tone="primary">
              {technology}
            </Pill>
          ))}
        </div>
      </Container>
    </Section>
  );
}
