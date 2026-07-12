function ServiceIcon({ label }: { label: string }) {
  return (
    <span className="text-body-sm font-bold" aria-hidden="true">
      {label}
    </span>
  );
}

export const services = [
  {
    title: "AI Engineering",
    description:
      "Build intelligent products with ML pipelines, LLM integrations, and production AI systems.",
    href: "/services/ai-engineering",
    icon: <ServiceIcon label="AI" />,
  },
  {
    title: "Custom Software",
    description:
      "Tailored applications engineered for your workflows, scale, and business goals.",
    href: "/services/custom-software",
    icon: <ServiceIcon label="CS" />,
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible web apps with modern frameworks and pixel-perfect UX.",
    href: "/services/web-development",
    icon: <ServiceIcon label="WD" />,
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile experiences for iOS and Android.",
    href: "/services/mobile-development",
    icon: <ServiceIcon label="MD" />,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, CI/CD, and observability for growing teams.",
    href: "/services/cloud-devops",
    icon: <ServiceIcon label="CD" />,
  },
  {
    title: "Dedicated Team",
    description:
      "Embedded engineers who ship features alongside your product squad.",
    href: "/services/dedicated-team",
    icon: <ServiceIcon label="DT" />,
  },
] as const;
