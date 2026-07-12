import { cn } from "@/lib/cn";

type LogoCarouselProps = {
  children?: React.ReactNode;
  className?: string;
};

export function LogoCarousel({ children, className }: LogoCarouselProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max items-center gap-12">{children}</div>
    </div>
  );
}
