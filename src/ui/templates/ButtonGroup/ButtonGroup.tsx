import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { HiPaperClip, HiPencil, HiPlus, HiTrash } from "react-icons/hi";

export type ButtonGroupProps = VariantProps<typeof style> & {
  children: React.ReactNode;
};
export const style = cva(["isolate inline-flex -space-x-px shadow-sm"], {
  variants: {},
});
export const ButtonGroup = ({ children, ...variants }: ButtonGroupProps) => {
  return <span className={style(variants)}>{children}</span>;
};

type ButtonProps = VariantProps<typeof buttonStyle> & {
  srLabel?: string; // Text to read by screen reader
  onClick?: () => void;
  children: React.ReactNode;
};
const buttonStyle = cva(
  ["relative inline-flex items-center border focus:z-10"],
  {
    variants: {
      theme: {
        default: [
          "border-gray-300 bg-white text-gray-400 hover:bg-gray-50",
          "focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500",
        ],
      },
      size: {
        sm: "px-4 py-2 text-sm font-medium",
        md: "px-4 py-2 text-md font-medium",
      },
      /**
       * Customize the border radius of the button. Only applied for first and last button.
       */
      rounded: {
        sm: "first:rounded-l-sm last:rounded-r-sm",
        md: "first:rounded-l-md last:rounded-r-md",
        full: "first:rounded-l-full last:rounded-r-full",
      },
    },
    defaultVariants: {
      theme: "default",
      rounded: "sm",
      size: "sm",
    },
  }
);
ButtonGroup.Button = ({
  srLabel,
  onClick,
  children,
  ...variants
}: ButtonProps) => {
  return (
    <button type="button" className={buttonStyle(variants)} onClick={onClick}>
      <span className="sr-only">{srLabel}</span>
      {children}
    </button>
  );
};
