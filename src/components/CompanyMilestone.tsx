import { cn } from "@/lib/cn";

type CompanyMilestoneProps = {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
};

export function CompanyMilestone({
  year,
  title,
  description,
  isLast = false,
  className,
}: CompanyMilestoneProps) {
  return (
    <div className={cn("relative flex gap-4", !isLast && "pb-8", className)}>
      {!isLast ? (
        <span
          className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-body-sm font-semibold text-primary-600">
        {year.slice(2)}
      </div>
      <div className="pt-1">
        <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
          {year}
        </p>
        <h3 className="mt-1 text-heading-md font-semibold text-text-primary">
          {title}
        </h3>
        <p className="mt-2 text-body-md text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
