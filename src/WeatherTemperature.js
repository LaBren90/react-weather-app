import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("farhenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="today-temp" id="temp-celsius">
          {Math.round(props.celsius)}
        </span>
        <span> °C | </span>
        <span>
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="today-temp" id="temp-celsius">
          {Math.round(fahrenheit)}
        </span>
        <span>
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          |{" "}
        </span>
        <span>°F</span>
      </div>
    );
  }
}
