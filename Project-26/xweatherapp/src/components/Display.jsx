import { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("belgaum");
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json`,
          {
            params: {
              key: "a9cbe913898b41f1910132445250302",
              q: city,
            },
          }
        );
        console.log("inside api call=> ", response.data);
        // const jsonData = await response.json();
        setWeather(response.data.current);
      } catch (e) {
        console.error(e);
      }
    };
    fetchApi();
  }, [city]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <>
      <h1>Weather App</h1>
    </>
  );
};
export default Display;
