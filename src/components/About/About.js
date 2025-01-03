import React, { useState, useEffect } from "react";
import "./style.css";
import Personal from "../Personal/Personal";
import { Todos } from "../Todos/Todos";

export const About = () => {
  // ref, useRef
  // state in react
  const [name, setName] = useState("Shriyam");
  const [todo, setTodo] = useState({});

  // async function callTodos() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/10"
  //   );
  //   return await response.json();
  // }

  useEffect(() => {
    const callTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/10"
      );
      setTodo(await response.json());
    };
    callTodos();
  }, []);

  return (
    <div className="about">
      <div>
        <h2>Personal</h2>
        {/* <Personal
          myName={name}
          setMyName={setName}
          age="24"
          nativePlace={native_place}
        /> */}
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <Todos todo={todo} />
    </div>
  );
};
