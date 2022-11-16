import { render, userEvent } from "@test";
import { Component } from ".";

describe("Component", () => {
  const props = {
    label: "This is a component",
    onClick: jest.fn(),
  };

  it("renders without error", async () => {
    const { getByText } = render(
      <Component onClick={props.onClick}>{props.label}</Component>
    );

    const button = getByText(props.label);
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
