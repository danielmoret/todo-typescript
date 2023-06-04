import { useState } from "react";
import "./App.css";

interface TodoState {
  tasks: Array<string>;
  taskName: string;
}

function App() {
  const [tasks, setTasks] = useState<TodoState["tasks"]>([]);
  const [taskName, setTaskName] = useState<TodoState["taskName"]>("");
  return (
    <>
      <div>Todo</div>
      <div></div>
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </>
  );
}

export default App;
