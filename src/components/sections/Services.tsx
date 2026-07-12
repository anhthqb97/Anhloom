import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function Services() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.title}
              description={service.description}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
