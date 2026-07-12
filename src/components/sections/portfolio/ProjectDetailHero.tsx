import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import type { ProjectDetail } from "@/lib/project-details";

type ProjectDetailHeroProps = {
  project: ProjectDetail;
};

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <section className="relative">
      <div
        className="aspect-[21/9] w-full bg-gradient-to-br from-primary-200 via-accent-100 to-secondary-500/20"
        role="img"
        aria-label={`${project.title} hero image`}
      />
      <Container className="relative -mt-16 pb-8">
        <div className="rounded-xl border border-border bg-surface p-8 shadow-lg laptop:p-10">
          <Pill tone="primary">{project.category}</Pill>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-body-lg text-text-secondary">
            {project.summary}
          </p>
        </div>
      </Container>
    </section>
  );
}
