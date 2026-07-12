"use client";

import { Pagination } from "@/components/Pagination";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: BlogPaginationProps) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      className={className}
      ariaLabel="Blog pagination"
    />
  );
}
