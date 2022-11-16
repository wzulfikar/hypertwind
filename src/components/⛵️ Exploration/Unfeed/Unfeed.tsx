import useScript from "react-script-hook";

export const defaultSrc = "https://unpkg.com/unfeed@^1";

type Props = {
  src?: string;
  footer?: string;
  "primary-color"?: string;
  style?: object;
  children: string;
};
export const Unfeed = ({ src, children, ...props }: Props) => {
  const [loading, error] = useScript({ src: src || defaultSrc });
  console.log("[Unfeed] loading:", loading);

  if (error) {
    console.error("Could not start unfeed:", error);
  }

  const dataset: Record<string, string> = {};
  for (const prop in props) {
    dataset[`data-unfeed-${prop}`] = props[
      prop as keyof typeof props
    ] as string;
  }

  return (
    <button data-unfeed-button {...dataset}>
      {children}
    </button>
  );
};
