export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "From $8k",
    description: "Focused MVP or feature sprint for early-stage teams.",
    features: [
      "2-week discovery workshop",
      "Single product squad",
      "Weekly demos & roadmap",
      "Staging deployment included",
    ],
    cta: "Book a call",
  },
  {
    name: "Growth",
    price: "From $18k/mo",
    description: "Dedicated team for ongoing product delivery and scale.",
    features: [
      "Dedicated engineer + designer",
      "Bi-weekly release cadence",
      "CI/CD and observability setup",
      "Slack support & sprint planning",
      "Quarterly architecture review",
    ],
    popular: true,
    cta: "Get started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Multi-team engagements with compliance and SLA requirements.",
    features: [
      "Custom squad composition",
      "Security & compliance review",
      "24/7 on-call options",
      "Dedicated technical lead",
      "Executive reporting dashboard",
    ],
    cta: "Contact sales",
  },
];
