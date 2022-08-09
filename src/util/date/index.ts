import { addDays as _addDays, format, formatDistanceToNow } from "date-fns"

export const formatDate = format

export const addDays = (days: number, date: Date = new Date()) =>
  _addDays(date, days)

export const relativeTime = (datetime: string | Date, withSuffix = true) => {
  const date = typeof datetime === "string" ? new Date(datetime) : datetime
  return formatDistanceToNow(date, {
    addSuffix: withSuffix,
  })
}
