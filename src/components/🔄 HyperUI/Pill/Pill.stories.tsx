import { story } from "@storybook-util";
import { Callout } from "@ui/interface";
import { Spacer } from "@ui/layout";
import { userFactory } from "@test/factories";

import { Pill } from "./Pill";

export default story(Pill);

export const Basic = () => <Pill>Hello world!</Pill>;

export const WithImage = () => (
  <div className={`grid w-max space-y-2`}>
    <Pill image="https://faces-img.xcdn.link/thumb-lorem-face-2609_thumb.jpg">
      John Smith
    </Pill>
    <Pill
      image="https://faces-img.xcdn.link/thumb-lorem-face-2609_thumb.jpg"
      imageLayout="right"
    >
      John Smith
    </Pill>
  </div>
);

export const WithFactory = () => {
  // Pass static name and avatar for `user1` to override the default random values
  const user1 = userFactory.build({
    name: "John Doe",
    avatar: "https://faces-img.xcdn.link/thumb-lorem-face-2609_thumb.jpg",
  });

  // Pass no args to the factory to get random values
  const user2 = userFactory.build();
  const user3 = userFactory.build();

  return (
    <>
      <Callout>
        The props for this component are created with `userFactory`. Remount the
        component to see new data.
      </Callout>
      <Spacer size="h-3" />
      <div className={`space-x-2`}>
        <Pill image={user1.avatar}>{user1.name}</Pill>
        <Pill image={user2.avatar}>{user2.name}</Pill>
        <Pill image={user3.avatar} imageLayout="right">
          {user3.name}
        </Pill>
      </div>
    </>
  );
};
