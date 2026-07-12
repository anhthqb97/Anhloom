"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { cn } from "@/lib/cn";

type MegaMenuProps = {
  label: string;
  href: string;
  children: ReactNode;
};

export function MegaMenu({ label, href, children }: MegaMenuProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex items-center text-body-md font-medium text-text-secondary transition-colors hover:text-text-primary"
      >
        {label}
        <span className="ml-0.5 text-text-muted" aria-hidden="true">
          ▾
        </span>
      </Link>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 pt-4 opacity-0",
          "translate-y-1 transition-all duration-200",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100",
        )}
      >
        <div className="w-[720px] rounded-lg border border-border bg-surface p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

type MegaMenuColumnProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function MegaMenuColumn({
  title,
  children,
  className,
}: MegaMenuColumnProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-label font-semibold uppercase tracking-wide text-text-muted">
        {title}
      </p>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

type MegaMenuLinkProps = {
  href: string;
  children: ReactNode;
};

export function MegaMenuLink({ href, children }: MegaMenuLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-sm px-2 py-1.5 text-body-md text-text-secondary transition-colors hover:bg-bg-subtle hover:text-text-primary"
      >
        {children}
      </Link>
    </li>
  );
}
