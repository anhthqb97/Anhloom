import type { ProjectFilterCategory } from "@/components/ProjectFilterTabs";

export type ProjectResult = {
  metric: string;
  label: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  category: Exclude<ProjectFilterCategory, "All">;
  technologies: string;
  result: string;
  summary: string;
  overview: string;
  industry: string;
  challenges: string[];
  solution: string;
  architectureNote: string;
  technologyList: string[];
  results: ProjectResult[];
};

const defaultChallenges = [
  "Legacy workflows slowed decision-making across teams.",
  "Disconnected data sources prevented a unified customer view.",
  "Manual processes created bottlenecks during peak demand.",
];

const defaultArchitecture =
  "Event-driven services behind an API gateway, with managed data stores and observability built in from day one.";

const defaultTechnologies = ["React", "Node.js", "PostgreSQL", "AWS", "Redis"];

const defaultResults: ProjectResult[] = [
  { metric: "+40%", label: "Conversion uplift" },
  { metric: "-35%", label: "Operational overhead" },
  { metric: "99.9%", label: "Platform uptime" },
];

function buildProject(
  slug: string,
  title: string,
  category: Exclude<ProjectFilterCategory, "All">,
  technologies: string,
  result: string,
  summary: string,
  overview: string,
  industry: string,
  solution: string,
  architectureNote = defaultArchitecture,
  technologyList = defaultTechnologies,
  challenges = defaultChallenges,
  results = defaultResults,
): ProjectDetail {
  return {
    slug,
    title,
    category,
    technologies,
    result,
    summary,
    overview,
    industry,
    challenges,
    solution,
    architectureNote,
    technologyList,
    results,
  };
}

