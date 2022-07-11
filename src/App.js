import "./Weather.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather
          city="London"
          day="Wednesday"
          date={16}
          month="March"
          time="09:00"
          temperature={20}
          condition="clear"
          windspeed={1}
          humidity={80}
        />
        <footer>
          <a
            href="https://github.com/LaBren90/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>{" "}
          by Laura Brennan
        </footer>
      </div>
    </div>
  );
}
