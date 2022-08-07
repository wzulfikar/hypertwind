import { tw, apply } from "@components/util";

const base = {
  btn: apply`inline-block bg-gray-500 text-white py-1 px-2 rounded-sm w-fit`,
};

const colors = {
  red: "bg-red-400",
  green: "bg-green-400",
  blue: "bg-blue-200",
};

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

type Props = {
  children: string;
  onClick?: () => void;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
};

export const Button = ({
  children,
  onClick,
  color = "green",
  size = "md",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={tw(base.btn, colors[color], sizes[size])}
    >
      {children}
    </button>
  );
};
