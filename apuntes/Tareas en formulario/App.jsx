import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(taskTitle, taskDescription) {
    const newTask = {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskID) {
    console.log(taskID);
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList task={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
