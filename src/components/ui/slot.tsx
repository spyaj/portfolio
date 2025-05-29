import * as React from "react";

import { twMerge } from "tailwind-merge";

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Slot = ({ children, ...props }: SlotProps): React.ReactElement | null => {
  if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(children)) {
    // Extract props while maintaining type safety
    const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
    const { className, style, ...childProps } = child.props;

    return React.cloneElement(child, {
      ...props,
      ...childProps,
      style: {
        ...props.style,
        ...style,
      },
      className: twMerge(props.className, className),
    });
  }

  if (React.Children.count(children) > 1) {
    React.Children.only(null); // Force error for multiple children
  }

  return null;
};

export { Slot };
