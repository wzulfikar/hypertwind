import { Gantt, GanttProps, Task } from "gantt-task-react";
export { ViewMode } from "gantt-task-react";

export type GanttTask = Task;

const base = {
  container: `flex`,
};

type Props = {
  tasks: Task[];
} & GanttProps;

export const GanttChart = ({ tasks, ...props }: Props) => {
  return <Gantt tasks={tasks} {...props} />;
};
