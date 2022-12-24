import { story, ComponentStory } from "@storybook-util";

import { ValtioState } from "./ValtioState";

export default {
  ...story(ValtioState, { path: "components/⛵️ Exploration" }),
  args: {
    _label: "ValtioState",
  },
};

const Template: ComponentStory<typeof ValtioState> = (args) => (
  <ValtioState {...args}>{args._label}</ValtioState>
);

export const Basic = Template.bind({});
Basic.args = { intent: "basic" };
