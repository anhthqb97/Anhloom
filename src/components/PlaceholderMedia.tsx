import { cn } from "@/lib/cn";

type PlaceholderMediaProps = {
  alt: string;
  className?: string;
  decorative?: boolean;
};

export function PlaceholderMedia({
  alt,
  className,
  decorative = false,
}: PlaceholderMediaProps) {
  return (
    <div
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : alt}
      aria-hidden={decorative || undefined}
      className={cn(
        "bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10",
        className,
      )}
    />
  );
}
