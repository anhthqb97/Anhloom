import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

export type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  className?: string;
};

export function TeamCard({ name, role, bio, className }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-500/10">
        <span className="text-display-md font-bold text-primary-600/60">
          {initials}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-heading-md font-semibold text-text-primary">
          {name}
        </h3>
        <p className="mt-1 text-body-sm font-medium text-primary-600">{role}</p>
        <p className="mt-3 text-body-sm text-text-secondary">{bio}</p>
      </div>
    </Card>
  );
}
