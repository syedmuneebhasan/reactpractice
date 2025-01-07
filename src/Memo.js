import React, { useState, useMemo } from "react";
import { initialItems } from "./utils";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  // [
  //   {
  //     id: 1,
  //     flag: false
  //   },
  //   {
  //     id: 2,
  //     flag: false
  //   },
  //   ......,{}
  //   {
  //     id: 29999999,
  //     flag: true
  //   }
  // ]

  // Map, filter => they return arrays

  // useMemo is used to memoize a variable
  const selectedItem = useMemo(() => items.find((item) => item.flag), []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h1>Selected Item: {selectedItem?.id}</h1>
    </div>
  );
};

export default Memo;
