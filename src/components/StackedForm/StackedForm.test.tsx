import { render } from "@test"
import { StackedForm } from "."

describe("StackedForm", () => {
  const props = {
    title: "This is my form",
    fields: [
      { name: "email", required: true },
      { name: "password", required: true },
      { name: "phone" },
    ],
    onSubmit: () => {},
  }
  it("renders without error", () => {
    const { getByText } = render(
      <StackedForm {...props}>
        <button type="submit">Submit</button>
      </StackedForm>
    )

    expect(getByText(props.title)).toBeInTheDocument()
  })
})
