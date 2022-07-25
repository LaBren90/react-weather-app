import axios from "axios";
import React from "react";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "af2c2a87ea7284e044982eed7c20bf83";
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <h3>
        <div className="row">
          <div className="col mt-4">Wednesday</div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.condition}
              className="today-icon"
            />
          </div>
          <div className="col mt-4">
            <span className="WeatherForecast-temperature-max">12</span>°C
            <span className="WeatherForecast-temperature-min"> 4</span>
            <span className="WeatherForecast-temperature-units">°C</span>
          </div>
        </div>
      </h3>

      <h3>
        <div className="row">
          <div className="col mt-4">Thursday</div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.condition}
              className="today-icon"
            />
          </div>
          <div className="col mt-4">
            <span className="WeatherForecast-temperature-max">12</span>°C
            <span className="WeatherForecast-temperature-min"> 4</span>
            <span className="WeatherForecast-temperature-units">°C</span>
          </div>
        </div>
      </h3>

      <h3>
        <div className="row">
          <div className="col mt-4">Friday</div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.condition}
              className="today-icon"
            />
          </div>
          <div className="col mt-4">
            <span className="WeatherForecast-temperature-max">12</span>°C
            <span className="WeatherForecast-temperature-min"> 4</span>
            <span className="WeatherForecast-temperature-units">°C</span>
          </div>
        </div>
      </h3>

      <h3>
        <div className="row">
          <div className="col mt-4">Saturday</div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.condition}
              className="today-icon"
            />
          </div>
          <div className="col mt-4">
            <span className="WeatherForecast-temperature-max">12</span>°C
            <span className="WeatherForecast-temperature-min"> 4</span>
            <span className="WeatherForecast-temperature-units">°C</span>
          </div>
        </div>
      </h3>

      <h3>
        <div className="row">
          <div className="col mt-4">Sunday</div>
          <div className="col">
            <img
              src={props.data.iconUrl}
              alt={props.data.condition}
              className="today-icon"
            />
          </div>
          <div className="col mt-4">
            <span className="WeatherForecast-temperature-max">12</span>°C
            <span className="WeatherForecast-temperature-min"> 4</span>
            <span className="WeatherForecast-temperature-units">°C</span>
          </div>
        </div>
      </h3>
    </div>
  );
}
