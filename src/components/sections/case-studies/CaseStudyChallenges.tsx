import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { CaseStudyDetail } from "@/lib/case-study-details";

type CaseStudyChallengesProps = {
  caseStudy: CaseStudyDetail;
};

export function CaseStudyChallenges({ caseStudy }: CaseStudyChallengesProps) {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
          Business Challenges
        </p>
        <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
          What the client faced
        </h2>
        <ul className="mt-8 space-y-4">
          {caseStudy.challenges.map((challenge) => (
            <li key={challenge}>
              <Card className="p-5 text-body-md text-text-secondary">
                {challenge}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function CaseStudyResearch({ caseStudy }: CaseStudyChallengesProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Research & Discovery
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Understanding the problem
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            {caseStudy.research}
          </p>
        </div>
      </Container>
    </Section>
  );
}
