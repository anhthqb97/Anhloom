"use client";

import { Container } from "@/components/Container";
import {
  ProjectFilterTabs,
  type ProjectFilterCategory,
} from "@/components/ProjectFilterTabs";
import { Section } from "@/components/Section";

export function FeaturedProjects() {
  const activeCategory: ProjectFilterCategory = "All";

  return (
    <Section className="bg-bg-subtle">
      <Container>
        <ProjectFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={() => undefined}
          className="mb-10"
        />
        <div className="grid gap-6 laptop:grid-cols-3" />
      </Container>
    </Section>
  );
}
