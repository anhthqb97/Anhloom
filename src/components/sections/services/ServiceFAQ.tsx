import Link from "next/link";

import { FAQAccordion } from "@/components/FAQAccordion";
import { Container } from "@/components/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/Section";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceFAQProps = {
  service: ServiceDetail;
};

export function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <>
      <Section className="bg-bg-muted">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              FAQ
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
              Common questions
            </h2>
          </div>
          <div className="mx-auto max-w-2xl">
            <FAQAccordion items={service.faq} />
          </div>
        </Container>
      </Section>
      <CTABanner>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading-xl font-bold text-text-primary laptop:text-display-md">
            Ready to get started with {service.title}?
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Book a consultation and we&apos;ll help you plan the right approach.
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
      </CTABanner>
    </>
  );
}
