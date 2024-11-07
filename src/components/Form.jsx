import { IoIosAddCircle } from "react-icons/io";

import List from "@/components/List";

const Form = ({ addTask }) => {
  return (
    <form onSubmit={addTask} className="p-8 rounded-lg bg-orange-50">
      <label htmlFor="task">Add task</label>
      <input type="text" id="task" name="task" placeholder="task" className="bg-transparent border-b-2 border-stone-500 capitalize" />
      <button>
        <IoIosAddCircle></IoIosAddCircle>
      </button>
      {/* <input type="submit" value="+" className="bg-orange-200 text-xl text-stone-800 rounded-full ml-4 aspect-square w-7"></input> */}
    </form>
  );
};

export default Form;
