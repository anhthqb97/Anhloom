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
