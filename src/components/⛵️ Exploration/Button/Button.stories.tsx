import { ComponentStory } from '@storybook/react'
import { story } from "@storybook-util"
import { Button } from "./Button"

export default story(Button)

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="flex flex-col space-y-2 w-32">
    <Button {...args} size="sm">Small (sm)</Button>
    <Button {...args} size="md">Medium (md)</Button>
    <Button {...args} size="lg">Large (lg)</Button>
  </div>
)

export const Sizes = Template.bind({})
Sizes.args = { color: "green" }
