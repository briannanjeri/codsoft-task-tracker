import React, { useEffect } from "react";
import { useState } from "react";
import { TaskProp, task } from "./type";

const Task = ({ task, deleteTask, toggleCompleted, updateTask }: task) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("");
  console.log("isedit", isEdit);

  const editTask = (e: React.FormEvent<HTMLFormElement>, task: TaskProp) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    const editedTask = {
      id: task.id,
      completed: task.completed,
      description,
    };
    updateTask(task.id, editedTask);
    setIsEdit(false);
  };

  useEffect(() => {}, [isEdit]);
  return (
    <div>
      <input type="checkbox" onClick={() => toggleCompleted(task.id)}></input>
      {task.description}
      <button onClick={() => setIsEdit(true)}>Edit</button>
      {isEdit && (
        <form onSubmit={(e) => editTask(e, task)}>
          <input
            type="text"
            placeholder="enter task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>UpdateTask</button>
        </form>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
