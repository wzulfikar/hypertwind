import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type Variants = VariantProps<typeof style>;
export type ButtonProps = Variants & {
  children?: JSX.Element | string;
  onClick?: () => void;
};

export const style = cva(
  [
    "rounded font-medium shadow-sm",
    "items-center inline-flex",
    "border",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  ],
  {
    variants: {
      intent: {
        secondary: [
          "border-transparent",
          "bg-indigo-100 hover:bg-indigo-200",
          "text-indigo-700",
        ],
        primary: [
          "border-transparent",
          "bg-indigo-600 hover:bg-indigo-700",
          "text-white",
        ],
        accent: ["border-transparent", "bg-yellow-600 hover:bg-yellow-700"],
        white: ["border-gray-300", "bg-white text-gray-700 hover:bg-gray-50"],
      },
      rounded: {
        none: "rounded-none",
        default: "rounded",
        sm: "rounded-sm",
        full: "rounded-full",
      },
      size: {
        sm: ["px-2.5 py-1.5", "text-xs"],
        md: ["px-3 py-2", "text-sm leading-4"],
        lg: ["px-4 py-2", "text-sm"],
        xl: ["px-4 py-2", "text-base"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      rounded: "default",
    },
  }
);

export const Button = ({ children, onClick, ...variants }: ButtonProps) => {
  return (
    <button type="button" className={style(variants)} onClick={onClick}>
      {children}
    </button>
  );
};
