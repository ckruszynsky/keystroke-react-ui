import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/cn";
import { MinusCircledIcon } from "@radix-ui/react-icons";

const componentContainerVariants = cva(
  "mx:auto md:flex md:items-center md:justify-between",
  {
    variants: {
      variant: {},
      defaultVariants: {},
    },
  }
);

const pageHeaderVariants = cva("min-w-0 flex-1", {
  variants: {
    variant: {},
    defaultVariants: {},
  },
});

const pageHeadingVariants = cva(
  "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
  {
    variants: {
      variant: {},
      defaultVariants: {},
    },
  }
);

export type PageHeadingProps = VariantProps<typeof pageHeadingVariants> & {
  title: string;
  className?: string;
  onRenderActions?: () => React.ReactNode;
  onRenderBreadcrumbs?: () => React.ReactNode;
  onRenderMeta?: () => React.ReactNode;
};

export const PageHeading = ({
  title,
  variant,
  className,
  onRenderBreadcrumbs,
  onRenderActions,
  onRenderMeta,
}: PageHeadingProps) => {
  return (
    <>
      <div>
        <div>
          <img
            className="object-cover w-full h-24 mb-2 rounded-md lg:h-32"
            src="https://source.unsplash.com/random/?coding"
            alt=""
          />
        </div>
        {onRenderBreadcrumbs && (
          <div className="mb-3">{onRenderBreadcrumbs()}</div>
        )}
        <div className={cn(componentContainerVariants({ variant }))}>
          <div className={cn(pageHeaderVariants({ variant }))}>
            <h1 className={cn(pageHeadingVariants({ variant }))}>{title}</h1>
          </div>
          {onRenderActions && (
            <div className="flex mt-4 md:mt-0 md:ml-4">{onRenderActions()}</div>
          )}
        </div>
        <div className="mt-2 ml-1">
          {onRenderMeta && (
            <>
              <div className="flex-col flex-wrap hidden mt-0 md:flex md:visible lg:visible md:flex-row md:mt-1">
                {onRenderMeta()}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
