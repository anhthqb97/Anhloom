"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { askFaq } from "@/lib/ai-api";
import type { FaqItem } from "@/components/FAQAccordion";

type FAQAssistantProps = {
  serviceTitle: string;
  items: FaqItem[];
};

export function FAQAssistant({ serviceTitle, items }: FAQAssistantProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk(question: string, context: string) {
    setActiveQuestion(question);
    setLoading(true);
    try {
      const response = await askFaq({
        serviceTitle,
        question,
        context,
      });
      setAnswer(response);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-md border border-border bg-surface"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-body-md font-semibold text-text-primary">
                {item.question}
              </span>
              <span className="text-body-lg text-primary-600" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className="border-t border-border px-6 pb-4 pt-2"
              >
                <p className="text-body-md text-text-secondary">{item.answer}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button
                    size="sm"
                    variant="accent"
                    onClick={() => handleAsk(item.question, item.answer)}
                  >
                    Ask AI
                  </Button>
                </div>
                {activeQuestion === item.question ? (
                  <div className="mt-4 space-y-3 border-t border-border pt-4">
                    <p className="text-body-sm text-text-secondary">
                      {loading ? "Thinking..." : answer}
                    </p>
                    <form
                      className="flex gap-2"
                      onSubmit={(event) => {
                        event.preventDefault();
                        if (!followUp.trim()) return;
                        void handleAsk(followUp, `${item.answer}\n${answer}`);
                        setFollowUp("");
                      }}
                    >
                      <Input
                        value={followUp}
                        onChange={(event) => setFollowUp(event.target.value)}
                        placeholder="Ask a follow-up question"
                        aria-label="FAQ follow-up question"
                      />
                      <Button type="submit" size="sm" disabled={loading}>
                        Ask
                      </Button>
                    </form>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
