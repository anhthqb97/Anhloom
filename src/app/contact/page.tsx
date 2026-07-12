import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact — Anhloom",
  description:
    "Get in touch with Anhloom to discuss your product, schedule a consultation, or contact sales.",
};

export default function ContactPage() {
  return (
    <Section padding="lg">
      <Container>
        <div className="mx-auto max-w-xl">
          <h1 className="text-display-md font-bold text-text-primary laptop:text-display-lg">
            Contact us
          </h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            Tell us about your project and we&apos;ll respond within one
            business day.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
