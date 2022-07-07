import "./Weather.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
