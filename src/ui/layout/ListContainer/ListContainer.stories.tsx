import { ComponentStory, story } from "@storybook-util";

import { ListContainer } from "./ListContainer";

export default {
  ...story(ListContainer, { path: "/ui/layout" }),
  args: {
    _label: "ListContainer",
  },
};

const Template: ComponentStory<typeof ListContainer> = (args) => (
  <ListContainer {...args}>
    <ListContainer.ListItem className="px-2 py-2">Hello</ListContainer.ListItem>
    <ListContainer.ListItem className="px-2 py-2">
      Hello 1
    </ListContainer.ListItem>
    <ListContainer.ListItem className="px-2 py-2">
      Hello 2
    </ListContainer.ListItem>
  </ListContainer>
);

export const NoProps = Template.bind({});
NoProps.args = {};
