import { render } from "@test";
import { ValtioState } from ".";

describe("ValtioState", () => {
  const props = {
    children: "Hello world!",
  };
  it("renders without error", () => {
    const { getByText } = render(<ValtioState>{props.children}</ValtioState>);

    expect(getByText(props.children)).toBeInTheDocument();
  });
});
