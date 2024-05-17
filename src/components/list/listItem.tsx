import React from "react";
import { cn } from "../../utils/cn";

type ListItemProps = {
  children: React.ReactNode;
  key?: string | number;
  className?: string;
  separate?: boolean;
  padding?: "none" | "small" | "medium" | "large";
};

const ListItem = ({
  children,
  separate,
  key,
  padding = "small",
  className,
}: ListItemProps) => {
  const paddingSize = {
    none: "px-0 py-0",
    small: "px-4 py-2",
    medium: "px-6 py-4 md:px-4 md:py-4",
    large: "px-8 py-6 md:px-8 md:py-4",
  }[padding];
  return (
    <li
      key={key}
      className={cn(
        paddingSize,
        separate ? "rounded-md border border-gray-200 shadow-sm" : "",
        className
      )}
    >
      {children}
    </li>
  );
};

ListItem.displayName = "ListItem";
export { ListItem };
