import React, { Children } from "react";
import { cn } from "../../utils/cn";
import { ListItem } from "./listItem";

type ListProps = {
  children: React.ReactNode;
  className?: string;
  separate?: boolean;
  border?: boolean;
};
const List = ({ children, separate, border, className }: ListProps) => {
  return (
    <ul
      role="list"
      className={cn(
        "divide-y divide-gray-200",
        separate ? "space-y-2" : "",
        border ? "border border-gray-200  rounded-md shadow" : "",
        className
      )}
    >
      {children}
    </ul>
  );
};

List.displayName = "List";
List.ListItem = ListItem;
export { List };
