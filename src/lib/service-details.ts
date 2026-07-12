export type ServiceBenefit = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceFeature = {
  title: string;
  description: string;
  imageSide: "left" | "right";
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  overviewHeading: string;
  overviewBody: string;
  benefits: ServiceBenefit[];
  features: ServiceFeature[];
  technologies: string[];
  workflow: string[];
  faq: ServiceFaq[];
};

const defaultBenefits: ServiceBenefit[] = [
  {
    title: "Faster delivery",
    description: "Ship validated features in iterative sprints with clear milestones.",
    icon: "FD",
  },
  {
    title: "Production quality",
    description: "Architecture, testing, and observability built in from day one.",
    icon: "PQ",
  },
  {
    title: "Scalable foundation",
    description: "Systems designed to grow from MVP to enterprise scale.",
    icon: "SF",
  },
];

const defaultWorkflow = [
  "Discovery & requirements",
  "Architecture & design",
  "Implementation sprints",
  "QA & performance testing",
  "Launch & handoff",
  "Ongoing optimization",
];

const defaultFaq: ServiceFaq[] = [
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most projects run 8–16 weeks depending on scope. We provide a timeline estimate after discovery.",
  },
  {
    question: "Do you work with existing teams?",
    answer:
      "Yes. We embed alongside your engineers and product managers using your tools and rituals.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "We start with a discovery workshop, align on goals, then move into a two-week pilot sprint.",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    tagline: "Build intelligent products with production-ready AI systems.",
    overviewHeading: "From prototypes to production AI",
    overviewBody:
      "Anhloom designs and ships ML pipelines, LLM integrations, and AI-powered workflows that deliver measurable business outcomes — not just demos.",
    benefits: defaultBenefits,
    features: [
      {
        title: "LLM integration & RAG",
        description:
          "Connect models to your data with retrieval pipelines, guardrails, and evaluation harnesses.",
        imageSide: "left",
      },
      {
        title: "ML ops & monitoring",
        description:
          "Deploy models with versioning, drift detection, and performance dashboards.",
        imageSide: "right",
      },
    ],
    technologies: ["Python", "PyTorch", "OpenAI", "LangChain", "AWS", "Docker"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    tagline: "Tailored applications engineered for your workflows and scale.",
    overviewHeading: "Software built around your business",
    overviewBody:
      "We engineer bespoke platforms, internal tools, and customer-facing apps that fit your processes — with clean architecture and long-term maintainability.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Domain-driven design",
        description:
          "Model complex business logic with clear boundaries and extensible modules.",
        imageSide: "left",
      },
      {
        title: "API-first architecture",
        description:
          "Integrate with existing systems through well-documented, versioned APIs.",
        imageSide: "right",
      },
    ],
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "GraphQL"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, accessible web apps with modern frameworks and pixel-perfect UX.",
    overviewHeading: "Web experiences that convert and scale",
    overviewBody:
      "We build marketing sites, SaaS dashboards, and e-commerce platforms with Next.js, React, and performance-first engineering.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Performance & SEO",
        description:
          "Server rendering, image optimization, and Core Web Vitals tuning out of the box.",
        imageSide: "left",
      },
      {
        title: "Design system integration",
        description:
          "Pixel-perfect implementation of your brand with reusable component libraries.",
        imageSide: "right",
      },
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Sanity"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    tagline: "Native and cross-platform mobile experiences for iOS and Android.",
    overviewHeading: "Mobile apps users love",
    overviewBody:
      "From consumer apps to field-service tools, we deliver polished mobile experiences with offline support, push notifications, and secure auth.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Cross-platform delivery",
        description:
          "React Native and Flutter builds that share logic while feeling native on each platform.",
        imageSide: "left",
      },
      {
        title: "App store readiness",
        description:
          "CI/CD, crash reporting, and release management for smooth launches.",
        imageSide: "right",
      },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Reliable cloud infrastructure, CI/CD, and observability for growing teams.",
    overviewHeading: "Infrastructure that keeps pace with your product",
    overviewBody:
      "We design cloud-native architectures on AWS, GCP, and Azure with automated pipelines, monitoring, and cost optimization.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Infrastructure as code",
        description:
          "Terraform and CDK modules for reproducible, auditable environments.",
        imageSide: "left",
      },
      {
        title: "Observability stack",
        description:
          "Metrics, logs, and tracing with alerting tuned to your SLOs.",
        imageSide: "right",
      },
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "devops",
    title: "DevOps",
    tagline: "CI/CD pipelines, release automation, and platform engineering for fast teams.",
    overviewHeading: "Ship faster with reliable delivery pipelines",
    overviewBody:
      "We build and optimize CI/CD workflows, deployment strategies, and developer platforms so your team releases with confidence and minimal toil.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Pipeline automation",
        description:
          "GitHub Actions, GitLab CI, and Jenkins pipelines tuned for your stack.",
        imageSide: "left",
      },
      {
        title: "Release management",
        description:
          "Blue-green, canary, and feature-flag strategies for safe production rollouts.",
        imageSide: "right",
      },
    ],
    technologies: ["GitHub Actions", "ArgoCD", "Docker", "Helm", "Prometheus"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
  {
    slug: "dedicated-team",
    title: "Dedicated Team",
    tagline: "Embedded engineers who ship features alongside your product squad.",
    overviewHeading: "Your extended engineering team",
    overviewBody:
      "Add senior developers, designers, and QA specialists who integrate with your rituals — standups, sprints, and roadmap planning included.",
    benefits: defaultBenefits,
    features: [
      {
        title: "Flexible capacity",
        description:
          "Scale team size up or down as priorities shift without long hiring cycles.",
        imageSide: "left",
      },
      {
        title: "Knowledge transfer",
        description:
          "Documentation, pairing, and handoffs so your team retains full ownership.",
        imageSide: "right",
      },
    ],
    technologies: ["Agile", "Jira", "Figma", "GitHub", "Slack"],
    workflow: defaultWorkflow,
    faq: defaultFaq,
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((service) => service.slug);
}
