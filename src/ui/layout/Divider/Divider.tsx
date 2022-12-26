import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type Variants = VariantProps<typeof style>;
export type DividerProps = Variants & {
  children: React.ReactNode;
  contentStyle?: VariantProps<typeof contentStyle>;
};

export const style = cva(["relative flex"], {
  variants: {
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
  },
  defaultVariants: {
    justifyContent: "center",
  },
});
export const Divider = ({ children, ...variants }: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className={style(variants)}>
        <Divider.Content {...contentStyle}>{children}</Divider.Content>
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
