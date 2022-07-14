import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";

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
      date: new Date(response.data.dt * 1000),
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
        <CurrentWeather data={weather} />

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

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return "Loading...";
  }
}
