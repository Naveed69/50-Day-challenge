import { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";
import Card from "./Card/Card";
const Display = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchApi = () => {
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "a9cbe913898b41f1910132445250302",
            q: city,
          },
        })
        .then((response) => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch((e) => {
          alert("Failed to fetch weather data");
        });
    };
    fetchApi();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };
  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" placeholder="Enter City" name="city" required />
        <button type="submit">Search</button>
      </form>
      {city !== "" ? (
        loading ? (
          <p style={{ fontsize: "26px", color: "rgb(100, 97, 97)" }}>
            Loading data…
          </p>
        ) : (
          <div className="weather-cards">
            <Card title="Temperature" value={`${weather.current.temp_c}°C`} />
            <Card title="Humidity" value={`${weather.current.humidity}%`} />
            <Card
              title="Condition"
              value={`${weather.current.condition.text}`}
            />
            <Card
              title="Wind Speed"
              value={`${weather.current.wind_kph} kph`}
            />
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
};
export default Display;
