import * as SvgPaths from "@components/shared/SvgPaths";

type Props = {
  type: AlertType;
};

export const AlertIcon = ({ type = "info" }: Props) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {SvgPaths[type]}
      </svg>
    </span>
  );
};
