import { ComponentStory, story } from "@storybook-util";

import { Divider } from "./Divider";

export default {
  ...story(Divider, { path: "/ui/layout" }),
  args: {
    _label: "Divider",
  },
};

const Template: ComponentStory<typeof Divider> = (args) => (
  <div className="h-10 mt-auto mb-auto bg-gray-800">
    <Divider {...args}>{args._label}</Divider>
  </div>
);

export const NoProps = Template.bind({});
NoProps.args = {};

export const RoundedContent = Template.bind({});
RoundedContent.args = {};
