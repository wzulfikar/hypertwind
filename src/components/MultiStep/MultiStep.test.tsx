import { render } from "@test"
import { MultiStep } from "."

describe("MultiStep", () => {
  const props = {
    steps: [
      {
        name: "Step 1",
        status: "todo" as const,
      },
    ],
  }
  it("renders without error", () => {
    const { getByText } = render(
      <MultiStep steps={props.steps}>
        {({ idx }) => <div>Current step: {idx + 1}</div>}
      </MultiStep>
    )

    expect(getByText(props.steps[0].name)).toBeInTheDocument()
  })
})
