import { useState } from "react";

interface ListProps {
  task: string;
  index: number;
  onDelete: (indexTask: number) => void;
}

interface ListState {
  activeButton: boolean;
}

function ListTask({ task, onDelete, index }: ListProps) {
  const [activeButton, setActiveButton] =
    useState<ListState["activeButton"]>(false);
  return (
    <div
      key={index}
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

export default ListTask;
