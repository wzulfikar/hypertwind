import { ComponentStory, story } from "@storybook-util";

import { Card } from "./Card";

export default {
  ...story(Card, { path: "/ui/templates" }),
  args: {
    _label:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Content>{args._label}</Card.Content>
  </Card>
);

export const NoProps = Template.bind({});
NoProps.args = {};

export const NoPropsDarkMode = Template.bind({});
NoPropsDarkMode.args = { _darkMode: true };

export const WithHeader: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Header>
      <h1 className="text-lg">This is a header</h1>
    </Card.Header>
    <Card.Content>{args._label}</Card.Content>
  </Card>
);

export const WithFooter: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Header>
      <h1 className="text-lg">This is a header</h1>
    </Card.Header>
    <Card.Content>{args._label}</Card.Content>
    <Card.Footer>This is a footer</Card.Footer>
  </Card>
);
