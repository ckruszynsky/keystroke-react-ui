import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

const spinnerVariants = cva("animate-spin", {
  variants: {
    variant: {
      default: "text-inherit",
      primary: "text-primary-500",
      secondary: "text-gray-500",
      danger: "text-red-500",
      success: "text-green-500",
      warning: "text-yellow-500",
    },
    size: {
      default: "h-6 w-6",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-16 w-16",
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
});

export type SpinnerProps = VariantProps<typeof spinnerVariants> & {
  asChild?: boolean;
  className?: string;
  fullHeight?: boolean;
  text?: React.ReactNode | string;
};

const Spinner = ({
  size,
  variant,
  className = "",
  asChild = false,
  fullHeight = false,
  text = "",
}: SpinnerProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      {!asChild && (
        <Comp
          className={`flex flex-row items-center justify-center ${fullHeight ? "h-screen" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "animate-spin",
              spinnerVariants({ size, variant, className })
            )}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          {typeof text === "string" && (
            <div
              className={`ml-2 ${calculateColor(variant)}
               ${calculateSize(size)}`}
            >
              {text}
            </div>
          )}
          {typeof text !== "string" && text}
          <span className="sr-only">Loading</span>
        </Comp>
      )}
      {asChild && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "animate-spin",
            spinnerVariants({ size, variant, className })
          )}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      )}
    </>
  );
};

function calculateSize(size: string | null | undefined) {
  return size === "default"
    ? "text-xl"
    : size === "sm"
      ? "text-sm"
      : size === "md"
        ? "text-md"
        : size === "lg"
          ? "text-2xl"
          : size === "xl"
            ? "text-3xl"
            : "text-xl";
}

function calculateColor(variant: string | null | undefined) {
  return variant === "default"
    ? "text-current"
    : variant === "primary"
      ? "text-primary-500"
      : variant === "secondary"
        ? "text-gray-500"
        : variant === "danger"
          ? "text-danger-500"
          : variant === "warning"
            ? "text-yellow-500"
            : variant === "success"
              ? "text-green-500"
              : "text-current";
}

Spinner.displayName = "Spinner";
export { Spinner, spinnerVariants };
