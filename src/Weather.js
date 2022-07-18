import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      day: "Wednseday",
      month: "July",
    });
  }

  function search() {
    const apiKey = "f1c8b46054b3f1ca6ba205c92bdc54e1";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city"
            autoFocus
            id="current-city"
            onChange={handleCityChange}
          />
          <input type="button" className="search-button" value="Search" />
          <input
            type="button"
            value="Current location"
            className="location-button"
          />
        </form>
        <CurrentWeather data={weather} />
        <WeatherForecast data={weather} />;
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
