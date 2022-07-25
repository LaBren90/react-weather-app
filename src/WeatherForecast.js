import axios from "axios";
import React, { useState } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h3>
          <div className="row">
            <div className="col mt-4">{forecast[0].dt}</div>
            <div className="col">
              <img
                src={forecast[0].weather[0].icon}
                alt={props.data.condition}
                className="today-icon"
              />
            </div>
            <div className="col mt-4">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temp.max)}
              </span>
              °C
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[0].temp.min)}
              </span>
              <span className="WeatherForecast-temperature-units">°C</span>
            </div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col mt-4">{forecast[1].dt}</div>
            <div className="col">
              <img
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="today-icon"
              />
            </div>
            <div className="col mt-4">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[1].temp.max)}
              </span>
              °C
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[1].temp.min)}
              </span>
              <span className="WeatherForecast-temperature-units">°C</span>
            </div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col mt-4">{forecast[2].dt}</div>
            <div className="col">
              <img
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="today-icon"
              />
            </div>
            <div className="col mt-4">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[2].temp.max)}
              </span>
              °C
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[2].temp.min)}
              </span>
              <span className="WeatherForecast-temperature-units">°C</span>
            </div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col mt-4">{forecast[3].dt}</div>
            <div className="col">
              <img
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="today-icon"
              />
            </div>
            <div className="col mt-4">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[3].temp.max)}
              </span>
              °C
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[3].temp.min)}
              </span>
              <span className="WeatherForecast-temperature-units">°C</span>
            </div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col mt-4">{forecast[4].dt}</div>
            <div className="col">
              <img
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="today-icon"
              />
            </div>
            <div className="col mt-4">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[4].temp.max)}
              </span>
              °C
              <span className="WeatherForecast-temperature-min">
                {" "}
                {Math.round(forecast[4].temp.min)}
              </span>
              <span className="WeatherForecast-temperature-units">°C</span>
            </div>
          </div>
        </h3>
      </div>
    );
  } else {
    let apiKey = "af2c2a87ea7284e044982eed7c20bf83";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
