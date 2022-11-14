import { render, userEvent } from "@test"
import { Button } from "."

describe("Button", () => {
  const props = {
    label: "This is an alert",
    onClick: jest.fn()
  }

  it("renders without error", async () => {
    const { getByText } = render(
      <Button onClick={props.onClick}>{props.label}</Button>
    )

    const button = getByText(props.label)
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
