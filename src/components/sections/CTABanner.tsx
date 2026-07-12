import { type ReactNode } from "react";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { cn } from "@/lib/cn";

type CTABannerProps = {
  children?: ReactNode;
  className?: string;
};

export function CTABanner({ children, className }: CTABannerProps) {
  return (
    <Section padding="lg" className={cn("relative overflow-hidden", className)}>
      <div
        className="hero-gradient-bg pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />
      <Container className="relative">{children}</Container>
    </Section>
  );
}
