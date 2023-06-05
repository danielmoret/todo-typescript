import Task from "./Task";

interface ListProps {
  tasks: string[];
  onDelete: (indexTask: number) => void;
}

function ListTask({ tasks, onDelete }: ListProps) {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Task task={task} index={index} onDelete={onDelete} key={index} />
        );
      })}
    </>
  );
}

export default ListTask;
