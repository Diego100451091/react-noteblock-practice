import TaskCard from "./TaskCard";

function TaskList({ task, deleteTask }) {
  if (task.length === 0) {
    return <h1>There is no tasks</h1>;
  }

  return (
    <div>
      {task.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
