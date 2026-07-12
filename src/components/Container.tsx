import { type ComponentProps } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1400px] px-4",
        "tablet:max-w-[600px]",
        "laptop:max-w-[960px]",
        "desktop:max-w-[1200px]",
        "ultra:max-w-[1400px]",
        className,
      )}
      {...props}
    />
  );
}
