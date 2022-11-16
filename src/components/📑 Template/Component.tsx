import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type ComponentVariants = VariantProps<typeof component>;
export type ComponentProps = ComponentVariants & {
  children?: JSX.Element | string;
  onClick?: () => void;
};

export const Component = ({
  children,
  onClick,
  ...variants
}: ComponentProps) => {
  return (
    <button type="button" className={component(variants)} onClick={onClick}>
      {children}
    </button>
  );
};

export const component = cva(
  [
    "[box-shadow:0px_0px_0px_1px_rgba(127,_86,_217,_1)_inset] [box-shadow-width:1px]",
    "px-3.5 py-2 gap-2",
    "inline-flex justify-center items-center",
    "text-white text-left",
    "font-semibold drop-shadow-lg overflow-clip",
    "bg-[rgba(127,86,217,1)]",
    "text-sm leading-5 m-0",
  ],
  {
    variants: {
      rounded: {
        false: "rounded-lg",
        true: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: false,
    },
  }
);
