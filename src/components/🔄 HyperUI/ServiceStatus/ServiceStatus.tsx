import { cx } from "@twind/core";
const base = {
  container: `inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium`,
  beacon: `w-2.5 h-2.5 rounded-full absolute -top-1 -left-1`,
  beaconPing: `animate-ping w-2.5 h-2.5 rounded-full absolute -top-1 -left-1`,
  statusText: "ml-1.5",
};

const types = {
  idle: "bg-gray-600",
  success: "bg-green-600",
  warning: "bg-yellow-600",
  danger: "bg-red-600",
};

const statusText: Record<keyof typeof types, string> = {
  idle: "text-gray-700",
  success: "text-green-700",
  warning: "text-yellow-700",
  danger: "text-red-700",
};

type Props = {
  children: string;
  statusLabel?: string;
  type?: keyof typeof types;
  beacon?: boolean;
};

export const ServiceStatus = ({
  children,
  statusLabel = "Status",
  type = "idle",
  beacon = false,
}: Props) => {
  return (
    <strong className={base.container}>
      {beacon && (
        <>
          {type !== "idle" && (
            <span className={cx(base.beaconPing, types[type])} />
          )}
          <span className={cx(base.beacon, types[type])} />
        </>
      )}
      <span className={"text-gray-700"}>{statusLabel}:</span>
      <span className={cx(base.statusText, statusText[type])}>{children}</span>
    </strong>
  );
};
