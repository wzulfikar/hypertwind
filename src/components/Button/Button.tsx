import { tw, apply } from "@components/util"

const base = {
  button: apply`inline-block bg-gray-500 text-white py-1 px-2 rounded-sm`,
}

const colors = {
  red: "bg-red-400",
  green: "bg-green-400 dark:bg-gray-700",
  blue: "bg-blue-200",
}

const sizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

type Props = {
  children: React.ReactNode
  onClick?: () => void
  color?: keyof typeof colors
  size?: keyof typeof sizes
  styles?: StyleOverride<typeof base>
}

export const Button = ({
  children,
  onClick,
  color = "green",
  size = "md",
  styles,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={tw(base.button, colors[color], sizes[size], styles?.button)}
    >
      {children}
    </button>
  )
}
