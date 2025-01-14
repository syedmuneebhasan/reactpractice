import React, { useState, useEffect } from "react";
import "./style.css";
import Personal from "../Personal/Personal";
import { Todos } from "../Todos/Todos";
import { CustomButton } from "../Button/Button";

export const About = () => {
  // ref, useRef
  // state in react
  const [name, setName] = useState("Shriyam");
  const [count, setCount] = useState(10);
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
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      setTodo(await response.json());
    };
    callTodos();
  }, []);

  console.log({ name });

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
        <input
          type="text"
          onChange={(e) =>
            setName((prev) => {
              console.log(">>> ", prev);
              return e.target.value;
            })
          }
        />
        <h1>{count}</h1>
        <CustomButton
          title="Increment"
          incrementCounter={() => setCount(count + 1)}
        />
        {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      </div>
      <Todos todo={todo} />
    </div>
  );
};
