import { render, mockSvg } from "@test"
import { GanttChart } from "."

beforeEach(() => {
  mockSvg()
})

describe("GanttChart", () => {
  const props = {
    tasks: [
      {
        start: new Date(2020, 1, 1),
        end: new Date(2020, 1, 2),
        name: "My Task",
        id: "Task 0",
        type: "task" as const,
        progress: 45,
        isDisabled: true,
        styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
      },
    ],
  }
  it("renders without error", () => {
    const { getAllByText } = render(<GanttChart {...props} />)

    expect(getAllByText("My Task")).toHaveLength(2)
  })
})
