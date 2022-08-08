import { render } from "@test"
import { Card } from "."

describe("Card", () => {
  const props = {
    title: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Card href="#" title={props.title} />)

    expect(getByText(props.title)).toBeInTheDocument()
  })
})
