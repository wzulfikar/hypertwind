import { render } from "@test"
import { ListContainer } from "."

describe("ListContainer", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<ListContainer>{props.children}</ListContainer>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
