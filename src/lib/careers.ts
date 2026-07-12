export const careerDepartments = [
  "All",
  "Engineering",
  "Design",
  "Product",
  "Operations",
] as const;

export type CareerDepartment = (typeof careerDepartments)[number];
export type CareerDepartmentFilter = Exclude<CareerDepartment, "All">;

export type CareerPosition = {
  slug: string;
  title: string;
  department: CareerDepartmentFilter;
  location: string;
  employmentType: string;
  description: string;
};

export const careerBenefits = [
  {
    title: "Remote-friendly",
    description: "Work from Vietnam hubs or fully remote with core overlap hours.",
    icon: "RF",
  },
  {
    title: "Learning budget",
    description: "Annual allowance for courses, conferences, and certifications.",
    icon: "LB",
  },
  {
    title: "Health coverage",
    description: "Comprehensive health insurance for you and dependents.",
    icon: "HC",
  },
  {
    title: "Flexible PTO",
    description: "Take time to recharge — minimum 18 days plus local holidays.",
    icon: "PT",
  },
  {
    title: "Modern tooling",
    description: "Latest MacBook, IDE licenses, and AI assistant subscriptions.",
    icon: "MT",
  },
  {
    title: "Ship impact",
    description: "Small squads where your work reaches production every sprint.",
    icon: "SI",
  },
] as const;

export const careerPositions: CareerPosition[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Ho Chi Minh City / Remote",
    employmentType: "Full-time",
    description:
      "Build customer-facing products with Next.js, Node, and cloud-native services.",
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Design RAG pipelines, agent workflows, and evaluation harnesses for client products.",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Da Nang / Remote",
    employmentType: "Full-time",
    description:
      "Own UX for B2B SaaS and marketing sites from discovery through handoff.",
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Ho Chi Minh City",
    employmentType: "Full-time",
    description:
      "Partner with clients to define roadmaps, write specs, and align delivery squads.",
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Maintain CI/CD, infrastructure as code, and observability for client platforms.",
  },
  {
    slug: "people-operations-specialist",
    title: "People Operations Specialist",
    department: "Operations",
    location: "Ho Chi Minh City",
    employmentType: "Full-time",
    description:
      "Support hiring, onboarding, and culture programs as Anhloom scales.",
  },
];
