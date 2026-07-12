"use client";

import { cn } from "@/lib/cn";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  ariaLabel?: string;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ariaLabel = "Pagination",
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={cn("flex items-center justify-center gap-2", className)}
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="rounded-sm border border-border px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "h-9 w-9 rounded-sm text-body-sm font-medium transition-colors",
              page === currentPage
                ? "bg-primary-600 text-white"
                : "border border-border text-text-secondary hover:text-text-primary",
            )}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="rounded-sm border border-border px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
}
