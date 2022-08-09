import { story } from "@storybook-util"
import { tw } from "@components/util"
import { relativeTime, addDays } from "@util/date"
import { Announcement } from "./Announcement"

export default story(Announcement)

const githubRepo = "https://github.com/wzulfikar/hypertwind"

export const Simple = () => (
  <Announcement>
    Love HyperTwind? Check the{" "}
    <a className={tw`underline`} href={githubRepo}>
      Github repo!
    </a>
  </Announcement>
)

export const WithIcon = () => {
  // const publicLaunch = dayjs().add(7, "days")
  return (
    <Announcement closeable>
      Public launch is {relativeTime(addDays(7))}.{" "}
      <a href="#" className={tw`underline`}>
        Grab your ticket!
      </a>
    </Announcement>
  )
}
