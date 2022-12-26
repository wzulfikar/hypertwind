import { ComponentStory, story } from "@storybook-util";

import { Toggle } from "./Toggle";

export default {
  ...story(Toggle, { path: "/ui/base" }),
  args: {
    _label: "Toggle",
  },
};

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const NoProps = Template.bind({});
NoProps.args = {};

export const WithLabel: ComponentStory<typeof Toggle> = (args) => {
  return (
    <Toggle {...args}>
      <span className="text-sm font-medium text-gray-900 pr-1">
        {args._label}
      </span>
      <span className="text-sm text-gray-500">(Save 10%)</span>
    </Toggle>
  );
};
WithLabel.args = { _label: "Annual billing" };
