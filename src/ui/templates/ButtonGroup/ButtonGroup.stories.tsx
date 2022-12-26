import { ComponentStory, story } from "@storybook-util";
import { HiPaperClip, HiPencil, HiPlus, HiTrash } from "react-icons/hi";

import { ButtonGroup } from "./ButtonGroup";

export default {
  ...story(ButtonGroup, { path: "/ui/base" }),
  args: {
    _label: "ButtonGroup",
  },
};

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <ButtonGroup.Button>
      <HiPencil className="h-5 w-5" aria-hidden="true" />
    </ButtonGroup.Button>
    <ButtonGroup.Button>
      <HiPaperClip className="h-5 w-5" aria-hidden="true" />
    </ButtonGroup.Button>
    <ButtonGroup.Button>
      <HiPlus className="h-5 w-5" aria-hidden="true" />
    </ButtonGroup.Button>
    <ButtonGroup.Button>
      <HiTrash className="h-5 w-5" aria-hidden="true" />
    </ButtonGroup.Button>
  </ButtonGroup>
);

export const NoProps = Template.bind({});
NoProps.args = {};

export const NoPropsDarkMode = Template.bind({});
NoPropsDarkMode.args = { _darkMode: true };

export const RoundedButton: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
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
);

export const WithTextOnly: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <ButtonGroup.Button>Edit</ButtonGroup.Button>
    <ButtonGroup.Button>Add</ButtonGroup.Button>
    <ButtonGroup.Button>Delete</ButtonGroup.Button>
  </ButtonGroup>
);

export const WithTextAndIcon: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <ButtonGroup.Button>
      <HiPencil className="h-5 w-5 mr-2" aria-hidden="true" /> Edit
    </ButtonGroup.Button>
    <ButtonGroup.Button>
      <HiPlus className="h-5 w-5 mr-2" aria-hidden="true" />
      Add
    </ButtonGroup.Button>
    <ButtonGroup.Button>
      <HiTrash className="h-5 w-5 mr-2" aria-hidden="true" />
      Delete
    </ButtonGroup.Button>
  </ButtonGroup>
);
