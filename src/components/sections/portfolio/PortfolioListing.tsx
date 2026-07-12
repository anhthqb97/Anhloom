"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import {
  ProjectFilterTabs,
  type ProjectFilterCategory,
} from "@/components/ProjectFilterTabs";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

export function PortfolioListingHero() {
  return (
    <Section padding="lg" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="hero-gradient-bg absolute -inset-[20%] opacity-20" />
      </div>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Portfolio
          </p>
          <h1 className="mt-4 text-display-md font-bold tracking-tight text-text-primary laptop:text-display-lg">
            Products we have helped bloom
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-text-secondary">
            Explore recent work across AI, SaaS, and industry platforms — with
            measurable outcomes for every engagement.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export function PortfolioFilterBar() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>("All");

  return (
    <Section>
      <Container>
        <ProjectFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </Container>
    </Section>
  );
}

export function PortfolioListingGrid() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section>
      <Container>
        <ProjectFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          className="mb-10"
        />
        <div className="grid gap-6 laptop:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              technologies={project.technologies}
              result={project.result}
              summary={project.summary}
              href={`/portfolio/${project.slug}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
