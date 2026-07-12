import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

const variantClasses = {
  primary:
    "bg-primary-600 text-white hover:brightness-[1.04] hover:shadow-md",
  secondary:
    "border border-primary-600 bg-transparent text-primary-600 hover:brightness-[1.04] hover:shadow-md",
  ghost:
    "bg-transparent text-text-secondary hover:brightness-[1.04] hover:shadow-md",
  accent:
    "bg-accent-500 text-white hover:brightness-[1.04] hover:shadow-md",
} as const;

const sizeClasses = {
  sm: "h-8 px-3 text-body-sm",
  md: "h-10 px-4 text-body-md",
  lg: "h-12 px-6 text-body-md",
  xl: "h-14 px-8 text-body-lg",
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      type = "button",
      variant = "primary",
      size = "md",
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap",
          "rounded-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          "active:scale-[0.98] disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
