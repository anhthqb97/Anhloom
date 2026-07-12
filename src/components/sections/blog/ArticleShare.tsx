"use client";

import type { BlogPost } from "@/lib/blog-posts";

type ArticleShareProps = {
  post: BlogPost;
};

export function ArticleShare({ post }: ArticleShareProps) {
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${post.slug}`
      : `/blog/${post.slug}`;

  return (
    <div className="rounded-md border border-border bg-surface p-6">
      <p className="text-label font-semibold uppercase tracking-wide text-primary-600">
        Share
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-border px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:border-primary-200 hover:text-primary-600"
        >
          LinkedIn
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-border px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:border-primary-200 hover:text-primary-600"
        >
          X
        </a>
        <button
          type="button"
          onClick={() => {
            if (navigator.clipboard) {
              void navigator.clipboard.writeText(shareUrl);
            }
          }}
          className="rounded-sm border border-border px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors hover:border-primary-200 hover:text-primary-600"
        >
          Copy link
        </button>
      </div>
    </div>
  );
}
