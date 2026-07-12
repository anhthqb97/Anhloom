import Link from "next/link";
import { type ReactNode } from "react";

import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg",
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
        {icon}
      </div>
      <h3 className="mt-4 text-heading-md font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 text-body-sm text-text-secondary">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
      >
        Learn More
        <span aria-hidden="true">→</span>
      </Link>
    </Card>
  );
}
