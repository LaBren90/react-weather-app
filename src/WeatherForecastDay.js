import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div>
      <div className="row">
        <div className="col mt-4">{day()}</div>
        <div className="col">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.condition}
            className="today-icon"
          />
        </div>
        <div className="col mt-4">
          <span className="WeatherForecast-temperature-max">
            {Math.round(props.data.temp.max)}
          </span>
          °C
          <span className="WeatherForecast-temperature-min">
            {" "}
            {Math.round(props.data.temp.min)}
          </span>
          <span className="WeatherForecast-temperature-units">°C</span>
        </div>
      </div>
    </div>
  );
}
