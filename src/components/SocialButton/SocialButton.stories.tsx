import { SocialButton } from "."
import { tw } from "@components/util"

export default {
  component: SocialButton,
}

export const All = () => (
  <div className={tw`grid grid-cols-2 gap-2`}>
    <div className={tw`grid gap-2`}>
      <SocialButton url="#" platform="github" />
      <SocialButton url="#" platform="twitter" />
      <SocialButton url="#" platform="dribbble" />
      <SocialButton url="#" platform="facebook" />
      <SocialButton url="#" platform="linkedin" />
    </div>
    <div className={tw`grid gap-2`}>
      <SocialButton url="#" platform="github" iconLayout="right" />
      <SocialButton url="#" platform="twitter" iconLayout="right" />
      <SocialButton url="#" platform="dribbble" iconLayout="right" />
      <SocialButton url="#" platform="facebook" iconLayout="right" />
      <SocialButton url="#" platform="linkedin" iconLayout="right" />
    </div>
  </div>
)
