import React, { useState } from "react";
import { AddTaskProps } from "./type";
import "./style.css";
const AddTask = ({ tasks, setTasks }: AddTaskProps) => {
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      description,
      completed,
    };
    setTasks([...tasks, newTask]);
    setDescription("");
  };

  return (
    <div className="task-form-container">
      <form onSubmit={(e) => createTask(e)} className="task-form">
        <input
          type="text"
          placeholder="Enter task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
        />
        <button className="add-task-button">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
