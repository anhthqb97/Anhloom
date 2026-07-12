"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import {
  createEstimate,
  type EstimateAnswers,
  type EstimateResult,
} from "@/lib/ai-api";
import { cn } from "@/lib/cn";

const projectTypes = [
  "MVP / Prototype",
  "SaaS Platform",
  "AI Product",
  "Mobile App",
  "Enterprise System",
];

const featureOptions = [
  "User authentication",
  "Admin dashboard",
  "Payments & billing",
  "AI assistant",
  "Mobile apps",
  "Third-party integrations",
  "Analytics & reporting",
  "Multi-tenant architecture",
];

const timelines = ["4-8 weeks", "2-3 months", "4-6 months", "Rush delivery"];
const teamSizes = ["2-3 engineers", "4-6 engineers", "7-10 engineers"];

function exportEstimatePdf(result: EstimateResult, answers: EstimateAnswers) {
  const html = `
    <html><head><title>Anhloom Estimate</title></head><body>
    <h1>Project Cost Estimate</h1>
    <p><strong>Project type:</strong> ${answers.projectType}</p>
    <p><strong>Timeline:</strong> ${answers.timeline}</p>
    <p><strong>Team size:</strong> ${answers.teamSize}</p>
    <p><strong>Range:</strong> $${result.min_cost.toLocaleString()} - $${result.max_cost.toLocaleString()} ${result.currency}</p>
    <p>${result.summary}</p>
    <ul>${result.breakdown.map((item) => `<li><strong>${item.label}</strong> (${item.range}) — ${item.description}</li>`).join("")}</ul>
    </body></html>
  `;
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.print();
}

export function CostEstimator() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<EstimateAnswers>({
    projectType: "",
    features: [],
    timeline: "",
    teamSize: "",
    notes: "",
  });
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(answers.projectType);
    if (step === 2) return answers.features.length > 0;
    if (step === 3) return Boolean(answers.timeline && answers.teamSize);
    return true;
  }, [answers, step]);

  async function handleGenerate() {
    setLoading(true);
    try {
      const estimate = await createEstimate(answers);
      setResult(estimate);
      setStep(5);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto max-w-3xl p-6 laptop:p-8">
      <p className="text-label font-semibold uppercase tracking-wide text-accent-500">
        AI Cost Estimator
      </p>
      <h1 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
        Estimate your project budget
      </h1>
      <p className="mt-3 text-body-md text-text-secondary">
        Step {Math.min(step, 4)} of 4
      </p>

      {step === 1 ? (
        <div className="mt-8 grid gap-3 tablet:grid-cols-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setAnswers((current) => ({ ...current, projectType: type }))}
              className={cn(
                "rounded-md border px-4 py-3 text-left text-body-sm transition-colors",
                answers.projectType === type
                  ? "border-accent-500 bg-accent-50/40 text-text-primary"
                  : "border-border hover:border-primary-300",
              )}
            >
              {type}
            </button>
          ))}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8 grid gap-3 tablet:grid-cols-2">
          {featureOptions.map((feature) => {
            const selected = answers.features.includes(feature);
            return (
              <label
                key={feature}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-body-sm",
                  selected ? "border-accent-500 bg-accent-50/40" : "border-border",
                )}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    setAnswers((current) => ({
                      ...current,
                      features: selected
                        ? current.features.filter((item) => item !== feature)
                        : [...current.features, feature],
                    }))
                  }
                />
                {feature}
              </label>
            );
          })}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-8 space-y-6">
          <div>
            <p className="mb-3 text-body-sm font-medium text-text-primary">Timeline</p>
            <div className="flex flex-wrap gap-2">
              {timelines.map((timeline) => (
                <button
                  key={timeline}
                  type="button"
                  onClick={() => setAnswers((current) => ({ ...current, timeline }))}
                  className={cn(
                    "rounded-full border px-4 py-2 text-body-sm",
                    answers.timeline === timeline
                      ? "border-accent-500 bg-accent-500 text-white"
                      : "border-border",
                  )}
                >
                  {timeline}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-body-sm font-medium text-text-primary">Team size</p>
            <div className="flex flex-wrap gap-2">
              {teamSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setAnswers((current) => ({ ...current, teamSize: size }))}
                  className={cn(
                    "rounded-full border px-4 py-2 text-body-sm",
                    answers.teamSize === size
                      ? "border-accent-500 bg-accent-500 text-white"
                      : "border-border",
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="mt-8 space-y-4 text-body-sm text-text-secondary">
          <p><strong>Project:</strong> {answers.projectType}</p>
          <p><strong>Features:</strong> {answers.features.join(", ")}</p>
          <p><strong>Timeline:</strong> {answers.timeline}</p>
          <p><strong>Team:</strong> {answers.teamSize}</p>
          <Textarea
            rows={4}
            placeholder="Additional context (optional)"
            value={answers.notes}
            onChange={(event) =>
              setAnswers((current) => ({ ...current, notes: event.target.value }))
            }
          />
        </div>
      ) : null}

      {step === 5 && result ? (
        <div className="mt-8 space-y-6">
          <div className="rounded-md border border-border bg-bg-subtle p-5">
            <p className="text-display-sm font-bold text-primary-600">
              ${result.min_cost.toLocaleString()} – ${result.max_cost.toLocaleString()} {result.currency}
            </p>
            <p className="mt-2 text-body-md text-text-secondary">{result.summary}</p>
          </div>
          <div className="space-y-3">
            {result.breakdown.map((item) => (
              <div key={item.label} className="rounded-md border border-border p-4">
                <p className="font-semibold text-text-primary">{item.label}</p>
                <p className="text-body-sm text-primary-600">{item.range}</p>
                <p className="mt-1 text-body-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => result && exportEstimatePdf(result, answers)}>
              Export PDF
            </Button>
          </div>
          {leadSubmitted ? (
            <p className="rounded-md border border-border bg-surface p-4 text-body-sm text-text-secondary">
              Thanks — we&apos;ll follow up with a detailed proposal.
            </p>
          ) : (
            <form
              className="space-y-3 border-t border-border pt-6"
              onSubmit={(event) => {
                event.preventDefault();
                setLeadSubmitted(true);
              }}
            >
              <p className="text-body-md font-semibold text-text-primary">
                Get the full estimate by email
              </p>
              <Input name="name" placeholder="Full name" required />
              <Input name="email" type="email" placeholder="Work email" required />
              <Input name="company" placeholder="Company" required />
              <Button type="submit" className="w-full">
                Send me the estimate
              </Button>
            </form>
          )}
        </div>
      ) : null}

      {step < 5 ? (
        <div className="mt-8 flex justify-between gap-3">
          <Button
            variant="secondary"
            disabled={step === 1}
            onClick={() => setStep((current) => Math.max(1, current - 1))}
          >
            Back
          </Button>
          {step < 4 ? (
            <Button disabled={!canContinue} onClick={() => setStep((current) => current + 1)}>
              Continue
            </Button>
          ) : (
            <Button disabled={loading} onClick={handleGenerate}>
              {loading ? "Generating..." : "Generate estimate"}
            </Button>
          )}
        </div>
      ) : null}
    </Card>
  );
}
