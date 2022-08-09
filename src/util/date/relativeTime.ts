import { formatDistanceToNow } from "date-fns"

export const relativeTime = (datetime: string | Date, withSuffix = true) => {
  const date = typeof datetime === "string" ? new Date(datetime) : datetime
  return formatDistanceToNow(date, {
    addSuffix: withSuffix,
  })
}
