"use client";

import { cn } from "@/lib/cn";

export const projectFilterCategories = [
  "All",
  "AI",
  "SaaS",
  "FinTech",
  "Healthcare",
  "Education",
  "Logistics",
] as const;

export type ProjectFilterCategory = (typeof projectFilterCategories)[number];

type ProjectFilterTabsProps = {
  activeCategory: ProjectFilterCategory;
  onCategoryChange: (category: ProjectFilterCategory) => void;
  className?: string;
};

export function ProjectFilterTabs({
  activeCategory,
  onCategoryChange,
  className,
}: ProjectFilterTabsProps) {
  return (
    <div
      className={cn("flex flex-wrap justify-center gap-2", className)}
      role="tablist"
      aria-label="Filter projects by category"
    >
      {projectFilterCategories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "rounded-full px-4 py-2 text-body-sm font-medium transition-colors",
              isActive
                ? "bg-primary-600 text-white"
                : "bg-bg-muted text-text-secondary hover:text-text-primary",
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
