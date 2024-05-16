import * as React from "react";
import { cn } from "../../utils/cn";
import { Button } from "../button";

export type CardContentProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  callToActionText?: React.ReactNode;
  onCallToActionClick?: () => void;
  children: React.ReactNode | string;
};

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col h-full pt-4 justify-center", className)}
        {...props}
      >
        {typeof children === "string" ? (
          <p className=" font-normal text-gray-700 dark:text-gray-400">
            {children}
          </p>
        ) : (
          children
        )}
        <div className="flex flex-col-reverse items-end justify-end h-full pt-4 ">
          {props.callToActionText && (
            <Button
              onClick={props.onCallToActionClick}
              className="w-full inline-flex items-end justify-items-end"
            >
              {props.callToActionText}
            </Button>
          )}
        </div>
      </div>
    );
  }
);

CardContent.displayName = "CardContent";
export { CardContent };
