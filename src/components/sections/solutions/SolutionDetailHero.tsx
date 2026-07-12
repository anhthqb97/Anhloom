import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionDetailHeroProps = {
  solution: SolutionDetail;
};

export function SolutionDetailHero({ solution }: SolutionDetailHeroProps) {
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
            Solution
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {solution.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            {solution.tagline}
          </p>
          <div className="mt-8">
            <Link
              href="/contact?intent=demo"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-primary-600 px-4 text-body-md font-medium text-white transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
