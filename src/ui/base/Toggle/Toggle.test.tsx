import { render } from "@test"
import { Toggle } from "."

describe("Toggle", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Toggle>{props.children}</Toggle>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
