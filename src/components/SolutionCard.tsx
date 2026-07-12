import Link from "next/link";

import { Card } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { cn } from "@/lib/cn";

type SolutionCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  featured?: boolean;
  className?: string;
};

export function SolutionCard({
  title,
  description,
  href,
  category,
  featured = false,
  className,
}: SolutionCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full min-w-[260px] flex-col p-6",
        featured && "border-accent-200 bg-accent-50/30",
        className,
      )}
    >
      {category ? (
        <Pill tone={featured ? "accent" : "neutral"} className="w-fit">
          {category}
        </Pill>
      ) : null}
      <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-body-sm text-text-secondary">
        {description}
      </p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
      >
        Explore Solution
        <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
