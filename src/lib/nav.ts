export const serviceNavLinks = [
  { label: "AI Engineering", href: "/services/ai-engineering" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Development", href: "/services/mobile-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Dedicated Team", href: "/services/dedicated-team" },
] as const;

export const solutionNavLinks = [
  { label: "AI Chatbot", href: "/solutions/ai-chatbot" },
  { label: "AI Agent", href: "/solutions/ai-agent" },
  { label: "CRM", href: "/solutions/crm" },
  { label: "ERP", href: "/solutions/erp" },
  { label: "SaaS", href: "/solutions/saas" },
  { label: "Marketplace", href: "/solutions/marketplace" },
  { label: "E-commerce", href: "/solutions/e-commerce" },
] as const;

export const primaryNavLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
] as const;

export const footerLinkGroups = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Engineering", href: "/services/ai-engineering" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "Dedicated Team", href: "/services/dedicated-team" },
  ],
  resources: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Technologies", href: "/technologies" },
    { label: "Pricing", href: "/pricing" },
  ],
  legal: [{ label: "Privacy Policy", href: "/privacy" }],
} as const;
