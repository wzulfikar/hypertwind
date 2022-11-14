import { render } from "@test"
import { RichEditor } from "."

describe("RichEditor", () => {
  it("renders without error", () => {
    const { getByTestId } = render(<RichEditor />)

    expect(getByTestId("rich-editor")).toBeInTheDocument()
  })
})
