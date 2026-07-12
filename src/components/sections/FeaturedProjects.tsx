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
        />
      </Container>
    </Section>
  );
}
