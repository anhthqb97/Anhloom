import re

from pydantic import BaseModel, Field

from app.services.llm import generate_completion

ESTIMATE_PROMPT = """
You are Anhloom's project estimation assistant.
Return a concise cost estimate breakdown for a software project.
Use USD ranges and practical delivery assumptions.
"""


class EstimateRequest(BaseModel):
    project_type: str
    features: list[str] = Field(default_factory=list)
    timeline: str
    team_size: str
    notes: str = ""


class EstimateBreakdownItem(BaseModel):
    label: str
    range: str
    description: str


class EstimateResponse(BaseModel):
    min_cost: int
    max_cost: int
    currency: str = "USD"
    summary: str
    breakdown: list[EstimateBreakdownItem]


def rule_based_estimate(payload: EstimateRequest) -> EstimateResponse:
    base = {
        "MVP / Prototype": (25000, 60000),
        "SaaS Platform": (80000, 180000),
        "AI Product": (90000, 220000),
        "Mobile App": (70000, 160000),
        "Enterprise System": (120000, 320000),
    }.get(payload.project_type, (50000, 120000))

    feature_multiplier = 1 + min(len(payload.features), 8) * 0.08
    timeline_multiplier = 1.1 if "rush" in payload.timeline.lower() else 1.0
    team_digits = re.search(r"\d+", payload.team_size)
    team_value = int(team_digits.group()) if team_digits else 2
    team_multiplier = 1.0 + max(team_value - 2, 0) * 0.05

    min_cost = int(base[0] * feature_multiplier * timeline_multiplier * team_multiplier)
    max_cost = int(base[1] * feature_multiplier * timeline_multiplier * team_multiplier)

    return EstimateResponse(
        min_cost=min_cost,
        max_cost=max_cost,
        summary=(
            f"Estimated range for a {payload.project_type.lower()} with "
            f"{len(payload.features)} selected capabilities over {payload.timeline.lower()}."
        ),
        breakdown=[
            EstimateBreakdownItem(
                label="Discovery & architecture",
                range=f"${int(min_cost * 0.15):,} – ${int(max_cost * 0.15):,}",
                description="Workshops, technical discovery, and delivery planning.",
            ),
            EstimateBreakdownItem(
                label="Design & implementation",
                range=f"${int(min_cost * 0.55):,} – ${int(max_cost * 0.55):,}",
                description="Product design, engineering, QA, and iteration.",
            ),
            EstimateBreakdownItem(
                label="Launch & stabilization",
                range=f"${int(min_cost * 0.30):,} – ${int(max_cost * 0.30):,}",
                description="Deployment, observability, handoff, and post-launch support.",
            ),
        ],
    )


async def generate_estimate(payload: EstimateRequest) -> EstimateResponse:
    fallback = rule_based_estimate(payload)
    prompt = (
        f"Project type: {payload.project_type}\n"
        f"Features: {', '.join(payload.features)}\n"
        f"Timeline: {payload.timeline}\n"
        f"Team size: {payload.team_size}\n"
        f"Notes: {payload.notes}\n"
        f"Baseline range: ${fallback.min_cost:,} - ${fallback.max_cost:,}"
    )

    try:
        await generate_completion(system_prompt=ESTIMATE_PROMPT, user_prompt=prompt)
    except Exception:
        pass

    return fallback
