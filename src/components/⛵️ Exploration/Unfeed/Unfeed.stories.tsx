import { story } from "@storybook-util";
import { ComponentStory } from "@storybook/react";

import { style as button } from "@/ui/base/Button";

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
