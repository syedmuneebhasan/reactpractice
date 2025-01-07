import React, { useEffect, useState } from "react";
export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Updating Items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
