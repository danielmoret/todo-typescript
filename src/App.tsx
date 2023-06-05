import { useState } from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";

interface TodoState {
  tasks: Array<string>;
}

function App() {
  const [tasks, setTasks] = useState<TodoState["tasks"]>([]);

  const handlerNewTask = (newTask: string): void => {
    setTasks([...tasks, newTask]);
  };

  const handlerDeleteTask = (index: number): void => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <>
      <h1>todos</h1>
      <div className="tareas">
        <InputTask onNewTask={handlerNewTask} />
        {tasks.map((task, index) => {
          return (
            <ListTask task={task} index={index} onDelete={handlerDeleteTask} />
          );
        })}

        <span className="item-left">
          {tasks.length > 0
            ? tasks.length + " item left"
            : "No tasks, add a task"}
        </span>
      </div>
    </>
  );
}

export default App;
