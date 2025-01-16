import React, { useState } from "react";
import "./style.css";
import { CustomButton } from "../Button/Button";
import { weatherData } from "../../utils/WeatherDate";
import { WeatherBox } from "../WeatherBox/WeatherBox";

export const Hero = () => {
  const [cityName, setCityName] = useState();
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    const response = weatherData.find((item) => item.cityName === cityName);
    if (response) {
      setError(null);
      setResult(response);
    } else {
      setResult(null);
      setError("Entered city not in records");
    }
  };
  console.log(result);
  return (
    <div className="Hero">
      <h1>This is Hero Section</h1>

      <div className="search">
        <input
          className="cityInput"
          type="text"
          onChange={(e) => setCityName(e.target.value)}
        />
        <CustomButton title="Find Weather" onClick={handleClick} />
      </div>
      {result && <WeatherBox weather={result} />}
      {error && <p>{error}</p>}
    </div>
  );
};