export const projectDetails: ProjectDetail[] = [
  buildProject(
    "finsense-ai",
    "FinSense AI",
    "FinTech",
    "React · FastAPI · AWS",
    "+40% conversion",
    "AI underwriting assistant that helps finance teams approve deals faster.",
    "FinSense AI streamlines loan underwriting with document intelligence, risk scoring, and analyst workflows in one workspace.",
    "Financial Services",
    "We delivered a RAG-powered underwriting copilot with policy-aware scoring, audit trails, and CRM integrations for relationship managers.",
    "Microservices on AWS with document pipelines, model inference workers, and a secure API layer for bank integrations.",
    ["React", "FastAPI", "PostgreSQL", "AWS Lambda", "OpenSearch"],
    [
      "Underwriters spent hours reconciling documents across legacy systems.",
      "Risk models were opaque and hard to tune per product line.",
      "Compliance reviews lacked a single source of truth.",
    ],
    [
      { metric: "+40%", label: "Conversion uplift" },
      { metric: "-50%", label: "Underwriting cycle time" },
      { metric: "3x", label: "Analyst throughput" },
    ],
  ),
  buildProject(
    "careflow-platform",
    "CareFlow Platform",
    "Healthcare",
    "Next.js · Node · PostgreSQL",
    "-35% admin time",
    "Patient operations dashboard for clinics managing intake and follow-ups.",
    "CareFlow centralizes patient intake, scheduling, and follow-up tasks for multi-location clinics.",
    "Healthcare",
    "A HIPAA-aware operations hub with role-based workflows, automated reminders, and EHR-friendly exports.",
    "Modular Node services with encrypted storage, audit logging, and integration adapters for common EHR systems.",
    ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
    [
      "Front-desk teams juggled spreadsheets for intake and follow-ups.",
      "No-shows increased due to inconsistent reminder workflows.",
      "Clinic managers lacked real-time visibility across locations.",
    ],
    [
      { metric: "-35%", label: "Admin time per visit" },
      { metric: "-28%", label: "No-show rate" },
      { metric: "2x", label: "Follow-up completion" },
    ],
  ),
  buildProject(
    "edupath-lms",
    "EduPath LMS",
    "Education",
    "React · Laravel · Redis",
    "2x student engagement",
    "Learning platform with adaptive modules and instructor analytics.",
    "EduPath helps training providers deliver adaptive learning paths with progress analytics for instructors.",
    "Education",
    "Adaptive module sequencing, cohort dashboards, and content authoring tools designed for instructor-led programs.",
    "Laravel API with Redis-backed progress tracking and a React learning client optimized for low-bandwidth regions.",
    ["React", "Laravel", "MySQL", "Redis", "Docker"],
    [
      "Static course catalogs failed to adapt to learner pace.",
      "Instructors lacked visibility into at-risk students early enough.",
      "Content updates required engineering support every release.",
    ],
    [
      { metric: "2x", label: "Student engagement" },
      { metric: "+45%", label: "Course completion" },
      { metric: "-60%", label: "Content update lead time" },
    ],
  ),
  buildProject(
    "logitrack",
    "LogiTrack",
    "Logistics",
    "Vue · Python · GCP",
    "+28% delivery accuracy",
    "Route optimization system for last-mile logistics teams.",
    "LogiTrack optimizes last-mile routes and dispatch decisions with live traffic and capacity constraints.",
    "Logistics",
    "Dispatch console with route optimization, driver mobile updates, and SLA monitoring for regional carriers.",
    "Python optimization workers on GCP with real-time event streams and a Vue operations dashboard.",
    ["Vue", "Python", "GCP", "Pub/Sub", "BigQuery"],
    [
      "Dispatchers manually planned routes with outdated spreadsheets.",
      "Delivery SLAs were missed during peak seasonal volume.",
      "Drivers received conflicting instructions across channels.",
    ],
    [
      { metric: "+28%", label: "Delivery accuracy" },
      { metric: "-22%", label: "Fuel cost per route" },
      { metric: "+18%", label: "On-time deliveries" },
    ],
  ),
  buildProject(
    "markethub",
    "MarketHub",
    "SaaS",
    "Next.js · Stripe · Supabase",
    "3x GMV growth",
    "Multi-vendor marketplace with payments, listings, and seller tools.",
    "MarketHub powers a multi-vendor marketplace with listings, escrow payments, and seller performance tooling.",
    "E-commerce / SaaS",
    "Two-sided marketplace core with Stripe Connect payouts, dispute flows, and seller analytics dashboards.",
    "Next.js storefront with Supabase data layer, Stripe webhooks, and background jobs for settlement reconciliation.",
    ["Next.js", "Stripe", "Supabase", "PostgreSQL", "Vercel"],
    [
      "Manual seller onboarding slowed marketplace launch velocity.",
      "Payment reconciliation errors created payout delays.",
      "Buyers lacked trust signals when evaluating new vendors.",
    ],
    [
      { metric: "3x", label: "GMV growth" },
      { metric: "+52%", label: "Seller activation rate" },
      { metric: "-40%", label: "Payout dispute volume" },
    ],
  ),
  buildProject(
    "novacrm",
    "NovaCRM",
    "AI",
    "React · GraphQL · AWS",
    "+55% pipeline speed",
    "AI-assisted CRM that prioritizes leads and drafts follow-up actions.",
    "NovaCRM helps revenue teams prioritize leads and automate follow-ups with AI-assisted workflows.",
    "B2B SaaS",
    "Lead scoring, next-best-action suggestions, and email draft assistance embedded in a customizable CRM workspace.",
    "GraphQL API with AI inference services, activity streams, and integration webhooks for sales tooling.",
    ["React", "GraphQL", "AWS", "DynamoDB", "OpenAI"],
    [
      "Reps wasted time on low-intent leads without clear prioritization.",
      "Follow-up quality varied widely across the sales team.",
      "CRM data was stale because updates happened after calls, not during.",
    ],
    [
      { metric: "+55%", label: "Pipeline velocity" },
      { metric: "+32%", label: "Meeting booking rate" },
      { metric: "-45%", label: "Manual CRM updates" },
    ],
  ),
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectDetails.map((project) => project.slug);
}
