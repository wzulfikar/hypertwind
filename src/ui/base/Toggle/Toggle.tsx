import { useState } from "react";

import { Switch } from "@headlessui/react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cx } from "@/ui/helper";

export type ToggleProps = VariantProps<typeof style> & {
  srLabel?: string;
  onChange?: (checked: boolean) => void;
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
export const Toggle = ({
  srLabel,
  onChange,
  children,
  ...variants
}: ToggleProps) => {
  const [enabled, setEnabled] = useState(false);

  const handleOnChange = (checked: boolean) => {
    setEnabled(checked);
    onChange?.(checked);
  };

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch.Label as="span" className="mr-3">
        {children}
      </Switch.Label>
      <Switch
        checked={enabled}
        onChange={handleOnChange}
        className={cx(
          enabled ? "bg-indigo-600" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        )}
      >
        <span className="sr-only">{srLabel}</span>
        <span
          aria-hidden="true"
          className={cx(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
};
