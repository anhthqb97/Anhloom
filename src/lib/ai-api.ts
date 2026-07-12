export type EstimateAnswers = {
  projectType: string;
  features: string[];
  timeline: string;
  teamSize: string;
  notes: string;
};

export type EstimateBreakdownItem = {
  label: string;
  range: string;
  description: string;
};

export type EstimateResult = {
  min_cost: number;
  max_cost: number;
  currency: string;
  summary: string;
  breakdown: EstimateBreakdownItem[];
};

export type SearchResult = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  snippet: string;
  score: number;
};

export type RecommendationResult = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  score: number;
};

export async function createEstimate(
  answers: EstimateAnswers,
): Promise<EstimateResult> {
  const response = await fetch("/api/estimate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_type: answers.projectType,
      features: answers.features,
      timeline: answers.timeline,
      team_size: answers.teamSize,
      notes: answers.notes,
    }),
  });

  if (!response.ok) {
    throw new Error("Estimate request failed.");
  }

  return response.json();
}

export async function semanticSearch(
  query: string,
  limit = 5,
): Promise<SearchResult[]> {
  const response = await fetch("/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, limit }),
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function fetchRecommendations(
  slug: string,
  limit = 3,
): Promise<RecommendationResult[]> {
  const response = await fetch("/api/recommendations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug, limit }),
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function askFaq(payload: {
  serviceTitle: string;
  question: string;
  context?: string;
}): Promise<string> {
  const response = await fetch("/api/faq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_title: payload.serviceTitle,
      question: payload.question,
      context: payload.context ?? "",
    }),
  });

  if (!response.ok) {
    throw new Error("FAQ request failed.");
  }

  const data = (await response.json()) as { answer: string };
  return data.answer;
}

export async function gatherRequirements(payload: {
  serviceTitle: string;
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  userMessage: string;
}): Promise<{ reply: string; export_markdown: string }> {
  const response = await fetch("/api/requirements", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_title: payload.serviceTitle,
      messages: payload.messages,
      user_message: payload.userMessage,
    }),
  });

  if (!response.ok) {
    throw new Error("Requirements request failed.");
  }

  return response.json();
}
