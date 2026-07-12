"use client";

import { useState } from "react";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Input } from "@/components/Input";
import { RecaptchaNotice } from "@/components/RecaptchaNotice";
import { Section } from "@/components/Section";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { trackEvent } from "@/lib/analytics";
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
            <p
              className="mt-6 rounded-md border border-border bg-surface p-6 text-body-md text-text-secondary"
              role="status"
              aria-live="polite"
            >
              Thanks for applying! Our team will review your application and
              respond within five business days.
            </p>
          ) : (
            <form
              className="mt-8 space-y-4"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                trackEvent("form_submit", { form_name: "careers" });
                setSubmitted(true);
              }}
            >
              <div>
                <label htmlFor="careers-name" className="mb-2 block text-body-sm font-medium text-text-primary">
                  Full name
                </label>
                <Input id="careers-name" name="name" autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="careers-email" className="mb-2 block text-body-sm font-medium text-text-primary">
                  Email address
                </label>
                <Input
                  id="careers-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="careers-phone" className="mb-2 block text-body-sm font-medium text-text-primary">
                  Phone number
                </label>
                <Input id="careers-phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="careers-position" className="mb-2 block text-body-sm font-medium text-text-primary">
                  Position
                </label>
                <Select id="careers-position" name="position" required defaultValue="">
                  <option value="" disabled>
                    Select a position
                  </option>
                  {careerPositions.map((position) => (
                    <option key={position.slug} value={position.slug}>
                      {position.title}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <label htmlFor="careers-linkedin" className="mb-2 block text-body-sm font-medium text-text-primary">
                  LinkedIn profile URL
                </label>
                <Input id="careers-linkedin" name="linkedin" type="url" />
              </div>
              <div>
                <label htmlFor="careers-cover-letter" className="mb-2 block text-body-sm font-medium text-text-primary">
                  Cover letter
                </label>
                <Textarea
                  id="careers-cover-letter"
                  name="coverLetter"
                  rows={5}
                  required
                />
              </div>
              <RecaptchaNotice />
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
