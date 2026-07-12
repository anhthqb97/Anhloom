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

type CardHeaderProps = ComponentProps<"div">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-6 pb-0", className)}
      {...props}
    />
  );
}
