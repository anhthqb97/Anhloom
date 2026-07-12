import { CompanyMilestone } from "@/components/CompanyMilestone";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { companyMilestones } from "@/lib/company-timeline";

export function AboutTimeline() {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Timeline
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Milestones on our journey
          </h2>
        </div>
        <div className="mx-auto max-w-xl">
          {companyMilestones.map((milestone, index) => (
            <CompanyMilestone
              key={milestone.year}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              isLast={index === companyMilestones.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
