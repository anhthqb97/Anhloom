import { cn } from "@/lib/cn";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <span className="text-heading-xl font-bold text-primary-600 laptop:text-display-md">
        {value}
      </span>
      <span className="mt-1 text-body-sm text-text-secondary">{label}</span>
    </div>
  );
}
