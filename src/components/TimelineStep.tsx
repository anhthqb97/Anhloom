import { cn } from "@/lib/cn";

type TimelineStepProps = {
  number: number;
  title: string;
  isLast?: boolean;
  className?: string;
};

export function TimelineStep({
  number,
  title,
  isLast = false,
  className,
}: TimelineStepProps) {
  return (
    <div className={cn("relative flex gap-4", !isLast && "pb-8", className)}>
      {!isLast ? (
        <span
          className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-body-sm font-semibold text-primary-600">
        {number}
      </div>
      <div className="pt-2">
        <h3 className="text-heading-md font-semibold text-text-primary">
          {title}
        </h3>
      </div>
    </div>
  );
}
