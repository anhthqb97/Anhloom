import { Container } from "@/components/Container";
import { SlideUp } from "@/components/motion/SlideUp";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8+", label: "Years of Experience" },
  { value: "40+", label: "Engineers" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12", label: "Countries Served" },
] as const;

export function Stats() {
  return (
    <Section padding="sm" className="border-y border-border bg-bg-subtle">
      <Container>
        <SlideUp>
          <div className="grid grid-cols-2 gap-8 tablet:grid-cols-3 laptop:grid-cols-5 laptop:gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
}
