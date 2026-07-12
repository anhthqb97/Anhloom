import Link from "next/link";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { caseStudyDetails } from "@/lib/case-study-details";

export function CaseStudiesListingHero() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Case Studies
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Real outcomes from real engagements
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Deep dives into how Anhloom partners with clients to deliver
            measurable business impact.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function CaseStudiesListingGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 laptop:grid-cols-3">
          {caseStudyDetails.map((caseStudy) => (
            <Card key={caseStudy.slug} className="overflow-hidden p-0">
              <div className="aspect-video w-full bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10" />
              <div className="p-6">
                <p className="text-body-sm text-text-muted">{caseStudy.industry}</p>
                <h2 className="mt-2 text-heading-md font-semibold text-text-primary">
                  {caseStudy.title}
                </h2>
                <p className="mt-2 text-body-sm text-text-secondary">
                  {caseStudy.summary}
                </p>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                >
                  Read Case Study
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
