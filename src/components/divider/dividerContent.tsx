import React from "react";
import { cn } from "../../utils/cn";

export type DividerContentProps = {
  children: React.ReactNode;
  alignment?: "left" | "center" | "right" | "between" | "around" | "evenly";
};
export const DividerContent = ({
  children,
  alignment = "center",
}: DividerContentProps) => {
  const justify = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }[alignment];

  let comp = <></>;
  if (
    alignment !== "between" &&
    alignment !== "around" &&
    alignment !== "evenly"
  ) {
    comp = (
      <span className="px-2 text-sm text-gray-500 bg-white">{children}</span>
    );
  } else {
    comp = <>{children}</>;
  }
  return <div className={cn("relative flex", justify)}>{comp}</div>;
};
