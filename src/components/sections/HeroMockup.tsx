export function HeroMockup() {
  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-error/70" />
        <span className="size-3 rounded-full bg-warning/70" />
        <span className="size-3 rounded-full bg-success/70" />
        <span className="ml-2 text-label text-text-muted">anhloom.app</span>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="h-4 w-28 rounded bg-bg-muted" />
          <div className="h-8 w-20 rounded-md bg-primary-100" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 rounded-lg bg-primary-50" />
          <div className="h-16 rounded-lg bg-secondary-500/10" />
          <div className="h-16 rounded-lg bg-accent-50" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-bg-muted" />
          <div className="h-3 w-5/6 rounded bg-bg-muted" />
          <div className="h-3 w-4/6 rounded bg-bg-muted" />
        </div>
        <div className="h-24 rounded-lg bg-gradient-to-r from-primary-100 via-accent-50 to-secondary-500/10" />
      </div>
    </div>
  );
}
