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
          horizontal
            ? "flex-row items-center justify-center"
            : "flex-col items-center justify-center",
          className
        )}
        {...props}
      >
        <h5 className="text-2xl font-semibold tracking-tight text-center text-gray-900 dark:text-white line-clamp-1">
          {children}
        </h5>
      </div>
    ) : (
      <div
        ref={ref}
        className={cn(
          "flex",
          horizontal
            ? "flex-row justify-center items-center w-full h-full"
            : "flex-col items-center justify-center w-full h-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";
export { CardHeader };
