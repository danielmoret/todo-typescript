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
  return (
    <>
      <h1>todos</h1>
      <div className="tareas">
        <InputTask onNewTask={handlerNewTask} />
        <ListTask tasks={tasks} />
      </div>
    </>
  );
}

export default App;
