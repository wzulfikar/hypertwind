import { story, noop } from "@storybook-util"
import { tw } from "@components/util"
import { GanttChart, GanttTask, ViewMode } from "."
import "gantt-task-react/dist/index.css"

const docs = `
Renders gantt chart from [gantt-task-react](https://github.com/MaTeMaTuK/gantt-task-react).`

export default story(GanttChart, docs)

const tasks: GanttTask[] = [
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 2),
    name: "Idea",
    id: "Task 0",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 1),
    end: new Date(2020, 1, 5),
    name: "Idea",
    id: "Task 1",
    type: "task",
    progress: 30,
    isDisabled: false,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 3),
    end: new Date(2020, 1, 12),
    name: "Idea",
    id: "Task 2",
    type: "task",
    progress: 45,
    isDisabled: false,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 11),
    end: new Date(2020, 1, 22),
    name: "Idea",
    id: "Task 3",
    type: "task",
    progress: 45,
    isDisabled: true,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
  {
    start: new Date(2020, 1, 10),
    end: new Date(2020, 2, 2),
    name: "Idea",
    id: "Task 4",
    type: "task",
    progress: 90,
    isDisabled: false,
    styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
  },
]

export const Basic = () => <GanttChart tasks={tasks} />

export const Week = () => <GanttChart tasks={tasks} viewMode={ViewMode.Week} />

export const Month = () => (
  <GanttChart tasks={tasks} viewMode={ViewMode.Month} />
)

export const Year = () => <GanttChart tasks={tasks} viewMode={ViewMode.Year} />

export const WithHandlers = () => (
  <GanttChart
    tasks={tasks}
    onDateChange={noop("onTaskChange")}
    onProgressChange={noop("onProgressChange")}
    onDoubleClick={noop("onDblClick")}
    onClick={noop("onClick")}
    onSelect={noop("onSelect")}
    onExpanderClick={noop("onExpanderClick")}
  />
)
