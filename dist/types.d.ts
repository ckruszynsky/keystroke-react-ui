import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React$1 from 'react';
import React__default from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { LinkProps } from 'react-router-dom';

declare const badgeVariants: (props?: ({
    color?: "info" | "secondary" | "failure" | "success" | "warning" | "indigo" | "purple" | "pink" | "cyan" | "teal" | "emerald" | "lime" | "sky" | "violet" | "fuchsia" | "rose" | "slate" | "neutral" | null | undefined;
    border?: "border" | "none" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | null | undefined;
    defaultVariants?: "color" | "border" | "size" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type BadgeProps = VariantProps<typeof badgeVariants> & {
    icon?: React$1.ReactNode;
    children?: React$1.ReactNode | string;
    className?: string;
    href?: string;
};
declare const Badge: {
    ({ icon, children, color, size, href, border }: BadgeProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type BreadcrumbLink = {
    name: string;
    href: string;
    current: boolean;
};

declare const breadcrumbItemVariants: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
type BreadcrumbItemProps = VariantProps<typeof breadcrumbItemVariants> & {
    link: BreadcrumbLink;
    icon?: React__default.ReactNode;
};

declare const breadcrumbVariants: (props?: ({
    variant?: "contained" | "fullWidth" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type BreadcrumbProps = VariantProps<typeof breadcrumbVariants> & {
    items: BreadcrumbLink[];
    className?: string;
};
declare const Breadcrumb: {
    ({ items, className, variant }: BreadcrumbProps): react_jsx_runtime.JSX.Element;
    displayName: string;
    Item: {
        ({ link, icon }: BreadcrumbItemProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "link" | "danger" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | null | undefined;
    iconAlignment?: "left" | "right" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = React$1.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React$1.ReactNode;
};
declare const Button: React$1.ForwardRefExoticComponent<React$1.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "default" | "secondary" | "link" | "danger" | "outline" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | null | undefined;
    iconAlignment?: "left" | "right" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    asChild?: boolean | undefined;
    isLoading?: boolean | undefined;
    icon?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLButtonElement>>;

declare const ButtonGroup: {
    ({ children }: {
        children: React.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const cardVariants: (props?: ({
    variant?: "default" | "horizontal" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type CardProps = React__default.HtmlHTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants> & {
    onClick?: () => void;
    onRenderImage?: () => React__default.ReactNode;
    imgAlt?: string;
    imgSrc?: string;
};
declare const Card: {
    ({ onClick, onRenderImage, variant, children, className, imgAlt, imgSrc, }: CardProps): react_jsx_runtime.JSX.Element;
    displayName: string;
    Header: React__default.ForwardRefExoticComponent<React__default.HtmlHTMLAttributes<HTMLDivElement> & {
        children: React__default.ReactNode;
        horizontal?: boolean | undefined;
    } & React__default.RefAttributes<HTMLDivElement>>;
    Content: React__default.ForwardRefExoticComponent<React__default.HtmlHTMLAttributes<HTMLDivElement> & {
        callToActionText?: React__default.ReactNode;
        onCallToActionClick?: (() => void) | undefined;
        children: React__default.ReactNode;
    } & React__default.RefAttributes<HTMLDivElement>>;
};

declare const containerVariants: (props?: ({
    variant?: "default" | "full" | "padded" | "centered" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ContainerProps = React$1.HtmlHTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants> & {
    asChild?: boolean;
};
declare const Container: React$1.ForwardRefExoticComponent<React$1.HtmlHTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "full" | "padded" | "centered" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string> & {
    asChild?: boolean | undefined;
} & React$1.RefAttributes<HTMLDivElement>>;

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

type DividerContentProps = {
    children: React__default.ReactNode;
    alignment?: "left" | "center" | "right" | "between" | "around" | "evenly";
};

type DividerProps = {
    children?: React$1.ReactNode;
};
declare const Divider: {
    (props: DividerProps): react_jsx_runtime.JSX.Element;
    displayName: string;
    Content: ({ children, alignment, }: DividerContentProps) => react_jsx_runtime.JSX.Element;
};

type Props = LinkProps & {
    externalHref?: string;
};
declare const Link: {
    ({ className, children, ...props }: Props): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type ListProps = {
    children: React__default.ReactNode;
    className?: string;
    separate?: boolean;
    border?: boolean;
};
declare const List: {
    ({ children, separate, border, className }: ListProps): react_jsx_runtime.JSX.Element;
    displayName: string;
    ListItem: {
        ({ children, separate, key, padding, className, }: {
            children: React__default.ReactNode;
            key?: string | number | undefined;
            className?: string | undefined;
            separate?: boolean | undefined;
            padding?: "none" | "small" | "medium" | "large" | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

declare const pageHeadingVariants: (props?: ({
    variant?: null | undefined;
    defaultVariants?: null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type PageHeadingProps = VariantProps<typeof pageHeadingVariants> & {
    title: string;
    className?: string;
    onRenderActions?: () => React$1.ReactNode;
    onRenderBreadcrumbs?: () => React$1.ReactNode;
    onRenderMeta?: () => React$1.ReactNode;
};
declare const PageHeading: ({ title, variant, className, onRenderBreadcrumbs, onRenderActions, onRenderMeta, }: PageHeadingProps) => react_jsx_runtime.JSX.Element;

declare const spinnerVariants: (props?: ({
    variant?: "default" | "secondary" | "success" | "warning" | "primary" | "danger" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | "xl" | null | undefined;
    defaultVariants?: "size" | "variant" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SpinnerProps = VariantProps<typeof spinnerVariants> & {
    asChild?: boolean;
    className?: string;
    fullHeight?: boolean;
    text?: React.ReactNode | string;
};
declare const Spinner: {
    ({ size, variant, className, asChild, fullHeight, text, }: SpinnerProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { Badge, type BadgeProps, Breadcrumb, type BreadcrumbProps, Button, ButtonGroup, type ButtonProps, Card, Container, type ContainerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Divider, type DividerProps, Link, List, PageHeading, type PageHeadingProps, Spinner, type SpinnerProps, badgeVariants, breadcrumbVariants, buttonVariants, cardVariants, containerVariants, spinnerVariants };
