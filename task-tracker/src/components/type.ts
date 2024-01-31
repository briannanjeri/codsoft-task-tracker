export interface TaskProp {
  id: number;
  description: string;
  completed: boolean;
}

export type task = {
  task: TaskProp;
  deleteTask: (message: number) => void;
  toggleCompleted: (message: number) => void;
  updateTask: (taskId: number, editedTask: TaskProp) => void;
};

export type AddTaskProps = {
  tasks: TaskProp[];
  setTasks: (message: TaskProp[]) => void;
};
