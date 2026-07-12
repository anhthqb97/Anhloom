"use client";

import { useState } from "react";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const handlePrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <Section className="bg-bg-subtle">
      <Container>
        <div className="mx-auto max-w-3xl">
          <TestimonialCard
            key={activeTestimonial.name}
            name={activeTestimonial.name}
            role={activeTestimonial.role}
            company={activeTestimonial.company}
            quote={activeTestimonial.quote}
            rating={activeTestimonial.rating}
          />
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="rounded-full border border-border px-4 py-2 text-body-sm font-medium hover:bg-bg-muted"
            aria-label="Previous testimonial"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  index === activeIndex ? "bg-primary-600" : "bg-border",
                )}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border border-border px-4 py-2 text-body-sm font-medium hover:bg-bg-muted"
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </Container>
    </Section>
  );
}
