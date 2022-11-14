import { render } from "@test"
import { Announcement } from "."

describe("Announcement", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<Announcement>{props.children}</Announcement>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
