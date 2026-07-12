import { type ReactNode } from "react";

import { partnerLogos } from "@/lib/partners";
import { cn } from "@/lib/cn";

type LogoCarouselProps = {
  children?: ReactNode;
  className?: string;
};

function PartnerLogo({ name }: { name: string }) {
  return (
    <div
      className="flex h-12 min-w-[140px] items-center justify-center rounded-md border border-border bg-surface px-6"
      aria-label={name}
    >
      <span className="text-body-sm font-semibold tracking-wide text-text-muted">
        {name}
      </span>
    </div>
  );
}

export function LogoCarousel({ children, className }: LogoCarouselProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max items-center gap-12">
        {children ??
          partnerLogos.map((partner) => (
            <PartnerLogo key={partner.slug} name={partner.name} />
          ))}
      </div>
    </div>
  );
}
