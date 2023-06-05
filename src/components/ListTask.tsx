interface ListProps {
  tasks: string[];
}

function ListTask({ tasks }: ListProps) {
  return (
    <div>
      {tasks.map((task) => {
        return <p>{task}</p>;
      })}
    </div>
  );
}

export default ListTask;
