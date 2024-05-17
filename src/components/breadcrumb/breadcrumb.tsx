import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { BreadcrumbItem, BreadcrumbItemProps } from "./breadcrumbItem";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import { cn } from "../../utils/cn";
import { BreadcrumbLink } from "./types";
import { FullWidth } from "./breadcrumb.stories";

const breadcrumbVariants = cva("flex items-center space-x-4", {
  variants: {
    variant: {
      contained: "space-x-4 rounded-md bg-white px-6 shadow",
      fullWidth:
        "mx-auto flex w-full max-w-screen-xl space-x-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: {},
});

const navVariants = cva("flex", {
  variants: {
    variant: {
      contained: "",
      fullWidth: "flex border-b border-gray-200 dark:border-gray-700 bg-white",
    },
  },
});
export type BreadcrumbProps = VariantProps<typeof breadcrumbVariants> & {
  items: BreadcrumbLink[];
  className?: string;
};

const Breadcrumb = ({ items, className, variant }: BreadcrumbProps) => {
  const separator = {
    default: (
      <ChevronRightIcon className="flex-shrink-0 w-6 h-6 text-gray-200" />
    ),
    fullWidth: (
      <svg
        className="flex-shrink-0 w-6 h-full text-gray-200"
        viewBox="0 0 24 44"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
      </svg>
    ),
    contained: (
      <svg
        className="flex-shrink-0 w-6 h-full text-gray-200"
        viewBox="0 0 24 44"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
      </svg>
    ),
  }[!variant ? "default" : variant];

  return (
    <nav className={cn(navVariants({ variant }), className)}>
      <ol className={cn(breadcrumbVariants({ variant }))}>
        {items.map((item, index) => (
          <li className="flex" key={index}>
            <div className="flex items-center">
              {index !== 0 && (
                <>
                  {separator}
                  <BreadcrumbItem link={item} />
                </>
              )}

              {index === 0 && (
                <BreadcrumbItem
                  link={item}
                  icon={<HomeIcon className="flex-shrink-0 w-5 h-5" />}
                />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.Item = BreadcrumbItem;

export { Breadcrumb, breadcrumbVariants };
