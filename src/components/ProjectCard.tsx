import Link from "next/link";

import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Card } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  title: string;
  category: string;
  technologies: string;
  result: string;
  summary: string;
  href: string;
  className?: string;
};

export function ProjectCard({
  title,
  category,
  technologies,
  result,
  summary,
  href,
  className,
}: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <PlaceholderMedia alt={`${title} project preview`} className="aspect-video w-full" />
      <div className="p-6">
        <div className="flex items-center gap-2">
          <Pill tone="primary">{category}</Pill>
        </div>
        <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
          {title}
        </h3>
        <p className="mt-2 text-body-sm text-text-secondary">{summary}</p>
        <p className="mt-3 text-body-sm text-text-muted">{technologies}</p>
        <p className="mt-2 text-body-sm font-semibold text-success">{result}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
        >
          View Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}
