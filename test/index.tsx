import {
  RenderOptions,
  RenderResult,
  render as baseRender,
} from "@testing-library/react"
import rtlUserEvent from "@testing-library/user-event"
import { ReactElement } from "react"

export const Providers = ({ children }: any) => {
  return <>{children}</>
}

const render = (ui: ReactElement, options?: Omit<RenderOptions, "queries">) =>
  baseRender(ui, { wrapper: Providers, ...options }) as RenderResult

// re-export everything
export * from "@testing-library/react"
export const userEvent = rtlUserEvent

export * from "./mockSvg"

// override render method
export { render }
