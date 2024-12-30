import React, { useState } from "react";
import "./style.css";
const Personal = ({ myName, age }) => {
  //   const name = props.name;
  //   const native_place = props.native_place;

  const [fav, setFav] = useState({
    destination: "",
    viewDestination: "",
    food: "",
    viewFood: "",
  });

  const handleDestinationChange = (e) => {
    setFav({ ...fav, destination: e.target.value });
  };

  const handleFoodChange = (e) => {
    setFav({ ...fav, food: e.target.value });
  };

  const handleClick = () => {
    setFav({
      ...fav,
      viewDestination: fav.destination,
      viewFood: fav.food,
    });
  };

  return (
    <div className="personal">
      <div>
        <p>My name is: {myName}</p>
        <p>My age is: {age}</p>
        <p>My Fav. holiday destination : {fav.viewDestination}</p>
        <p>My Fav. Food: {fav.viewFood}</p>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Destination"
          value={fav.destination}
          onChange={(e) => handleDestinationChange(e)}
        />
        <input
          type="text"
          placeholder="Food"
          value={fav.food}
          onChange={(e) => handleFoodChange(e)}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </div>
  );
};

export default Personal;
