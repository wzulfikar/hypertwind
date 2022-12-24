type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
};
export const HStack = ({ children, className = "auto-cols-max" }: Props) => {
  return <div className={`grid grid-flow-col ${className}`}>{children}</div>;
};
