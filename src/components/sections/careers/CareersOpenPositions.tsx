"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import { cn } from "@/lib/cn";
import {
  careerDepartments,
  careerPositions,
  type CareerDepartment,
} from "@/lib/careers";

export function CareersOpenPositions() {
  const [activeDepartment, setActiveDepartment] =
    useState<CareerDepartment>("All");

  const filteredPositions = useMemo(() => {
    if (activeDepartment === "All") {
      return careerPositions;
    }

    return careerPositions.filter(
      (position) => position.department === activeDepartment,
    );
  }, [activeDepartment]);

  return (
    <Section>
      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Open Positions
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Current opportunities
          </h2>
        </div>
        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter positions by department"
        >
          {careerDepartments.map((department) => {
            const isActive = activeDepartment === department;

            return (
              <button
                key={department}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveDepartment(department)}
                className={cn(
                  "rounded-full px-4 py-2 text-body-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-600 text-white"
                    : "bg-bg-muted text-text-secondary hover:text-text-primary",
                )}
              >
                {department}
              </button>
            );
          })}
        </div>
        <div className="grid gap-4">
          {filteredPositions.map((position) => (
            <Card key={position.slug} className="p-6">
              <div className="flex flex-col gap-4 laptop:flex-row laptop:items-center laptop:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-heading-md font-semibold text-text-primary">
                      {position.title}
                    </h3>
                    <Pill tone="primary">{position.department}</Pill>
                  </div>
                  <p className="mt-2 text-body-sm text-text-secondary">
                    {position.description}
                  </p>
                  <p className="mt-2 text-body-sm text-text-muted">
                    {position.location} · {position.employmentType}
                  </p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-sm border border-primary-600 px-4 text-body-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:hover:bg-primary-100/40"
                >
                  Apply now
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
