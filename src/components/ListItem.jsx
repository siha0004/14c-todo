import { FaRegTrashAlt } from "react-icons/fa";

const ListItem = ({ task, deleteTask, toggleTask }) => {
  const { id, taskText, done } = task;
  return (
    <li className="flex gap-2 mb-2">
      <span>{taskText}</span>
      <button onClick={() => toggleTask(id)} className="bg-orange-200 px-2 rounded-full">
        done
      </button>
      <button onClick={() => deleteTask(id)} className="bg-orange-400 px-2 rounded-full">
        delete
      </button>
    </li>
  );
};

export default ListItem;
