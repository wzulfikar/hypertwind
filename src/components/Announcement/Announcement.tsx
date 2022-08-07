import { apply, tw } from "@components/util"

const base = {
  container: apply`flex`,
}

const colors = {
  red: "text-red-500",
  green: "text-green-500",
}

type Props = {
  children: string
  color?: keyof typeof colors
}

export const Announcement = ({ children, color = "red" }: Props) => {
  return <div className={tw(base.container, colors[color])}>{children}</div>
}
