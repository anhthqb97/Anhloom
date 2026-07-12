"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Section } from "@/components/Section";
import { Textarea } from "@/components/Textarea";
import type { SolutionDetail } from "@/lib/solution-details";

type SolutionGalleryDemoProps = {
  solution: SolutionDetail;
};

export function SolutionGalleryDemo({ solution }: SolutionGalleryDemoProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section>
      <Container>
        <div className="grid gap-10 laptop:grid-cols-2 laptop:gap-16">
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Screenshots
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
              See {solution.title} in action
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10 shadow-md" />
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-50 to-accent-50" />
                <div className="aspect-square rounded-lg bg-gradient-to-br from-accent-50 to-secondary-500/10" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
              Demo Request
            </p>
            <h2 className="mt-2 text-heading-xl font-semibold text-text-primary">
              Get a personalized walkthrough
            </h2>
            {submitted ? (
              <p className="mt-6 rounded-md border border-border bg-surface p-6 text-body-md text-text-secondary">
                Thanks! We&apos;ll reach out to schedule your {solution.title}{" "}
                demo within one business day.
              </p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <Input name="name" placeholder="Your name" required />
                <Input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  required
                />
                <Input name="company" placeholder="Company" required />
                <Textarea
                  name="message"
                  placeholder="What would you like to see in the demo?"
                  rows={4}
                />
                <Button type="submit">Request Demo</Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
