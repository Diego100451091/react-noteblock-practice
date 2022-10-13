import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

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
    for (let i = 0; i < tasks.length; i++) {
      console.log("Elemento en lista" + tasks[i].id);
    }
  }

  function deleteAllTask() {
    setTasks([]);
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        deleteAllTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
