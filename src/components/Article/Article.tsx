import { apply, tw } from "@components/util"

const base = {
  container: apply`block overflow-hidden rounded-2xl max-w-xs`,
  content: apply`p-4 bg-gray-200 dark:bg-gray-900`,
  ticker: apply`text-xs text-gray-800 dark:text-gray-500 pb-0.5`,
  title: apply`text-sm text-gray-800 font-medium dark:text-gray-300`,
  description: apply`mt-1 text-xs text-gray-800 dark:text-gray-500`,
  image: apply`object-cover w-full h-52`,
}

type Props = {
  href: string
  ticker: string
  title: string
  description: string
  image: string
  imageAlt?: string
  styles?: StyleOverride<keyof typeof base>
}

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
    <a href={href} className={tw(base.container, styles?.container)}>
      <img
        className={tw(base.image, styles?.image)}
        src={image}
        alt={imageAlt}
      />
      <div className={tw(base.content, styles?.content)}>
        <p className={tw(base.ticker, styles?.ticker)}>{ticker}</p>
        <h5 className={tw(base.title, styles?.title)}>{title}</h5>
        <p className={tw(base.description, styles?.description)}>
          {description}
        </p>
      </div>
    </a>
  )
}
