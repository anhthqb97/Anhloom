import { type ComponentProps } from "react";

import { cn } from "@/lib/cn";

const toneClasses = {
  primary: "bg-primary-100 text-primary-700 dark:text-primary-200",
  secondary: "bg-secondary-500/10 text-secondary-700 dark:text-secondary-300",
  accent: "bg-accent-100 text-accent-700 dark:text-accent-200",
  neutral: "bg-neutral-100 text-neutral-700 dark:bg-bg-muted dark:text-text-secondary",
  success: "bg-success/10 text-success",
} as const;

type PillTone = keyof typeof toneClasses;

type PillProps = ComponentProps<"span"> & {
  tone?: PillTone;
};

export function Pill({ className, tone = "primary", ...props }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-label font-medium",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
