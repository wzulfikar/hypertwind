import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type ComponentVariants = VariantProps<typeof component>;
export type ComponentProps = ComponentVariants & {
  children?: JSX.Element | string;
  onClick?: () => void;
};

// Structure of the component.
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

// Set default props. This will be used in cva's `defaultVariants` and Storybook's "Default".
const defaultProps = {
  intent: "primary",
  size: "md",
  rounded: false,
} as const;
Component.defaultProps = defaultProps;

// Create variants with cva
export const component = cva(
  [
    "text-white text-left",
    "text-sm leading-5 m-0",
    "inline-flex justify-center items-center",
    "font-semibold drop-shadow-lg overflow-clip",
    "[box-shadow:0px_0px_0px_1px_rgba(127,_86,_217,_1)_inset] [box-shadow-width:1px]",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-purple-600 hover:bg-purple-700 transition"],
        danger: ["bg-red-600 hover:bg-red-700 transition"],
      },
      size: {
        md: ["px-2.5 py-1 gap-1"],
        lg: ["px-3.5 py-2 gap-2"],
      },
      rounded: {
        false: ["rounded-md"],
        true: ["rounded-full"],
      },
    },
    defaultVariants: defaultProps,
  }
);
