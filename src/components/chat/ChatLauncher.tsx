"use client";

import { cn } from "@/lib/cn";

type ChatLauncherProps = {
  open: boolean;
  onToggle: () => void;
};

export function ChatLauncher({ open, onToggle }: ChatLauncherProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "fixed bottom-6 right-6 z-[56] inline-flex size-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 laptop:bottom-8 laptop:right-8",
        !open && "animate-pulse",
      )}
      aria-label={open ? "Close AI chat" : "Open AI chat"}
      aria-expanded={open}
    >
      <svg
        className="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    </button>
  );
}
