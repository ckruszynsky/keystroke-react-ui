import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "../../utils/cn";

const containerVariants = cva("mx-auto ", {
  variants: {
    variant: {
      default: "container-full md:px-6 md:py-2 lg:px-8 lg:py-6",
      full: "container-full md:py-2 md:px-2",
      padded: "container-full md:p-4 lg:p-6",
      centered: "mx-auto max-w-7xl md:px-6 md:py-2 lg:px-8 lg:py-6",
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
