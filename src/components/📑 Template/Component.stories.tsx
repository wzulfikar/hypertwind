import { ComponentStory } from "@storybook/react";
import { story } from "@storybook-util";

import { Component } from "./Component";

export default {
  ...story(Component, {
    docs: "Copy this folder to use as a base for the new component.",
  }),
  argTypes: {
    rounded: { control: "boolean" },
  },
};

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>Component</Component>
);

export const Basic = Template.bind({});
Basic.args = { rounded: false };
