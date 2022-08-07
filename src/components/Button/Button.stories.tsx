import { tw } from "@components/util"
import { Button } from "./Button"

export default {
  component: Button
}

const onClick = () => console.log("clicked!")

export const ButtonSizes = () => (
  <div className={tw`flex flex-col space-y-2 w-24`}>
    <Button onClick={onClick} size="sm">
      Button sm
    </Button>
    <Button onClick={onClick} size="md">
      Button md
    </Button>
    <Button onClick={onClick} size="lg">
      Button lg
    </Button>
  </div>
)
