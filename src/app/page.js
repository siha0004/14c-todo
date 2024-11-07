"use client";
import { useState } from "react";

import Image from "next/image";
import Form from "@/components/Form";
import List from "@/components/List";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskText: "Lær React",
      done: false,
    },
    {
      id: 2,
      taskText: "Lær Next.js",
      done: false,
    },
  ]);

  return (
    <div className="m-12">
      <Form addTask={addTask}></Form>
      <List tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} addTask={addTask}></List>
    </div>
  );

  // Hjælpefunktioner

  function addTask(event) {
    event.preventDefualt();
    const formData = new FormData(event.target);
    // console.log(formData.get("task"));
    const newTask = {
      id: crypto.randomUUID(),
      taskText: formData.get("task"),
      done: false,
    };

    // 2 Forskelllige metoder, som set'er tasken
    // setTasks(tasks.concat(newTask));
    setTasks([...tasks, newTask]);

    //Tømmer input feltet igen
    event.target.reset();
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
}
