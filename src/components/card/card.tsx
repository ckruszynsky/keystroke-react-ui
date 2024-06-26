import React from "react";
import { CardContent } from "./cardContent";
import { CardHeader } from "./cardHeader";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

export const cardVariants = cva(
  "pb-2 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
  {
    variants: {
      variant: {
        default: "flex flex-col w-full",
        horizontal: "flex flex-col md:flex-row",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    onClick?: () => void;
    onRenderImage?: () => React.ReactNode;
    imgAlt?: string;
    imgSrc?: string;
  };

export const Card = ({
  onClick,
  onRenderImage,
  variant,
  children,
  className,
  imgAlt,
  imgSrc,
}: CardProps) => {
  const hoverCls =
    "hover:bg-gray-50 dark:hover:bg-gray-700 hover:cursor-pointer";
  return (
    <div
      className={cn(
        cardVariants({ className, variant }),
        onClick ? hoverCls : ""
      )}
      onClick={() => onClick?.()}
    >
      {onRenderImage && onRenderImage()}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className={
            variant === "horizontal"
              ? "h-28 w-full rounded-t-lg object-cover sm:h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              : "object-cover h-32  md:h-52 md:w-full rounded-t-lg"
          }
        />
      )}
      <div
        className={cn(
          variant === "full" ? "px-0 py-0" : "px-2 py-2 md:px-4 md:py-5"
        )}
      >
        {children}
      </div>
    </div>
  );
};

Card.displayName = "Card";
Card.Header = CardHeader;
Card.Content = CardContent;
