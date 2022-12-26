import { render } from "@test"
import { Divider } from "."

describe("Divider", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Divider>{props.children}</Divider>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
