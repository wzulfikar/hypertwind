import { story } from "@storybook-util"
import { tw } from "@components/util"
import { Button } from "./Button"

export default story(Button)

const onClick = () => console.log("clicked!")

export const ButtonSizes = () => (
  <div className={tw`flex flex-col space-y-2 w-32`}>
    <Button onClick={onClick} size="sm">
      Small (sm)
    </Button>
    <Button onClick={onClick} size="md">
      Medium (md)
    </Button>
    <Button onClick={onClick} size="lg">
      Large (lg)
    </Button>
  </div>
)
