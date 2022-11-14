import { story } from "@storybook-util"
import { Alert } from "@components/🔄 HyperUI/Alert"
import { tw } from "@components/util"
import { Pill } from "./Pill"
import { userFactory } from "@test/factories"

export default story(Pill)

export const Basic = () => <Pill>Hello world!</Pill>

export const WithImage = () => (
  <div className={tw`grid w-max space-y-2`}>
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
)

export const WithFactory = () => {
  // Pass static name and avatar for `user1` to override the default random values
  const user1 = userFactory.build({
    name: "John Doe",
    avatar: "https://faces-img.xcdn.link/thumb-lorem-face-2609_thumb.jpg",
  })

  // Pass no args to the factory to get random values
  const user2 = userFactory.build()
  const user3 = userFactory.build()

  return (
    <>
      <Alert text="Story Hint" styles={{ container: "mb-4 max-w-sm" }}>
        The props for this component are created with `userFactory`. Remount the
        component to see new data.
      </Alert>
      <div className={tw`space-x-2`}>
        <Pill image={user1.avatar}>{user1.name}</Pill>
        <Pill image={user2.avatar}>{user2.name}</Pill>
        <Pill image={user3.avatar} imageLayout="right">
          {user3.name}
        </Pill>
      </div>
    </>
  )
}
