import React, { useState } from "react";
import "./style.css";
import Personal from "../Personal/Personal";

export const About = () => {
  // ref, useRef
  // state in react
  const [name, setName] = useState("Shriyam");
  const native_place = "Gurgaon";
  console.log(name);

  return (
    <div className="about">
      <div>
        <h2>Personal</h2>
        <Personal
          myName={name}
          setMyName={setName}
          age="24"
          nativePlace={native_place}
        />
      </div>
    </div>
  );
};
