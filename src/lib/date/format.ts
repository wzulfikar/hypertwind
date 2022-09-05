import formatFns from "date-fns/format"

export const enum DateFormat {
  "Jan 1, 2020" = "MMM d, yyyy",
  "2020-01-01" = "yyyy-mm-dd",
  "2020-01-01 01:59:59" = "yyyy-mm-dd hh:mm:ss",
}

export function formatDate(
  format: DateFormat | Suggest<"yyyy-mm-dd">,
  date?: Date
): string {
  return formatFns(date || new Date(), format as string)
}
