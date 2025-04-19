import { useEffect, useState } from "react";
import "./Display.css";
const Display = () => {
  const [countries, setCountires] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [states, setStates] = useState([]);
  const [selectedState, setselectedState] = useState("");

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const reponse = await fetch(
          "https://crio-location-selector.onrender.com/countries"
        );
        const jsonData = await reponse.json();
        setCountires(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await fetch(
          `https://crio-location-selector.onrender.com/country=${selectedCountry}/states`
        );
        const jsonData = await response.json();
        setStates(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchState();
    setSelectedCity("");
    setselectedState("");
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(
          `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`
        );
        const jsonData = await response.json();
        setCities(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchCity();
    setSelectedCity("");
  }, [selectedState]);

  return (
    <>
      <h1>Select location</h1>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="" disabled>
          Select Country
        </option>
        {countries.map((ele) => {
          return (
            <option value={ele} key={ele}>
              {ele}
            </option>
          );
        })}
      </select>

      <select
        onChange={(e) => setselectedState(e.target.value)}
        value={selectedState}
        disabled={!selectedCountry}
      >
        <option value="" disabled>
          Select State
        </option>
        {states.map((ele) => {
          return (
            <option value={ele} key={ele}>
              {ele}
            </option>
          );
        })}
      </select>

      <select
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
        disabled={!selectedState}
      >
        <option value="" disabled>
          Select City
        </option>
        {cities.map((ele) => {
          return (
            <option value={ele} key={ele}>
              {ele}
            </option>
          );
        })}
      </select>

      {selectedCity && (
        <p>
          You selected{" "}
          <span style={{ fontWeight: "bolder" }}>{selectedCity}</span>,{" "}
          {selectedState}, {selectedCountry}
        </p>
      )}
    </>
  );
};
export default Display;
