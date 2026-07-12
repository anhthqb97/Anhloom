export type SolutionProblem = {
  title: string;
  description: string;
};

export type SolutionFeature = {
  title: string;
  description: string;
};

export type SolutionDetail = {
  slug: string;
  title: string;
  headline: string;
  tagline: string;
  problems: SolutionProblem[];
  solutionSummary: string;
  architectureNote: string;
  features: SolutionFeature[];
  benefits: string[];
  integrations: string[];
};

const defaultProblems: SolutionProblem[] = [
  {
    title: "Manual workflows",
    description: "Teams lose hours on repetitive tasks that should be automated.",
  },
  {
    title: "Disconnected systems",
    description: "Data silos prevent a single view of customer and operations data.",
  },
  {
    title: "Slow iteration",
    description: "Legacy stacks make it hard to ship improvements every sprint.",
  },
];

const defaultFeatures: SolutionFeature[] = [
  {
    title: "Unified dashboard",
    description: "One place to monitor KPIs, alerts, and team activity.",
  },
  {
    title: "Smart automation",
    description: "Rules and AI triggers that reduce manual handoffs.",
  },
  {
    title: "Secure integrations",
    description: "APIs and webhooks that connect your existing tools safely.",
  },
];

const defaultBenefits = [
  "40% faster time-to-market",
  "60% reduction in manual ops",
  "99.9% platform uptime SLA",
];

const defaultIntegrations = ["Stripe", "Salesforce", "Slack", "HubSpot", "AWS"];

function buildSolution(
  slug: string,
  title: string,
  headline: string,
  tagline: string,
  solutionSummary: string,
): SolutionDetail {
  return {
    slug,
    title,
    headline,
    tagline,
    problems: defaultProblems,
    solutionSummary,
    architectureNote:
      "A modular architecture with API gateway, event bus, and managed data stores — designed to scale horizontally and integrate with your stack.",
    features: defaultFeatures,
    benefits: defaultBenefits,
    integrations: defaultIntegrations,
  };
}

export const solutionDetails: SolutionDetail[] = [
  buildSolution(
    "ai-chatbot",
    "AI Chatbot",
    "Support that never sleeps",
    "Automate customer support with context-aware conversational AI.",
    "Anhloom builds RAG-powered chatbots that understand your docs, tickets, and product data — with human handoff when it matters.",
  ),
  buildSolution(
    "ai-agent",
    "AI Agent",
    "Agents that get work done",
    "Autonomous agents that execute tasks across your tools and workflows.",
    "We design agent frameworks that plan, call APIs, and complete multi-step workflows with guardrails and audit logs.",
  ),
  buildSolution(
    "crm",
    "CRM",
    "Relationships that convert",
    "Custom relationship management built around your sales motion.",
    "Tailored CRM pipelines, lead scoring, and integrations that match how your team actually sells.",
  ),
  buildSolution(
    "erp",
    "ERP",
    "Operations in sync",
    "Unified operations platform for finance, inventory, and reporting.",
    "Modular ERP modules for inventory, procurement, finance, and reporting — integrated with your existing systems.",
  ),
  buildSolution(
    "saas",
    "SaaS",
    "Multi-tenant by design",
    "Multi-tenant products from MVP to enterprise-ready scale.",
    "Tenant isolation, billing, admin consoles, and usage metering built for B2B SaaS from day one.",
  ),
  buildSolution(
    "marketplace",
    "Marketplace",
    "Two sides, one platform",
    "Two-sided platforms with payments, listings, and trust systems.",
    "Marketplace cores with listings, escrow payments, reviews, and dispute flows that scale with GMV.",
  ),
  buildSolution(
    "e-commerce",
    "E-commerce",
    "Storefronts that convert",
    "High-converting storefronts with catalogs, checkout, and fulfillment.",
    "Headless commerce stacks with optimized checkout, inventory sync, and fulfillment integrations.",
  ),
];

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutionDetails.map((solution) => solution.slug);
}
