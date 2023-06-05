import { useState } from "react";

interface TaskState {
  activeButton: boolean;
}

interface TaskProps {
  task: string;
  onDelete: (indexTask: number) => void;
  index: number;
}

function Task({ task, onDelete, index }: TaskProps) {
  const [activeButton, setActiveButton] =
    useState<TaskState["activeButton"]>(false);
  return (
    <div
      className="tarea"
      onMouseOver={() => {
        setActiveButton(true);
      }}
      onMouseOut={() => {
        setActiveButton(false);
      }}
    >
      <span>{task}</span>
      <span
        className={activeButton ? "red" : "disabled"}
        onClick={() => onDelete(index)}
      >
        X
      </span>
    </div>
  );
}

export default Task;
