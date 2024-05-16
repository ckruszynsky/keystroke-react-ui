import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "../../utils/cn";

const containerVariants = cva("mx-auto ", {
  variants: {
    variant: {
      default: "max-w-7xl px-6 py-2 lg:px-8 lg:py-6",
      full: "container-full py-2 px-2",
      padded: "container-full p-2 md:p-4 lg:p-6",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
  };

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ variant, className }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
export { Container, containerVariants };
