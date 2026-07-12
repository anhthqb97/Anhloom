import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { leadershipTeam } from "@/lib/team";

export function AboutTeam() {
  return (
    <Section className="bg-bg-muted">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Leadership
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            The team behind Anhloom
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Experienced builders who combine engineering depth with product
            intuition to help your ideas bloom.
          </p>
        </div>
        <div className="grid gap-6 laptop:grid-cols-3">
          {leadershipTeam.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
