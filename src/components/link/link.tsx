import { Link as RouterLink, LinkProps } from "react-router-dom";
import { cn } from "../../utils/cn";

type Props = LinkProps & {
  externalHref?: string;
};

const Link = ({ className, children, ...props }: Props) => {
  return (
    <>
      {!props.to && (
        <a
          className={cn(
            "text-primary-500 hover:text-primary-700 hover:underline focus:outline-none",
            className
          )}
          href={props.externalHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
      {!props.externalHref && (
        <RouterLink
          className={cn(
            "text-primary-500 hover:text-primary-700 hover:underline focus:outline-none",
            className
          )}
          {...props}
        >
          {children}
        </RouterLink>
      )}
    </>
  );
};

Link.displayName = "Link";
export { Link };
