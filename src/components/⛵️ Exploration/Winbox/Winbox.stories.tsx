import { story, ComponentStory } from "@storybook-util";

import { Winbox } from "./Winbox";

export default {
  ...story(Winbox, { path: "components/⛵️ Exploration" }),
};

const Template: ComponentStory<typeof Winbox> = (args) => <Winbox {...args} />;

export const Demo = Template.bind({});
