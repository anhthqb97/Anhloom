"use client";

import type { BlogPostSection } from "@/lib/blog-posts";
import { cn } from "@/lib/cn";

type ArticleTOCProps = {
  sections: BlogPostSection[];
  className?: string;
};

export function ArticleTOC({ sections, className }: ArticleTOCProps) {
  return (
    <nav
      className={cn("hidden laptop:block", className)}
      aria-label="Table of contents"
    >
      <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
        On this page
      </p>
      <ul className="mt-4 space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-body-sm text-text-secondary transition-colors hover:text-primary-600"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
