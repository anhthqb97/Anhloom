import { type ComponentProps } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-secondary-500/10 px-2.5 py-0.5",
        "text-label font-medium text-secondary-700",
        className,
      )}
      {...props}
    />
  );
}
