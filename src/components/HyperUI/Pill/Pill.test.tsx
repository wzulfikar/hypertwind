import { render } from "@test"
import { Pill } from "."

describe("Pill", () => {
  const props = {
    children: "Hello world!",
  }

  it("renders without error", () => {
    const { getByText } = render(<Pill>{props.children}</Pill>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
