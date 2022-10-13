import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useState, useEffect } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-center text-3xl font-bold">
        There is no tasks
      </h1>
    );
  }

  const [mobileDev, setMobileDev] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMobileDev(e.matches));
  }, []);

  return (
    <div>
      {mobileDev && (
        <div className="grid grid-cols-4 gap-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
      {!mobileDev && (
        <div className="grid grid-cols-2 gap-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
