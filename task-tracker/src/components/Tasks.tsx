import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./addTask";
import Task from "./task";
import { TaskProp } from "./type";
import "./style.css";
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
    <div className="task-list-container">
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.map((task) => (
        <div key={task.id} className="task-item-wrapper">
          <Task
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            updateTask={updateTask}
          />
        </div>
      ))}
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <span className="completed-task-count">
          {completedTasks}/{tasks.length}
        </span>
      </div>
    </div>
  );
};

export default Tasks;
