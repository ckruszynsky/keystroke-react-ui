import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center px-2 py-1 text-xs font-medium transition-all duration-150 ease-in-out",
  {
    variants: {
      color: {
        info: "bg-primary-50 text-cyan-700 hover:bg-primary-400 hover:text-white dark:bg-primary-200 dark:text-primary-700 dark:hover:bg-primary-300 border-primary-500",
        secondary:
          "bg-gray-100 text-gray-700 hover:bg-gray-400 hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 border-gray-500",
        failure:
          "bg-red-100 text-red-700 hover:bg-red-400 hover:text-white dark:bg-red-200 dark:text-red-900 dark:hover:bg-red-300 border-red-500",
        success:
          "bg-green-100 text-green-700 hover:bg-green-400 hover:text-white dark:bg-green-200 dark:text-green-900 dark:hover:bg-green-300 border-green-500",
        warning:
          "bg-orange-100 text-orange-700 hover:bg-orange-400  hover:text-white dark:bg-orange-200 dark:text-orange-900 dark:hover:bg-orange-300 border-orange-500",
        indigo:
          "bg-indigo-100 text-indigo-700 hover:bg-indigo-400 hover:text-white dark:bg-indigo-200 dark:text-indigo-900 dark:hover:bg-indigo-300 border-indigo-500",
        purple:
          "bg-purple-100 text-purple-700 hover:bg-purple-400 hover:text-white dark:bg-purple-200 dark:text-purple-900 dark:hover:bg-purple-300 border-purple-500",
        pink: "bg-pink-100 text-pink-700 hover:bg-pink-400  hover:text-white dark:bg-pink-200 dark:text-pink-900 dark:hover:bg-pink-300 border-pink-500",
        cyan: "bg-cyan-100 text-cyan-700 hover:bg-cyan-400 hover:text-white dark:bg-cyan-200 dark:text-cyan-900 dark:hover:bg-cyan-300 border-cyan-500",
        teal: "bg-teal-100 text-teal-700 hover:bg-teal-400 hover:text-white dark:bg-teal-200 dark:text-teal-900 dark:hover:bg-teal-300 border-teal-500",
        emerald:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-400 hover:text-white dark:bg-emerald-200 dark:text-emerald-900 dark:hover:bg-emerald-300 border-emerald-500",
        lime: "bg-lime-100 text-lime-700 hover:bg-lime-400 hover:text-white dark:bg-lime-200 dark:text-lime-900 dark:hover:bg-lime-300 border-lime-500",
        sky: "bg-sky-100 text-sky-700 hover:bg-sky-400 hover:text-white dark:bg-sky-200 dark:text-sky-900 dark:hover:bg-sky-300 border-sky-500",
        violet:
          "bg-violet-100 text-violet-700 hover:bg-violet-400 hover:text-white dark:bg-violet-200 dark:text-violet-900 dark:hover:bg-violet-300 border-violet-500",
        fuchsia:
          "bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-400 hover:text-white dark:bg-fuchsia-200 dark:text-fuchsia-900 dark:hover:bg-fuchsia-300 border-fuchsia-500",
        rose: "bg-rose-100 text-rose-700 hover:bg-rose-400 hover:text-white dark:bg-rose-200 dark:text-rose-900 dark:hover:bg-rose-300 border-rose-500",
        slate:
          "bg-slate-100 text-slate-700 hover:bg-slate-400 hover:text-white dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300 border-slate-500",
        neutral:
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-400 hover:text-white dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300 border-neutral-500",
      },
      border: {
        none: "",
        border: "border",
      },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-2.5 py-1.5",
        md: "text-md px-3 py-2",
        lg: "text-lg  px-3 py-2.5",
        xl: "text-xl px-4 py-3",
        xxl: "text-2xl px-5 py-3.5",
      },
      defaultVariants: {
        color: "info",
        size: "xs",
        border: "border",
      },
    },
  }
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  icon?: React.ReactNode;
  children?: React.ReactNode | string;
  className?: string;
  href?: string;
};

const Badge = ({ icon, children, color, size, href, border }: BadgeProps) => {
  const roundcls =
    icon && children
      ? "rounded-lg p-1.5"
      : icon && !children
        ? "rounded-full"
        : "rounded";

  const iconOnlyCls = icon && !children ? "w-full" : "mr-1";
  const comp = (
    <span className={cn(badgeVariants({ color, size, border }), roundcls)}>
      <span
        className={cn("flex items-center justify-center h-fit", iconOnlyCls)}
      >
        {icon && icon}
      </span>
      {children}
    </span>
  );
  return href ? (
    <>
      <a href={href} className="inline-block">
        {comp}
      </a>
    </>
  ) : (
    <>{comp}</>
  );
};

Badge.displayName = "Badge";
export { Badge, badgeVariants };
