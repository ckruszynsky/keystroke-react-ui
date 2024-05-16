import * as React from "react";
import { cn } from "../../utils/cn";

export type CardHeadertProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode | string;
  horizontal?: boolean;
};

const CardHeader = React.forwardRef<HTMLDivElement, CardHeadertProps>(
  ({ horizontal, className, children, ...props }, ref) => {
    return typeof children === "string" ? (
      <div
        ref={ref}
        className={cn(
          "flex",
          horizontal ? "flex-row" : "flex-col justify-center ",
          className
        )}
        {...props}
      >
        <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
          {children}
        </h5>
      </div>
    ) : (
      <div
        ref={ref}
        className={cn("flex", horizontal ? "flex-row" : "flex-col", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";
export { CardHeader };
