import { ComponentStory, story } from "@storybook-util";
import { HiPaperClip, HiPencil, HiPlus, HiTrash } from "react-icons/hi";

import { ButtonGroup } from "@/ui/templates/ButtonGroup";

import { Divider } from "./Divider";

export default {
  ...story(Divider, { path: "/ui/layout" }),
  args: {
    _label: "Divider",
  },
};

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args}>{args._label}</Divider>
);

export const NoProps = Template.bind({});
NoProps.args = {};

export const NoPropsDarkMode = Template.bind({});
NoPropsDarkMode.args = { _darkMode: true };

export const LeftContent = Template.bind({});
LeftContent.args = { justifyContent: "start" };

export const RoundedContent = Template.bind({});
RoundedContent.args = { contentStyle: { rounded: "full" } };

export const WithButton: ComponentStory<typeof Divider> = ({
  children,
  ...args
}) => {
  return (
    <Divider {...args}>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <HiPlus
          className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <span>{args._label}</span>
      </button>
    </Divider>
  );
};
WithButton.args = { _label: "Button" };

export const WithTitleAndButton: ComponentStory<typeof Divider> = ({
  children,
  ...args
}) => {
  return (
    <Divider {...args}>
      <span className="bg-white px-1 text-lg font-medium text-gray-900">
        Projects
      </span>
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <HiPlus
          className="-ml-1.5 mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <span>Button text</span>
      </button>
    </Divider>
  );
};
WithTitleAndButton.args = { _label: "Button", justifyContent: "between" };

export const WithToolbar: ComponentStory<typeof Divider> = ({
  children,
  ...args
}) => {
  return (
    <Divider {...args}>
      <ButtonGroup>
        <ButtonGroup.Button rounded={"full"}>
          <HiPencil className="h-5 w-5" />
        </ButtonGroup.Button>
        <ButtonGroup.Button>
          <HiPlus className="h-5 w-5" />
        </ButtonGroup.Button>
        <ButtonGroup.Button rounded={"full"}>
          <HiTrash className="h-5 w-5" />
        </ButtonGroup.Button>
      </ButtonGroup>
    </Divider>
  );
};
WithToolbar.args = { _label: "Button" };
