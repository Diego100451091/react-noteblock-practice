import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button className="bg-red-500 rounded-md p-1 text-xs border-2 border-red-900 px-2 mt-3 hover:bg-red-700 active:bg-red-900"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
