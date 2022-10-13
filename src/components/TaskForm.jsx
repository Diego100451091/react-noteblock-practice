import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask, deleteAllTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteAllTask();
  };

  return (
    <div className="max-w-md m-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-5 mb-4 flex flex-col gap-3 "
      >
        <h1 className="text-white m-auto text-3xl pb-2 font-bold">Make your task</h1>
        <input
          className="bg-slate-300 p-2 w-full rounded-lg focus:outline-none"
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-2 w-full rounded-lg focus:outline-none"
          placeholder="Write the description of the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="w-3/5 m-auto flex justify-between">
          <button className="bg-slate-300 w-fit m-auto px-3 py-1 rounded-lg border-slate-600 border-2 hover:bg-slate-500 active:bg-slate-600">
            Save
          </button>
          <button
            className="bg-slate-300 w-fit m-auto px-3 py-1 rounded-lg border-slate-600 border-2 hover:bg-slate-500 active:bg-slate-600"
            onClick={handleDelete}
          >
            Delete all
          </button>
        </div>
      </form>
    </div>
  );
}
