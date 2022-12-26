import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export type CardProps = VariantProps<typeof style> & {
  children: React.ReactNode;
};
export const style = cva([], {
  variants: {
    intent: {
      basic: "bg-gray-400",
    },
  },
  defaultVariants: {
    intent: "basic",
  },
});
export const Card = ({ children, ...variants }: CardProps) => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      {children}
    </div>
  );
};

Card.Header = ({ children }) => {
  return <div className="px-4 py-5 sm:px-6">{children}</div>;
};
Card.Content = ({ children }) => {
  return <div className="px-4 py-5 sm:p-6">{children}</div>;
};
Card.Footer = ({ children }) => {
  return <div className="px-4 py-4 sm:px-6">{children}</div>;
};
