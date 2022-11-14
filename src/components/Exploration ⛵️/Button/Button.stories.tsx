import { story, noop } from "@storybook-util"
import { tw } from "@components/util"
import { Button } from "./Button"

export default story(Button)

export const ButtonSizes = () => (
  <div className={tw`flex flex-col space-y-2 w-32`}>
    <Button onClick={noop("onClick sm")} size="sm">
      Small (sm)
    </Button>
    <Button onClick={noop("onClick md")} size="md">
      Medium (md)
    </Button>
    <Button onClick={noop("onClick lg")} size="lg">
      Large (lg)
    </Button>
  </div>
)
