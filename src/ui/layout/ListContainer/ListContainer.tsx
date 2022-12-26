import React from "react";

import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export type ListContainerProps = VariantProps<typeof style> & {
  children: React.ReactNode;
};
export const style = cva([], {
  variants: {
    containerStyle: {
      plain: "",
      card: "overflow-hidden rounded-md bg-white shadow",
    },
  },
  defaultVariants: {
    containerStyle: "plain",
  },
});
export const ListContainer = ({
  children,
  ...variants
}: ListContainerProps) => {
  return (
    <div className={style(variants)}>
      <ul role="list" className="divide-y divide-gray-200">
        {children}
      </ul>
    </div>
  );
};

type ListItemProps = {
  className?: string;
  children: React.ReactNode;
};
ListContainer.ListItem = ({ className, children }: ListItemProps) => {
  return <li className={className}>{children}</li>;
};
