import { type ComponentProps } from "react";

import { cn } from "@/lib/cn";

const paddingClasses = {
  default: "py-16 laptop:py-24",
  sm: "py-12 laptop:py-16",
  lg: "py-24 laptop:py-32",
} as const;

type SectionPadding = keyof typeof paddingClasses;

type SectionProps = ComponentProps<"section"> & {
  padding?: SectionPadding;
};

export function Section({
  className,
  padding = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(paddingClasses[padding], className)}
      {...props}
    />
  );
}
