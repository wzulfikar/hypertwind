import { story } from "@storybook-util";
import { SocialButton } from ".";

export default story(SocialButton);

export const All = () => (
  <div className={`grid grid-cols-2 gap-2`}>
    <div className={`grid gap-2`}>
      <SocialButton url="#" platform="github" />
      <SocialButton url="#" platform="twitter" />
      <SocialButton url="#" platform="dribbble" />
      <SocialButton url="#" platform="facebook" />
      <SocialButton url="#" platform="linkedin" />
    </div>
    <div className={`grid gap-2`}>
      <SocialButton url="#" platform="github" iconLayout="right" />
      <SocialButton url="#" platform="twitter" iconLayout="right" />
      <SocialButton url="#" platform="dribbble" iconLayout="right" />
      <SocialButton url="#" platform="facebook" iconLayout="right" />
      <SocialButton url="#" platform="linkedin" iconLayout="right" />
    </div>
  </div>
);
