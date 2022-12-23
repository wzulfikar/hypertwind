import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type Variants = VariantProps<typeof style>;
export type ParagraphProps = Variants & {
  children: React.ReactNode;
};

export const style = cva(["text-gray-900 dark:text-gray-300"]);

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className={style()}>{children}</p>
);

// Short alias for Paragraph
export const P = Paragraph;
