import { render } from "@test"
import { Alert } from "."

describe("Alert", () => {
  const props = {
    text: "This is an alert",
    description: "This is a description"
  }

  it("renders without error", () => {
    const { getByText } = render(<Alert text={props.text} />)
    expect(getByText(props.text)).toBeInTheDocument()
  })

  it("renders description", () => {
    const { getByText } = render(
      <Alert text={props.text}>{props.description}</Alert>
    )
    expect(getByText(props.text)).toBeInTheDocument()
    expect(getByText(props.description)).toBeInTheDocument()
  })
})
