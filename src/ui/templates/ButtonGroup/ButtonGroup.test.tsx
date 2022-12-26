import { render } from "@test";

import { ButtonGroup } from ".";

describe("ButtonGroup", () => {
  const props = {
    children: "Hello world!",
  };
  it("renders without error", () => {
    const { getByText } = render(<ButtonGroup>{props.children}</ButtonGroup>);

    expect(getByText(props.children)).toBeInTheDocument();
  });
});
