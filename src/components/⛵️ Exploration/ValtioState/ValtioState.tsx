import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { state, useSnap } from "./state";
import { Time, Count, User } from "./components";

type Variants = VariantProps<typeof style>;
export type ValtioStateProps = Variants & {
  children: React.ReactNode;
};

export const style = cva(["text-white"], {
  variants: {
    intent: {
      basic: "bg-gray-400",
    },
  },
  defaultVariants: {
    intent: "basic",
  },
});

export const ValtioState = ({ children, ...variants }: ValtioStateProps) => {
  // `snap` should be used in render function.
  // Use `state` in every other cases (eg. inside callback)
  const snap = useSnap();

  // "snap.*" only triggers re-render when the accessed property changed.
  // This `ValtioState` component doesn't re-render even when `state.time`
  // changes because it only accesses `state.count`.
  console.log("[ValtioState] snap.count:", snap.count);

  return (
    <div className={style(variants)}>
      {children}
      <div className="max-w-sm">
        <Time />
        <Count />
        <User />
        <button onClick={() => state.reset()}>Reset</button>
      </div>
    </div>
  );
};
