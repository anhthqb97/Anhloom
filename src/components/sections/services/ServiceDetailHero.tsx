import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceDetailHeroProps = {
  service: ServiceDetail;
};

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
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
            Service
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            {service.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=consultation"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-primary-600 px-4 text-body-md font-medium text-white transition-all hover:brightness-[1.04] hover:shadow-md active:scale-[0.98]"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
