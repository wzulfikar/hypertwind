import { Badge } from "./Badge"
import { tw } from "@components/util"

export default {
  component: Badge,
}

export const Simple = () => (
  <div className={tw`grid space-y-2`}>
    <div className={tw`space-x-1`}>
      <Badge>Bug</Badge>
      <Badge type="neon">Bug</Badge>
      <Badge type="solid">Bug</Badge>
    </div>
  </div>
)

export const WithColor = () => (
  <div className={tw`grid space-y-2`}>
    <div className={tw`space-x-1`}>
      <Badge color="yellow">Bug</Badge>
      <Badge color="yellow" type="neon">
        Bug
      </Badge>
      <Badge color="yellow" type="solid">
        Bug
      </Badge>
    </div>

    <div className={tw`space-x-1`}>
      <Badge color="green">Bug</Badge>
      <Badge color="green" type="neon">
        Bug
      </Badge>
      <Badge color="green" type="solid">
        Bug
      </Badge>
    </div>

    <div className={tw`space-x-1`}>
      <Badge color="red">Bug</Badge>
      <Badge color="red" type="neon">
        Bug
      </Badge>
      <Badge color="red" type="solid">
        Bug
      </Badge>
    </div>
  </div>
)
