"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type MegaMenuProps = {
  label: string;
  href: string;
  children: ReactNode;
};

export function MegaMenu({ label, href, children }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="inline-flex items-center gap-1">
        <Link
          href={href}
          className="text-body-md font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          {label}
        </Link>
        <button
          type="button"
          className="inline-flex size-8 items-center justify-center rounded-sm text-text-muted transition-colors hover:bg-bg-muted hover:text-text-primary"
          aria-expanded={open}
          aria-controls={menuId}
          aria-haspopup="true"
          aria-label={`${label} menu`}
          onClick={() => setOpen((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setOpen(true);
            }
          }}
        >
          <span aria-hidden="true">▾</span>
        </button>
      </div>
      <div
        id={menuId}
        className={cn(
          "absolute left-0 top-full z-50 pt-4 transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0",
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
