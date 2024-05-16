import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Spinner } from "../spinner";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-50 text-primary-700 shadow-sm hover:bg-primary-500 hover:text-white focus:ring-primary-500 focus:ring-1",
        danger:
          "bg-red-200 text-red-900 shadow-sm hover:bg-red-500 hover:text-white focus:ring-red-500 focus:ring-1",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary/50 text-secondary-foreground shadow-sm hover:bg-secondary/90 focus:ring-secondary/50 focus:ring-1",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "p-2 rounded-md",
      },
      iconAlignment: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconAlignment,
      asChild = false,
      children,
      isLoading,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "flex items-center",
            iconAlignment === "right" && "flex-row-reverse"
          )}
        >
          {isLoading && <Spinner size="sm" className="text-current" />}
          {!isLoading && icon && icon}
          <span className="mx-2">{children}</span>
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
