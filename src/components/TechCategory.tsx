import { cn } from "@/lib/cn";

type TechCategoryProps = {
  title: string;
  items: readonly string[];
  className?: string;
};

export function TechCategory({ title, items, className }: TechCategoryProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h3 className="text-body-sm font-semibold uppercase tracking-wide text-text-muted">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-surface px-3 py-2 text-body-sm font-medium text-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
