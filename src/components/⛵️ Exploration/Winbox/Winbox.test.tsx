import { render } from "@test"
import { Winbox } from "."

describe("Winbox", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Winbox>{props.children}</Winbox>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
