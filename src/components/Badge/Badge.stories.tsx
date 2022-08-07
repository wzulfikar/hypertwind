import { Badge } from "./Badge"
import { tw } from "@components/util"

export default {
  component: Badge,
}

const onClick = () => console.log("clicked!")

export const Simple = () => (
  <div className={tw`grid space-y-2`}>
    <div className={tw`space-x-1`}>
      <Badge onClick={onClick}>Bug</Badge>
      <Badge onClick={onClick} type="neon">
        Bug
      </Badge>
      <Badge onClick={onClick} type="solid">
        Bug
      </Badge>
    </div>
  </div>
)

export const WithColor = () => (
  <div className={tw`grid space-y-2`}>
    <div className={tw`space-x-1`}>
      <Badge onClick={onClick} color="yellow">
        Bug
      </Badge>
      <Badge onClick={onClick} color="yellow" type="neon">
        Bug
      </Badge>
      <Badge onClick={onClick} color="yellow" type="solid">
        Bug
      </Badge>
    </div>

    <div className={tw`space-x-1`}>
      <Badge onClick={onClick} color="green">
        Bug
      </Badge>
      <Badge onClick={onClick} color="green" type="neon">
        Bug
      </Badge>
      <Badge onClick={onClick} color="green" type="solid">
        Bug
      </Badge>
    </div>
    
    <div className={tw`space-x-1`}>
      <Badge onClick={onClick} color="red">
        Bug
      </Badge>
      <Badge onClick={onClick} color="red" type="neon">
        Bug
      </Badge>
      <Badge onClick={onClick} color="red" type="solid">
        Bug
      </Badge>
    </div>
  </div>
)
