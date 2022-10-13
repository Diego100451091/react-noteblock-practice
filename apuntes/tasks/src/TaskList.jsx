import { tasks as data } from "./Task";
import { useState, useEffect } from "react";


function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (tasks.length === 0) {
    return <h1>There is no tasks</h1>;
  }

  return (
    <div>
      {tasks.map((task, e) => (
        <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
