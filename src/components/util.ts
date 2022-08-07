export { tw, apply } from "twind"
export * as colors from "twind/colors"

export const ambientBox = (color: string) =>
  `bg-${color}-50 text-${color}-700 border-${color}-900/10 dark:(bg-gray-900 text-${color}-400)`
