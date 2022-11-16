import { ComponentStory } from "@storybook/react";
import { story } from "@storybook-util";
import { button } from "@ui/design";

import { Unfeed, defaultSrc } from "./Unfeed";

export default {
  ...story(Unfeed),
};

const Template: ComponentStory<typeof Unfeed> = (args) => (
  <div className={button({ intent: "primary" })}>
    <Unfeed {...args}>Send feedback</Unfeed>
  </div>
);

export const Default = Template.bind({});
Default.args = { src: defaultSrc, footer: "Powered by Unwind" };
