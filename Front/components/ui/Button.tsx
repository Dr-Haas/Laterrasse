import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils/cn"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading = false, className, children, disabled, ...props }, ref) => {
    const baseStyles =
      "font-bebas inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantStyles = {
      primary:
        "bg-terrasse-red text-white hover:bg-terrasse-red/90 focus:ring-terrasse-red shadow-md hover:shadow-lg",
      secondary:
        "bg-terrasse-yellow text-terrasse-black hover:bg-terrasse-yellow/90 focus:ring-terrasse-yellow shadow-md hover:shadow-lg",
      outline:
        "border-2 border-terrasse-blue text-terrasse-blue hover:bg-terrasse-blue hover:text-white focus:ring-terrasse-blue",
    }

    const sizeStyles = {
      sm: "px-4 py-2 text-lg",
      md: "px-6 py-3 text-xl",
      lg: "px-8 py-4 text-2xl",
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          isLoading && "cursor-wait",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Chargement...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

