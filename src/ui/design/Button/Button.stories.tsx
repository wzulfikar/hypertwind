import { story, ComponentStory } from "@storybook-util";

import { Button } from "./Button";

export default {
  ...story(Button, { path: "ui/design" }),
  argTypes: {
    rounded: { control: "boolean" },
  },
};

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args._label || "Button"}</Button>
);

export const Primary = Template.bind({});
Primary.args = { intent: "primary" };

export const Rounded = Template.bind({});
Rounded.args = { intent: "primary", rounded: true };
