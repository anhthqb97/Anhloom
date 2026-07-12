import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating?: number;
  className?: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5 text-warning"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className={cn("flex h-full flex-col p-6", className)}>
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary-100 text-body-sm font-semibold text-primary-600">
          {initials}
        </div>
        <div>
          <p className="text-body-md font-semibold text-text-primary">{name}</p>
          <p className="text-body-sm text-text-secondary">
            {role}, {company}
          </p>
        </div>
      </div>
      <StarRating rating={rating} />
      <blockquote className="mt-4 flex-1 text-body-lg italic text-text-secondary">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </Card>
  );
}
