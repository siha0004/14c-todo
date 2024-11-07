"use client";
import { useState } from "react";

import { IoIosAddCircle } from "react-icons/io";

import List from "@/components/List";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");

    const newTask = {
      id: crypto.randomUUID(),
      text: task,
      completed: false,
    };
    setTasks(tasks.concat(newTask));
    // eller setTasks([...tasks, newTask]);

    event.target.reset();
  }
  return (
    <form onSubmit={addTask} className="p-8 rounded-lg bg-orange-50">
      <h2 className="text-xl font-semibold pb-4">To do list</h2>
      <div className="flex align-middle">
        <label htmlFor="">Add task</label>
        <input type="text" id="" name="task" placeholder="task" className="bg-transparent border-b-2 border-stone-500 capitalize" />
        <input type="submit" value="+" className="bg-orange-200 text-xl text-stone-800 rounded-full ml-4 aspect-square w-7"></input>
      </div>

      <List></List>
    </form>
  );
};

export default ToDoApp;
