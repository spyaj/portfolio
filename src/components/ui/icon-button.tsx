import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { Slot } from "@/components/ui/slot";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4", // Base icon size
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 w-8 [&_svg]:size-3", // Small icon size
        default: "h-9 w-9 [&_svg]:size-4", // Default icon size
        lg: "h-10 w-10 [&_svg]:size-5", // Large icon size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Clone icon child with merged classNames
    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        // Type-safe props handling
        const { className: childClassName, ...childProps } =
          child.props as React.HTMLAttributes<HTMLElement>;

        return React.cloneElement(child, {
          ...childProps,
          className: cn("inline-flex", childClassName),
        } as React.HTMLAttributes<HTMLElement>);
      });
    };

    return (
      <Comp className={cn(iconButtonVariants({ variant, size, className }))} ref={ref} {...props}>
        {asChild ? children : renderChildren()}
      </Comp>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
