import { useState } from "react";

interface InputState {
  taskName: string;
}

interface InputProps {
  onNewTask: (newTask: string) => void;
}

function InputTask({ onNewTask }: InputProps) {
  const [taskName, setTaskName] = useState<InputState["taskName"]>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const addTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (taskName.trim() === "") return;
      onNewTask(taskName);
      setTaskName("");
    }
  };
  return (
    <input
      type="text"
      placeholder="add a task"
      value={taskName}
      onChange={handleChange}
      onKeyDown={addTask}
    />
  );
}

export default InputTask;
