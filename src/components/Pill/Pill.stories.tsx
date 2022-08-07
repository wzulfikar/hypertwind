import { Pill } from "./Pill"
import { tw } from "@components/util"

export default {
  component: Pill,
}

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
