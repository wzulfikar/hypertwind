import { render } from "@test"
import { Card } from "."

describe("Card", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Card>{props.children}</Card>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
