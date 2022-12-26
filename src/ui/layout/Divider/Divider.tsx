import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type Variants = VariantProps<typeof style>;
export type DividerProps = Variants & {
  children: string | React.ReactNode;
  /**
   * Customize the default `Divider.Content`. Only applicable when `children` is string.
   */
  contentStyle?: VariantProps<typeof contentStyle>;
};

export const style = cva(["relative flex items-center"], {
  variants: {
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      // Useful when you have multiple components as children and want to separate them
      between: "justify-between",
    },
  },
  defaultVariants: {
    justifyContent: "center",
  },
});
export const Divider = ({
  children,
  contentStyle,
  ...variants
}: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className={style(variants)}>
        {typeof children == "string" ? (
          <Divider.Content {...contentStyle}>{children}</Divider.Content>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

const contentStyle = cva([], {
  variants: {
    size: {
      sm: "px-2 text-sm",
      md: "px-2 text-md",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      full: "rounded-full",
    },
    bg: {
      white: "bg-white",
    },
    color: {
      gray: "text-gray-500",
    },
  },
  defaultVariants: {
    size: "sm",
    rounded: "sm",
    bg: "white",
    color: "gray",
  },
});
Divider.Content = ({ children, ...variants }) => {
  return <span className={contentStyle(variants)}>{children}</span>;
};
