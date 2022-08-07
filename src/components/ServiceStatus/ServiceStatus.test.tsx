import { render } from "@test"
import { ServiceStatus } from "."

describe("ServiceStatus", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<ServiceStatus>{props.children}</ServiceStatus>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
