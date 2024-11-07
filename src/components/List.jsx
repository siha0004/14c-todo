import ListItem from "@/components/ListItem";

const List = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask}></ListItem>
      ))}
    </ul>
  );
};

export default List;
