"use client";

import { Input } from "@/components/Input";

type BlogSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export function BlogSearchInput({
  value,
  onChange,
  className,
}: BlogSearchInputProps) {
  return (
    <Input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search articles..."
      aria-label="Search blog articles"
      className={className}
    />
  );
}
