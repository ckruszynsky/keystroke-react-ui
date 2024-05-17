import * as React from "react";
import { DividerContent } from "./dividerContent";

export type DividerProps = {
  children?: React.ReactNode;
};

const Divider = (props: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      {props.children}
    </div>
  );
};

Divider.displayName = "Divider";
Divider.Content = DividerContent;

export { Divider };
