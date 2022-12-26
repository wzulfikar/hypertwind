type Props = {
  title?: string;
  children: JSX.Element | string;
};
export const Callout = ({ title = "ℹ️ Info", children }: Props) => {
  return (
    <div className="p-4 border rounded max-w-sm bg-gray-100">
      <div className="flex space-x-1.5">
        <strong className="flex-auto text-sm font-semibold">{title}</strong>
      </div>
      <div className="mt-1 text-xs">{children}</div>
    </div>
  );
};
