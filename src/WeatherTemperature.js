import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="today-temp" id="temp-celsius">
        {Math.round(props.celsius)}
      </span>
      <span> °C</span>
    </div>
  );
}
