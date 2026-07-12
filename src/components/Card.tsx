import { type ComponentProps } from "react";

import { cn } from "@/lib/cn";

type CardProps = ComponentProps<"div">;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface text-text-primary",
        className,
      )}
      {...props}
    />
  );
}
