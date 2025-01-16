import React from "react";
import "./style.css";

export const WeatherBox = (props) => {
  const weather = props.weather;
  return (
    <div className="weatherBox">
      <h2>
        {weather.cityName}, {weather.countryName}
      </h2>
      <p>Temperature: {weather.temp}</p>
    </div>
  );
};
