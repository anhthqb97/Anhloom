export const technologyCategories = [
  "Frontend",
  "Backend",
  "Cloud",
  "AI",
  "Infrastructure",
  "DevOps",
  "Database",
  "Security",
] as const;

export type TechnologyCategory = (typeof technologyCategories)[number];

export const techStack: Record<TechnologyCategory, readonly string[]> = {
  Frontend: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  Backend: ["Python", "FastAPI", "Laravel", "Node.js", "GraphQL"],
  Cloud: ["AWS", "GCP", "Azure", "Vercel", "Cloudflare"],
  AI: ["OpenAI", "Claude", "Gemini", "LangChain", "LangGraph"],
  Infrastructure: ["Docker", "Kubernetes", "Nginx", "Traefik", "Linux"],
  DevOps: ["Terraform", "GitHub Actions", "ArgoCD", "Helm", "Prometheus"],
  Database: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Elasticsearch"],
  Security: ["OAuth 2.0", "Sanctum", "Vault", "OWASP", "Snyk"],
};
