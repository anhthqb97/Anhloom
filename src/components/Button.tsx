import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap",
          "rounded-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          "active:scale-[0.98] disabled:pointer-events-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
