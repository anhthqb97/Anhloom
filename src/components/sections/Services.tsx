import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";

const placeholderServices = Array.from({ length: 6 }, (_, index) => ({
  title: `Service ${index + 1}`,
  description: "Description placeholder",
  href: "/services",
  icon: <span className="text-body-sm font-bold">S</span>,
}));

export function Services() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
          {placeholderServices.map((service, index) => (
            <ServiceCard
              key={index}
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
