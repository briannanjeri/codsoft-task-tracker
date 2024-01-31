import React, { useState } from "react";
import { AddTaskProps } from "./type";
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
    <div>
      <form onSubmit={(e) => createTask(e)}>
        <input
          type="text"
          placeholder="enter task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
