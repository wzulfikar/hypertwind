import { Announcement } from "./Announcement"
import { tw } from "@components/util"

export default {
  component: Announcement,
}

const githubRepo = "https://github.com/wzulfikar/hypertwind"

export const Simple = () => (
  <Announcement>
    Love HyperTwind? Check the{" "}
    <a className={tw`underline`} href={githubRepo}>
      Github repo!
    </a>
  </Announcement>
)

export const WithIcon = () => (
  <Announcement closeable>
    Love HyperTwind? Check the{" "}
    <a className={tw`underline`} href={githubRepo}>
      Github repo!
    </a>
  </Announcement>
)

export const WithSlider = () => {}

export const WithLocation = () => (
  <Announcement closeable location="bottom">
    Love HyperTwind? Check the{" "}
    <a className={tw`underline`} href={githubRepo}>
      Github repo!
    </a>
  </Announcement>
)

export const Afloat = () => (
  <Announcement closeable afloat>
    Love HyperTwind? Check the{" "}
    <a className={tw`underline`} href={githubRepo}>
      Github repo!
    </a>
  </Announcement>
)
