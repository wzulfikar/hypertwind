import { cx } from "@twind/core";

const base = {
  container: `block overflow-hidden rounded-2xl max-w-xs`,
  content: `p-4 bg-gray-200 dark:bg-gray-900`,
  ticker: `text-xs text-gray-800 dark:text-gray-500 pb-0.5`,
  title: `text-sm text-gray-800 font-medium dark:text-gray-300`,
  description: `mt-1 text-xs text-gray-800 dark:text-gray-500`,
  image: `object-cover w-full h-52`,
};

type Props = {
  href: string;
  ticker: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  styles?: StyleOverride<typeof base>;
};

export const Article = ({
  ticker,
  title,
  description,
  image,
  imageAlt,
  href,
  styles,
}: Props) => {
  return (
    <a href={href} className={cx(base.container, styles?.container)}>
      <img
        className={cx(base.image, styles?.image)}
        src={image}
        alt={imageAlt}
      />
      <div className={cx(base.content, styles?.content)}>
        <p className={cx(base.ticker, styles?.ticker)}>{ticker}</p>
        <h5 className={cx(base.title, styles?.title)}>{title}</h5>
        <p className={cx(base.description, styles?.description)}>
          {description}
        </p>
      </div>
    </a>
  );
};
