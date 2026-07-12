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
  loading?: boolean;
};

function ButtonSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4 animate-spin", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      type = "button",
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
          "rounded-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
          "active:scale-[0.98] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <>
            <span className="invisible inline-flex items-center gap-2">
              {children}
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <ButtonSpinner />
            </span>
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
