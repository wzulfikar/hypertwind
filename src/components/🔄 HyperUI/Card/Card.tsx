import { cx } from "@twind/core";

const base = {
  container: `p-1 rounded-2xl max-w-xs shadow-xl`,
  content: `block p-6 bg-white sm:p-8 rounded-xl`,
  title: `text-xl font-bold text-gray-900`,
  description: `mt-2 text-sm text-gray-500`,
};

const types = {
  simple: "border-2 border-gray-200",
  gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
};

type Props = {
  href: string;
  title: string;
  gradient?: string;
  description?: string;
  type?: keyof typeof types;
  svgIcon?: React.ReactNode;
  styles?: StyleOverride<typeof base>;
};

export const Card = ({
  svgIcon,
  href,
  title,
  description,
  type = "simple",
  gradient,
  styles,
}: Props) => {
  return (
    <div
      className={cx(
        base.container,
        types[type],
        type == "gradient" && gradient,
        styles?.container
      )}
    >
      <a className={cx(base.content, styles?.content)} href={href}>
        <div className={`sm:pr-8`}>
          {svgIcon ? (
            <svg
              className={`w-9 h-9 mb-4`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {svgIcon}
            </svg>
          ) : (
            <></>
          )}
          <h5 className={cx(base.title, styles?.title)}>{title}</h5>
          {description ? (
            <p className={cx(base.description, styles?.description)}>
              {description}
            </p>
          ) : (
            <></>
          )}
        </div>
      </a>
    </div>
  );
};
