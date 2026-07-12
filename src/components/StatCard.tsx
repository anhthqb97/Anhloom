"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { cn } from "@/lib/cn";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <AnimatedCounter
        value={value}
        className="text-heading-xl font-bold text-primary-600 laptop:text-display-md"
      />
      <span className="mt-1 text-body-sm text-text-secondary">{label}</span>
    </div>
  );
}
