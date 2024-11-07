import { FaRegTrashAlt } from "react-icons/fa";

const ListItem = ({ taskText }) => {
  return (
    <div>
      <p>{taskText}</p>
      <button>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default ListItem;
