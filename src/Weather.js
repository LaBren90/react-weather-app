import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      date: 13,
      day: "Wednseday",
      month: "July",
    });
  }

  if (weather.ready) {
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
        <h1>{weather.city}</h1>

        <h2>
          <div className="row">
            <div className="col-4" col-4 id="current">
              <div className="day">{weather.day}</div>
              <div className="dateMonth">
                {weather.date} {weather.month}
              </div>
              <br />
              <div className="last-update">Last updated at: </div>
              <div className="time">{props.time}</div>
            </div>

            <div className="col-4" col-4>
              <div className="clearfix-weather-icon">
                <img
                  id="today-icon"
                  src={weather.iconUrl}
                  alt={weather.condition}
                  className="float-left"
                />
              </div>{" "}
            </div>

            <div className="col-4" col-4>
              <span className="today-temp" id="temp-celsius">
                {Math.round(weather.temperature)}
              </span>
              <span> °C</span>

              <ul>
                <li id="condition" className="text-capitalize">
                  {weather.condition}
                </li>
                <li>
                  {" "}
                  Wind speed:{" "}
                  <span id="wind-speed">{Math.round(weather.wind)}</span>m/s
                </li>
                <li>
                  Humidity: <span id="humidity">{weather.humidity}</span>%
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
  } else {
    const apiKey = "f1c8b46054b3f1ca6ba205c92bdc54e1";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
