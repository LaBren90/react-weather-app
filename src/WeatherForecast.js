import React from "react";

export default function WeatherForecast(props) {
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
          <div className="col mt-4">12°C 4°C</div>
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
          <div className="col mt-4">15°C 5°C</div>
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
          <div className="col mt-4">14°C 5°C</div>
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
          <div className="col mt-4">14°C 6°C</div>
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
          <div className="col mt-4">13°C 3°C</div>
        </div>
      </h3>
    </div>
  );
}
