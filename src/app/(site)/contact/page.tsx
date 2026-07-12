import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "Contact",
  description:
    "Get in touch with Anhloom to discuss your product, schedule a consultation, or contact sales.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section padding="lg">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center laptop:mx-0 laptop:text-left">
          <h1 className="text-display-md font-bold text-text-primary laptop:text-display-lg">
            Contact us
          </h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            Tell us about your project and we&apos;ll respond within one
            business day.
          </p>
        </div>
        <div className="grid gap-10 laptop:grid-cols-2 laptop:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </Container>
    </Section>
  );
}
