import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <form id="search-form">
        <input
          type="text"
          placeholder="Search for a city"
          autoFocus
          id="current-city"
        />
        <input type="button" className="search-button" value="Search" />
        <input
          type="button"
          value="Current location"
          className="location-button"
        />
      </form>
      <h1>{props.city}</h1>

      <h2>
        <div className="row">
          <div className="col-4" col-4 id="current">
            <div className="day">{props.day}</div>
            <div className="dateMonth">
              {props.date} {props.month}
            </div>
            <br />
            <div className="last-update">Last updated at: </div>
            <div className="time">{props.time}</div>
          </div>

          <div className="col-4" col-4>
            <div className="clearfix-weather-icon">
              <img
                id="today-icon"
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Sun"
                className="float-left"
              />
            </div>{" "}
          </div>

          <div className="col-4" col-4>
            <span className="today-temp" id="temp-celsius">
              {props.temperature}
            </span>
            <span> °C</span>

            <ul>
              <li id="condition">{props.condition}</li>
              <li>
                {" "}
                Wind speed: <span id="wind-speed">{props.windspeed}</span>m/s
              </li>
              <li>
                Humidity: <span id="humidity">{props.humidity}</span>%
              </li>{" "}
            </ul>
          </div>
        </div>
      </h2>

      <div className="forecast">
        <h3>
          <div className="row">
            <div className="col">Wednesday</div>
            <div className="col">
              <i className="fa-solid fa-cloud-showers-heavy"></i>
            </div>
            <div className="col">12°C</div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col">Thursday</div>
            <div className="col">
              <i className="fa-solid fa-sun"></i>
            </div>
            <div className="col">15°C</div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col">Friday</div>
            <div className="col">
              <i className="fa-solid fa-cloud-sun"></i>
            </div>
            <div className="col">14°C</div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col">Saturday</div>
            <div className="col">
              <i className="fa-solid fa-cloud"></i>
            </div>
            <div className="col">14°C</div>
          </div>
        </h3>

        <h3>
          <div className="row">
            <div className="col">Sunday</div>
            <div className="col">
              <i className="fa-solid fa-cloud-rain"></i>
            </div>
            <div className="col">13°C</div>
          </div>
        </h3>
      </div>
    </div>
  );
}
