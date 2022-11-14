import { render } from "@test"
import { Badge } from "."

describe("Badge", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Badge>{props.children}</Badge>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
