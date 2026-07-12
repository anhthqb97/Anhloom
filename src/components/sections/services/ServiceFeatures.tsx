import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { cn } from "@/lib/cn";
import type { ServiceDetail } from "@/lib/service-details";

type ServiceFeaturesProps = {
  service: ServiceDetail;
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Features
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            What you get
          </h2>
        </div>
        <div className="space-y-16">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "grid items-center gap-10 laptop:grid-cols-2 laptop:gap-16",
                feature.imageSide === "right" && "laptop:[&>div:first-child]:order-2",
              )}
            >
              <div>
                <h3 className="text-heading-lg font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-4 text-body-lg text-text-secondary">
                  {feature.description}
                </p>
              </div>
              <div
                className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 shadow-md"
                role="img"
                aria-label={`${feature.title} feature illustration`}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
