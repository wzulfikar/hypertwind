import { ComponentStory } from "@storybook/react";
import { story } from "@storybook-util";
import { Button } from "./Button";
import { useFetchUser } from "./useFetchUser";

export default {
  ...story(Button),
};

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="flex flex-col space-y-2 w-32">
    <Button {...args} size="sm">
      Small (sm)
    </Button>
    <Button {...args} size="md">
      Medium (md)
    </Button>
    <Button {...args} size="lg">
      Large (lg)
    </Button>
  </div>
);

export const Sizes = Template.bind({});
Sizes.args = { color: "green" };

export const WithUseUserHook = () => {
  const [user, fetchUser] = useFetchUser();
  return (
    <div>
      <p>{user?.name || "(no user)"}</p>
      <br />
      <Button onClick={() => fetchUser(1)} size="lg">
        Fetch user
      </Button>
    </div>
  );
};
