import { render } from "@test"
import { Suspense } from "."

describe("Suspense", () => {
  it("renders without error", () => {
    const { getByText } = render(
      <Suspense isLoading={false}>Hello world!</Suspense>
    )

    expect(getByText("Hello world!")).toBeInTheDocument()
  })
})
