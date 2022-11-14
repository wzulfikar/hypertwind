import { render } from "@test"
import { Article } from "."

describe("Article", () => {
  const props = {
    href: "#",
    ticker: "website.com",
    title: "How to position your furniture for positivity",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nobis aliquid accusamus? Sint, sequi voluptas.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  }
  it("renders without error", () => {
    const { getByText } = render(<Article {...props} />)

    expect(getByText(props.title)).toBeInTheDocument()
  })
})
