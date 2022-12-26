import { ComponentStory, story } from "@storybook-util";

import { Button } from "./Button";

export default {
  ...story(Button, { path: "ui/base" }),
  args: {
    _label: "Button",
  },
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args._label}</Button>
);

export const Primary = Template.bind({});
Primary.args = { intent: "primary" };

export const Rounded = Template.bind({});
Rounded.args = { intent: "primary", rounded: "full" };
