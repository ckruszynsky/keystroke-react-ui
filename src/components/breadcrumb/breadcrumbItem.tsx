import { ChevronRightIcon } from "@radix-ui/react-icons";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import { BreadcrumbLink } from "./types";

const breadcrumbItemVariants = cva();

export type BreadcrumbItemProps = VariantProps<
  typeof breadcrumbItemVariants
> & {
  link: BreadcrumbLink;
  icon?: React.ReactNode;
};

const BreadcrumbItem = ({ link, icon }: BreadcrumbItemProps) => {
  const hoverCls = !link.current
    ? "hover:text-gray-700 hover:cursor-pointer dark:hover:text-white"
    : "";
  return (
    <div className="flex items-center">
      <a className={cn("ml-4 text-sm font-medium text-gray-400", hoverCls)}>
        {icon && icon}
        {!icon && link.name && link.name}
      </a>
    </div>
  );
};

BreadcrumbItem.displayName = "Breadcrumb.Item";
export { BreadcrumbItem, breadcrumbItemVariants };
