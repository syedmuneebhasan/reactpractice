import React from "react";
import { Footer } from "../Footer/Footer";

// const Personal = ({ myName, setMyName, age, nativePlace }) => {
const Personal = ({ myName, age, nativePlace }) => {
  //   const name = props.name;
  //   const native_place = props.native_place;

  return (
    <div>
      <p>My name is: {myName}</p>
      <p>My age is: {age}</p>
    </div>
  );
};

export default Personal;
