import React, { useState } from "react";
// import { todos } from "../data.js";

export default function About() {
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <h1 className="text-xl">React Developer</h1>
      <button onClick={() => import('../data').then((module)=>{
        // console.log(module);
        setTodoList(module.todos)
      })} className="cursor-pointer">
        Load Data
      </button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
