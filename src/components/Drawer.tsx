"use client";

import { type ReactNode, useEffect } from "react";

import { cn } from "@/lib/cn";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function Drawer({ open, onClose, children, className }: DrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="laptop:hidden">
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-[280ms] ease-out",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface p-6 shadow-xl",
          "transition-transform duration-[280ms] ease-out",
          open ? "translate-x-0" : "translate-x-full",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
