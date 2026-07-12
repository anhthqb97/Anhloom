export type CaseStudyResult = {
  metric: string;
  label: string;
};

export type CaseStudyTimelinePhase = {
  phase: string;
  description: string;
};

export type CaseStudyDetail = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  industry: string;
  duration: string;
  executiveSummary: string;
  challenges: string[];
  research: string;
  solution: string;
  architectureNote: string;
  timeline: CaseStudyTimelinePhase[];
  results: CaseStudyResult[];
  lessonsLearned: string[];
  projectRef?: string;
};

const defaultTimeline: CaseStudyTimelinePhase[] = [
  {
    phase: "Discovery",
    description: "Stakeholder interviews, workflow mapping, and success metric definition.",
  },
  {
    phase: "Design",
    description: "Solution architecture, UX flows, and delivery roadmap aligned to constraints.",
  },
  {
    phase: "Build",
    description: "Iterative sprints with weekly demos, QA gates, and production hardening.",
  },
  {
    phase: "Launch",
    description: "Rollout, training, observability setup, and post-launch optimization.",
  },
];

function buildCaseStudy(
  slug: string,
  title: string,
  summary: string,
  client: string,
  industry: string,
  duration: string,
  executiveSummary: string,
  challenges: string[],
  research: string,
  solution: string,
  architectureNote: string,
  results: CaseStudyResult[],
  lessonsLearned: string[],
  projectRef?: string,
  timeline = defaultTimeline,
): CaseStudyDetail {
  return {
    slug,
    title,
    summary,
    client,
    industry,
    duration,
    executiveSummary,
    challenges,
    research,
    solution,
    architectureNote,
    timeline,
    results,
    lessonsLearned,
    projectRef,
  };
}

export const caseStudyDetails: CaseStudyDetail[] = [
  buildCaseStudy(
    "finsense-ai-underwriting",
    "FinSense AI Underwriting",
    "How a regional lender cut underwriting cycle time in half with an AI copilot.",
    "Regional Lending Group",
    "Financial Services",
    "14 weeks",
    "Anhloom partnered with a regional lender to replace manual underwriting reviews with an AI-assisted workflow. The team needed faster decisions without sacrificing compliance visibility.",
    [
      "Underwriters reconciled documents across three legacy systems.",
      "Risk scoring models were opaque and slow to tune per product.",
      "Compliance audits lacked a unified evidence trail.",
    ],
    "We interviewed underwriters, compliance officers, and relationship managers to map decision paths. Shadowing sessions revealed that 60% of time was spent locating and validating documents rather than assessing risk.",
    "We delivered a RAG-powered underwriting workspace with policy-aware scoring, document intelligence, and CRM integrations — keeping humans in the loop for edge cases.",
    "Document ingestion pipelines feed a vector index and rules engine behind a secure API gateway, with audit logs for every model-assisted recommendation.",
    [
      { metric: "+40%", label: "Conversion uplift" },
      { metric: "-50%", label: "Underwriting cycle time" },
      { metric: "3x", label: "Analyst throughput" },
    ],
    [
      "Start with workflow observation before model selection.",
      "Compliance requirements should shape the audit trail from day one.",
      "Human-in-the-loop handoffs build trust faster than full automation.",
    ],
    "finsense-ai",
  ),
  buildCaseStudy(
    "careflow-clinic-operations",
    "CareFlow Clinic Operations",
    "Reducing admin burden and no-shows for a multi-location healthcare provider.",
    "CareFlow Health Network",
    "Healthcare",
    "12 weeks",
    "CareFlow needed a single operations hub for intake, scheduling, and follow-ups across five clinic locations — without disrupting existing EHR workflows.",
    [
      "Front-desk teams relied on spreadsheets for patient intake.",
      "No-show rates climbed due to inconsistent reminder workflows.",
      "Managers lacked cross-location visibility into daily operations.",
    ],
    "Site visits and staff interviews uncovered duplicate data entry as the primary bottleneck. Patients preferred SMS reminders over phone calls, but the clinic had no unified messaging workflow.",
    "We built a HIPAA-aware operations platform with role-based workflows, automated reminders, and EHR-friendly exports that fit existing clinic routines.",
    "Modular Node services with encrypted storage, audit logging, and integration adapters for common EHR systems.",
    [
      { metric: "-35%", label: "Admin time per visit" },
      { metric: "-28%", label: "No-show rate" },
      { metric: "2x", label: "Follow-up completion" },
    ],
    [
      "Design around front-desk habits — adoption follows familiar flows.",
      "Reminder preferences vary by patient segment; defaults are not enough.",
      "Cross-location reporting must be real-time to be actionable.",
    ],
    "careflow-platform",
  ),
  buildCaseStudy(
    "novacrm-revenue-acceleration",
    "NovaCRM Revenue Acceleration",
    "AI-assisted CRM that helped a B2B SaaS team move deals faster.",
    "NovaCRM Inc.",
    "B2B SaaS",
    "10 weeks",
    "NovaCRM's sales team struggled with lead prioritization and inconsistent follow-up quality. Leadership wanted measurable pipeline velocity without adding headcount.",
    [
      "Reps spent too much time on low-intent leads.",
      "Follow-up quality varied widely across the team.",
      "CRM updates happened after calls, not during conversations.",
    ],
    "We analyzed pipeline data and call recordings to identify where deals stalled. Reps wanted next-best-action guidance inside the CRM, not in a separate tool.",
    "We embedded lead scoring, next-best-action suggestions, and email draft assistance into a customizable CRM workspace integrated with existing sales tooling.",
    "GraphQL API with AI inference services, activity streams, and webhooks for email and calendar integrations.",
    [
      { metric: "+55%", label: "Pipeline velocity" },
      { metric: "+32%", label: "Meeting booking rate" },
      { metric: "-45%", label: "Manual CRM updates" },
    ],
    [
      "AI suggestions must be explainable to earn rep trust.",
      "Integrate into existing CRM views — context switching kills adoption.",
      "Measure pipeline velocity weekly, not just at quarter close.",
    ],
    "novacrm",
  ),
];

export function getCaseStudyBySlug(
  slug: string,
): CaseStudyDetail | undefined {
  return caseStudyDetails.find((caseStudy) => caseStudy.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudyDetails.map((caseStudy) => caseStudy.slug);
}
