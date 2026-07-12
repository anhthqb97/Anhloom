"use client";

import { cn } from "@/lib/cn";
import { blogCategories, type BlogCategory } from "@/lib/blog-posts";

type BlogCategoryTabsProps = {
  activeCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
  className?: string;
};

export function BlogCategoryTabs({
  activeCategory,
  onCategoryChange,
  className,
}: BlogCategoryTabsProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="tablist"
      aria-label="Filter blog posts by category"
    >
      {blogCategories.map((category) => {
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
