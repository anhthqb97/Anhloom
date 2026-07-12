"use client";

import { useState } from "react";

import { cn } from "@/lib/cn";

export type FaqItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
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
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-body-md font-semibold text-text-primary">
                {item.question}
              </span>
              <span
                className="text-body-lg text-primary-600"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-border px-6 pb-4 pt-2">
                <p className="text-body-md text-text-secondary">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
