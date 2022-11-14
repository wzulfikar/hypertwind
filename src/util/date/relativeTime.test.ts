import { addDays } from "date-fns"
import { relativeTime } from "."

describe("relativeTime", () => {
  xit("returns time ago", () => {
    const time = relativeTime("2020-01-01")
    // TODO: freeze time so we don't need to use regex
    expect(time).toMatch(/^over \d+ years ago$/)
  })

  xit("returns time ago without suffix", () => {
    const time = relativeTime("2020-01-01", false)
    expect(time).toMatch(/^over \d+ years$/)
  })

  it("returns current time", () => {
    const now = relativeTime(new Date())
    expect(now).toEqual("less than a minute ago")
  })

  it("returns future time", () => {
    const future = relativeTime(addDays(new Date(), 7))
    expect(future).toEqual("in 7 days")
  })
})
