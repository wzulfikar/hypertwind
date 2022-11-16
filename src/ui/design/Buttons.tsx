import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ButtonVariants;

export const button = cva(
  [
    "rounded font-medium shadow-sm text-white",
    "items-center inline-flex",
    "border border-transparent",
    "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  ],
  {
    variants: {
      intent: {
        neutral: "border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
        secondary: "bg-indigo-100 hover:bg-indigo-200",
        primary: "bg-indigo-600 hover:bg-indigo-700",
        accent: "bg-fuchsia-600 hover:bg-fuchsia-700",
      },
      rounded: {
        true: "rounded-full",
      },
      size: {
        sm: ["px-2.5 py-1.5", "text-xs"],
        md: ["px-3 py-2", "text-sm leading-4"],
        lg: ["px-4 py-2", "text-sm"],
        xl: ["px-4 py-2", "text-base"],
      },
    },
    defaultVariants: {
      intent: "neutral",
      size: "md",
    },
  }
);

export const Button = ({ label, ...variants }: ButtonProps) => {
  return (
    <button type="button" className={button(variants)}>
      {label}
    </button>
  );
};
