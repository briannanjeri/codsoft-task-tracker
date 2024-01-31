import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./addTask";
import Task from "./task";
import { TaskProp } from "./type";
const Tasks = () => {
  const [tasks, setTasks] = useState<TaskProp[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>();

  console.log("tasks", tasks);
  const deleteTask = (taskId: number) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    if (deletedTask) {
      const filteredTasks = tasks.filter((task) => task.id != taskId);
      setTasks(filteredTasks);
    }
  };

  const toggleCompleted = (taskId: number) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id == taskId
          ? { ...task, completed: !task.completed }
          : { ...task }
      );
      setTasks(updatedTasks);
    }
  };

  const updateTask = (taskId: number, editedTask: TaskProp) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id == taskId ? { ...task, ...editedTask } : { ...task }
      );
      setTasks(updatedTasks);
    }
  };

  useEffect(() => {
    const completedTask = () => {
      const taskCompleted = tasks.filter((task) => task.completed);
      setCompletedTasks(taskCompleted.length);
    };
    completedTask();
  }, [tasks]);

  return (
    <div>
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            updateTask={updateTask}
          />
        </div>
      ))}
      <h2>Completed Tasks</h2>
      {completedTasks}/{tasks.length}
    </div>
  );
};

export default Tasks;
