export const blogCategories = [
  "All",
  "AI",
  "Engineering",
  "Cloud",
  "DevOps",
  "Startup",
  "Product",
  "Tutorials",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
export type BlogCategoryFilter = Exclude<BlogCategory, "All">;

export type BlogPostSection = {
  id: string;
  heading: string;
  content: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategoryFilter;
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  sections: BlogPostSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-rag-systems-to-production",
    title: "Shipping RAG Systems to Production",
    excerpt:
      "A practical playbook for moving retrieval-augmented generation from demo to production with observability and guardrails.",
    category: "AI",
    author: "Anh Th",
    authorRole: "Lead AI Engineer",
    publishedAt: "2026-06-12",
    readingTime: "8 min read",
    featured: true,
    tags: ["RAG", "LLM", "MLOps"],
    sections: [
      {
        id: "why-rag",
        heading: "Why RAG beats fine-tuning for most products",
        content:
          "Most teams reach for fine-tuning when they need domain knowledge. In practice, RAG delivers faster iteration, clearer attribution, and lower retraining cost for knowledge that changes frequently.",
      },
      {
        id: "architecture",
        heading: "Reference architecture",
        content:
          "A production RAG stack typically includes ingestion pipelines, chunking strategy, vector storage, retrieval reranking, prompt templates, and evaluation harnesses tied to business metrics.",
      },
      {
        id: "guardrails",
        heading: "Guardrails that matter",
        content:
          "Policy filters, citation requirements, and human escalation paths prevent the most common production failures. Instrument every stage so you can trace bad answers back to source documents.",
      },
    ],
  },
  {
    slug: "nextjs-app-router-patterns-for-marketing-sites",
    title: "Next.js App Router Patterns for Marketing Sites",
    excerpt:
      "How we structure content pages, CMS fallbacks, and static generation for fast marketing sites.",
    category: "Engineering",
    author: "Anh Th",
    authorRole: "Founder & CTO",
    publishedAt: "2026-05-28",
    readingTime: "6 min read",
    tags: ["Next.js", "React", "Architecture"],
    sections: [
      {
        id: "route-groups",
        heading: "Route groups and layouts",
        content:
          "We isolate marketing pages under a site route group with shared navbar and footer layouts, keeping studio and API routes separate from public content.",
      },
      {
        id: "cms-fallback",
        heading: "CMS with static fallback",
        content:
          "Every content type ships with typed static data and a Sanity resolver. Builds succeed without CMS credentials while editors can override content in production.",
      },
      {
        id: "ssg",
        heading: "Static generation strategy",
        content:
          "Detail pages use generateStaticParams from static slugs so deploys stay fast and predictable, with on-demand revalidation added when needed.",
      },
    ],
  },
  {
    slug: "kubernetes-cost-controls-for-startups",
    title: "Kubernetes Cost Controls for Startups",
    excerpt:
      "Practical ways to keep cloud bills predictable while you scale from MVP to production traffic.",
    category: "Cloud",
    author: "Anh Th",
    authorRole: "Cloud Architect",
    publishedAt: "2026-05-10",
    readingTime: "7 min read",
    tags: ["Kubernetes", "FinOps", "AWS"],
    sections: [
      {
        id: "right-sizing",
        heading: "Right-size before you optimize",
        content:
          "Start with resource requests based on measured usage, not guesses. Most early-stage clusters are over-provisioned by 40–60%.",
      },
      {
        id: "autoscaling",
        heading: "Autoscaling with guardrails",
        content:
          "HPA and cluster autoscaler help, but cap maximum nodes and set budget alerts. Combine spot instances for non-critical workloads.",
      },
      {
        id: "observability",
        heading: "Cost observability",
        content:
          "Tag every workload by team and environment. Review cost per feature monthly — it changes prioritization conversations quickly.",
      },
    ],
  },
  {
    slug: "ci-cd-pipelines-that-dont-block-shipping",
    title: "CI/CD Pipelines That Don't Block Shipping",
    excerpt:
      "Lean pipeline design for small teams that still need confidence on every merge to main.",
    category: "DevOps",
    author: "Anh Th",
    authorRole: "DevOps Lead",
    publishedAt: "2026-04-22",
    readingTime: "5 min read",
    tags: ["CI/CD", "GitHub Actions"],
    sections: [
      {
        id: "fast-feedback",
        heading: "Optimize for fast feedback",
        content:
          "Run lint and typecheck in parallel with unit tests. Keep the default PR pipeline under ten minutes.",
      },
      {
        id: "deploy-gates",
        heading: "Deploy gates without friction",
        content:
          "Staging deploys on main merges; production stays manual or tagged until you have rollback confidence.",
      },
    ],
  },
  {
    slug: "mvp-scope-traps-to-avoid",
    title: "MVP Scope Traps to Avoid",
    excerpt:
      "Three scope decisions that quietly double MVP timelines — and how to cut them early.",
    category: "Startup",
    author: "Anh Th",
    authorRole: "Product Strategist",
    publishedAt: "2026-04-05",
    readingTime: "4 min read",
    tags: ["MVP", "Product"],
    sections: [
      {
        id: "custom-everything",
        heading: "Custom everything",
        content:
          "Bespoke admin panels and workflow builders feel important but rarely matter for first revenue. Buy or template until you have paying users.",
      },
      {
        id: "multi-tenant-day-one",
        heading: "Multi-tenant on day one",
        content:
          "Tenant isolation adds complexity across auth, billing, and data models. Single-tenant or simple org IDs are enough for most MVPs.",
      },
    ],
  },
  {
    slug: "designing-pricing-pages-that-convert",
    title: "Designing Pricing Pages That Convert",
    excerpt:
      "Tier structure, social proof, and CTA placement patterns we use on high-converting B2B sites.",
    category: "Product",
    author: "Anh Th",
    authorRole: "Product Designer",
    publishedAt: "2026-03-18",
    readingTime: "5 min read",
    tags: ["Pricing", "UX"],
    sections: [
      {
        id: "three-tiers",
        heading: "Three tiers, one recommendation",
        content:
          "Most buyers choose the middle tier when it is clearly marked as popular. Anchor with a higher enterprise tier to frame value.",
      },
      {
        id: "cta-placement",
        heading: "CTA placement",
        content:
          "Repeat the primary CTA after feature comparison and FAQ. Buyers decide after scanning objections, not hero copy.",
      },
    ],
  },
];

export const BLOG_PAGE_SIZE = 3;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getFeaturedBlogPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getRelatedBlogPosts(
  slug: string,
  limit = 3,
): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) {
    return blogPosts.slice(0, limit);
  }

  return blogPosts
    .filter(
      (post) =>
        post.slug !== slug &&
        (post.category === current.category ||
          post.tags.some((tag) => current.tags.includes(tag))),
    )
    .slice(0, limit);
}
