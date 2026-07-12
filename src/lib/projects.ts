import type { ProjectFilterCategory } from "@/components/ProjectFilterTabs";

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectFilterCategory, "All">;
  technologies: string;
  result: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "finsense-ai",
    title: "FinSense AI",
    category: "FinTech",
    technologies: "React · FastAPI · AWS",
    result: "+40% conversion",
    summary:
      "AI underwriting assistant that helps finance teams approve deals faster.",
  },
  {
    slug: "careflow-platform",
    title: "CareFlow Platform",
    category: "Healthcare",
    technologies: "Next.js · Node · PostgreSQL",
    result: "-35% admin time",
    summary:
      "Patient operations dashboard for clinics managing intake and follow-ups.",
  },
  {
    slug: "edupath-lms",
    title: "EduPath LMS",
    category: "Education",
    technologies: "React · Laravel · Redis",
    result: "2x student engagement",
    summary:
      "Learning platform with adaptive modules and instructor analytics.",
  },
  {
    slug: "logitrack",
    title: "LogiTrack",
    category: "Logistics",
    technologies: "Vue · Python · GCP",
    result: "+28% delivery accuracy",
    summary:
      "Route optimization system for last-mile logistics teams.",
  },
  {
    slug: "markethub",
    title: "MarketHub",
    category: "SaaS",
    technologies: "Next.js · Stripe · Supabase",
    result: "3x GMV growth",
    summary:
      "Multi-vendor marketplace with payments, listings, and seller tools.",
  },
  {
    slug: "novacrm",
    title: "NovaCRM",
    category: "AI",
    technologies: "React · GraphQL · AWS",
    result: "+55% pipeline speed",
    summary:
      "AI-assisted CRM that prioritizes leads and drafts follow-up actions.",
  },
];
