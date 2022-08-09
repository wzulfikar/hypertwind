import { addDays as _addDays, format } from "date-fns"

export const formatDate = format

export const addDays = (days: number, date: Date = new Date()) =>
  _addDays(date, days)

export * from "./relativeTime"
