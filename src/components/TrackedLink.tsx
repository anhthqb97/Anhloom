"use client";

import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventParams?: Record<string, string>;
};

export function TrackedLink({
  children,
  className,
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      className={cn(className)}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
