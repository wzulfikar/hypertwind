import { Announcement } from "./Announcement"
import { tw } from "@components/util"
import { relativeTime, addDays } from "@util/date"

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
