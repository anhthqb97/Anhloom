"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { Section } from "@/components/Section";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { careerPositions } from "@/lib/careers";

export function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section id="apply" className="bg-bg-muted">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Apply
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Online application
          </h2>
          {submitted ? (
            <p className="mt-6 rounded-md border border-border bg-surface p-6 text-body-md text-text-secondary">
              Thanks for applying! Our team will review your application and
              respond within five business days.
            </p>
          ) : (
            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input name="name" placeholder="Full name" required />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                required
              />
              <Input name="phone" type="tel" placeholder="Phone number" />
              <Select name="position" required defaultValue="">
                <option value="" disabled>
                  Select a position
                </option>
                {careerPositions.map((position) => (
                  <option key={position.slug} value={position.slug}>
                    {position.title}
                  </option>
                ))}
              </Select>
              <Input
                name="linkedin"
                type="url"
                placeholder="LinkedIn profile URL"
              />
              <Textarea
                name="coverLetter"
                placeholder="Why do you want to join Anhloom?"
                rows={5}
                required
              />
              <Button type="submit" className="w-full">
                Submit application
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
