import { useState } from "react";

interface ListProps {
  tasks: string[];
  onDelete: (indexTask: number) => void;
}

interface ListState {
  activeButton: boolean;
}

function ListTask({ tasks, onDelete }: ListProps) {
  const [activeButton, setActiveButton] =
    useState<ListState["activeButton"]>(false);
  return (
    <>
      {tasks.map((task, index) => {
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
      })}
    </>
  );
}

export default ListTask;
