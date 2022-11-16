import { ComponentStory } from "@storybook/react";
import { story } from "@storybook-util";

import { button, Button, ButtonProps } from "./button";

// const Button = (props: ButtonProps) => (
//   <button className={button(props)}>Button</button>
// );

export default {
  ...story(Button),
  argTypes: {
    rounded: { control: "boolean" },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { intent: "primary" };

export const Rounded = Template.bind({});
Rounded.args = { intent: "primary", rounded: true };
