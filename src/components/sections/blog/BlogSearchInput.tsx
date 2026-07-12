"use client";

import { useEffect, useState } from "react";

import { Input } from "@/components/Input";
import { semanticSearch, type SearchResult } from "@/lib/ai-api";
import Link from "next/link";

type BlogSearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export function BlogSearchInput({
  value,
  onChange,
  className,
}: BlogSearchInputProps) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const debouncedValue = useDebouncedValue(value);

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setResults([]);
      return;
    }

    void semanticSearch(debouncedValue, 4).then(setResults);
  }, [debouncedValue]);

  return (
    <div className={className}>
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search articles..."
        aria-label="Search blog articles"
      />
      {results.length > 0 ? (
        <div className="mt-2 rounded-md border border-border bg-surface p-2 shadow-sm">
          {results.map((result) => (
            <Link
              key={result.slug}
              href={`/blog/${result.slug}`}
              className="block rounded-sm px-3 py-2 text-body-sm hover:bg-bg-subtle"
            >
              <span className="font-medium text-text-primary">{result.title}</span>
              <span className="mt-1 block text-text-muted">
                {result.snippet.replace(/\*\*(.*?)\*\*/g, "$1")}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
