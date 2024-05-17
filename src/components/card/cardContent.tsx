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
        className={cn("flex flex-col h-full pt-4", className)}
        {...props}
      >
        {typeof children === "string" ? (
          <p className="font-normal text-gray-500 truncate whitespace-pre-wrap dark:text-gray-400 line-clamp-3">
            {children}
          </p>
        ) : (
          children
        )}
        <div className="flex flex-col-reverse items-end justify-end h-full pt-4 ">
          {props.callToActionText && (
            <Button
              onClick={props.onCallToActionClick}
              className="inline-flex items-end w-full justify-items-end"
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
