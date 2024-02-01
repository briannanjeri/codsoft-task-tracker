import React, { useEffect } from "react";
import { useState } from "react";
import { TaskProp, task } from "./type";
import "./style.css";

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
    setDescription("");
    setIsEdit(false);
  };

  useEffect(() => {}, [isEdit]);
  return (
    <div className="task-item">
      <div>
        <span>
          <input
            type="checkbox"
            onClick={() => toggleCompleted(task.id)}
            className="checkbox-input"
          />
        </span>
        <span
          className={`task-description ${task.completed ? "completed" : ""}`}
        >
          {task.description}
        </span>
      </div>
      {!isEdit && (
        <button onClick={() => setIsEdit(true)} className="edit-button">
          Edit
        </button>
      )}
      {isEdit && (
        <form onSubmit={(e) => editTask(e, task)} className="edit-form">
          <input
            type="text"
            placeholder="Edit task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="edit-input"
          />
          <button className="update-button">Update Task</button>
        </form>
      )}
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Task;
