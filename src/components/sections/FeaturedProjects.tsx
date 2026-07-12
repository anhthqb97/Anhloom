"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/Container";
import { StaggerChildren, StaggerItem } from "@/components/motion/Stagger";
import { SlideUp } from "@/components/motion/SlideUp";
import { ProjectCard } from "@/components/ProjectCard";
import {
  ProjectFilterTabs,
  type ProjectFilterCategory,
} from "@/components/ProjectFilterTabs";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectFilterCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section className="bg-bg-subtle">
      <Container>
        <SlideUp className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
            Featured Projects
          </p>
          <h2 className="mt-2 text-heading-xl font-semibold text-text-primary laptop:text-display-md">
            Products we have helped bloom
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Explore recent work across AI, SaaS, and industry platforms — with
            measurable outcomes for every engagement.
          </p>
        </SlideUp>
        <ProjectFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          className="mb-10"
        />
        <StaggerChildren className="grid gap-6 laptop:grid-cols-3">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard
                title={project.title}
                category={project.category}
                technologies={project.technologies}
                result={project.result}
                summary={project.summary}
                href={`/portfolio/${project.slug}`}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
