import Link from "next/link";

import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";
import type { PricingTier } from "@/lib/pricing";

export type PricingCardProps = {
  tier: PricingTier;
  className?: string;
};

export function PricingCard({ tier, className }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col p-8",
        tier.popular &&
          "relative z-10 scale-[1.02] border-primary-300 shadow-lg ring-2 ring-primary-200",
        className,
      )}
    >
      {tier.popular ? (
        <p className="mb-4 w-fit rounded-full bg-primary-600 px-3 py-1 text-label font-semibold uppercase tracking-wide text-white">
          Most Popular
        </p>
      ) : null}
      <h3 className="text-heading-lg font-semibold text-text-primary">
        {tier.name}
      </h3>
      <p className="mt-2 text-display-sm font-bold text-primary-600">
        {tier.price}
      </p>
      <p className="mt-3 text-body-md text-text-secondary">{tier.description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-body-sm text-text-secondary"
          >
            <span className="mt-1 text-success" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={cn(
          "mt-8 inline-flex h-10 w-full items-center justify-center rounded-sm text-body-md font-medium transition-all active:scale-[0.98]",
          tier.popular
            ? "bg-primary-600 text-white hover:brightness-[1.04] hover:shadow-md"
            : "border border-primary-600 bg-transparent text-primary-600 hover:brightness-[1.04] hover:shadow-md",
        )}
      >
        {tier.cta}
      </Link>
    </Card>
  );
}
