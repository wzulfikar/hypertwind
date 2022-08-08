import { render } from "@test"
import { SocialButton } from "."

describe("SocialButton", () => {
  it("renders without error", () => {
    const { getByText } = render(<SocialButton url="#" platform="github" />)

    expect(getByText("Github")).toBeInTheDocument()
  })
})
