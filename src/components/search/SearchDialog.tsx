"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Input } from "@/components/Input";
import { semanticSearch, type SearchResult } from "@/lib/ai-api";
import { cn } from "@/lib/cn";

function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const debouncedQuery = useDebouncedValue(query);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    void semanticSearch(debouncedQuery).then(setResults);
  }, [debouncedQuery]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 p-4 pt-24">
      <div className="w-full max-w-2xl rounded-xl border border-border bg-surface shadow-2xl">
        <div className="border-b border-border p-4">
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, services, and guides..."
            aria-label="Global search"
          />
          <p className="mt-2 text-body-sm text-text-muted">Press Esc to close</p>
        </div>
        <div className="max-h-96 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-6 text-body-sm text-text-secondary">
              {query ? "No results yet." : "Start typing to search."}
            </p>
          ) : (
            results.map((result) => (
              <Link
                key={result.slug}
                href={`/blog/${result.slug}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-3 transition-colors hover:bg-bg-subtle",
                )}
              >
                <p className="text-body-md font-medium text-text-primary">{result.title}</p>
                <p className="mt-1 text-body-sm text-text-secondary">
                  {result.snippet.replace(/\*\*(.*?)\*\*/g, "$1")}
                </p>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
