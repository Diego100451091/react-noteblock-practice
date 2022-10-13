import { useState } from "react";
import { tasks } from "../data/Task";

export default function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write your task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Write the description of the task"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}
