import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.data.city}</h1>

      <h2 className="mt-5">
        <div className="row">
          <div className="col-4" id="current">
            <FormattedDate date={props.data.date} />

            <br />
          </div>

          <div className="col-4">
            <div className="clearfix-weather-icon">
              <img
                id="today-icon"
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="float-left"
              />
            </div>{" "}
          </div>

          <div className="col-4">
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />

            <ul>
              <li id="condition" className="text-capitalize">
                {props.data.condition}
              </li>
              <li>
                {" "}
                Wind speed:{" "}
                <span id="wind-speed">{Math.round(props.data.wind)}</span>m/s
              </li>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>{" "}
            </ul>
          </div>
        </div>
      </h2>
    </div>
  );
}
