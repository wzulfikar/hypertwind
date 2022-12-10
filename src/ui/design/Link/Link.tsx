import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { match, P } from "ts-pattern";
import { AiFillGithub } from "react-icons/ai";

type Variants = VariantProps<typeof style>;
export type LinkProps = Variants &
  HTMLLinkElement & {
    children?: JSX.Element | string;
  };

export const style = cva(["text-blue-600"], {
  variants: {
    format: {
      short: "",
      github: "",
    },
  },
  defaultVariants: {
    format: "short",
  },
});

export const Link = ({ children, href, target, ...variants }: LinkProps) => {
  return (
    <a className={style(variants)} href={href} target={target}>
      {match(variants)
        .with({ format: P.nullish }, { format: "short" }, () =>
          href.split("//").pop()
        )
        .with({ format: "github" }, () => (
          <>
            <AiFillGithub className="inline mr-0.5 align-middle" />
            {href.split("github.com/").pop()}
          </>
        ))
        .otherwise(() => children)}
    </a>
  );
};
