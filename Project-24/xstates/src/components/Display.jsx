import { useEffect, useState } from "react";

const Display = () => {
  const [countrys, setCountry] = useState([]);
  const [states, setStates] = useState([]);
  const [cityNames, setCityNames] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  useEffect(() => {
    const featchApi = async () => {
      try {
        const response = await fetch(
          "https://crio-location-selector.onrender.com/countries"
        );
        const jsonData = await response.json();
        setCountry(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    featchApi();
  }, []);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await fetch(
          `https://crio-location-selector.onrender.com/country=${countryName}/states`
        );
        const jsonData = await response.json();
        setStates(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    setStateName("");
    setCityName("");
    fetchState();
  }, [countryName]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch(
          `https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`
        );
        const jsonData = await response.json();
        setCityNames(jsonData);
      } catch (e) {
        console.error(e);
      }
    };

    setCityName("");
    fetchCity();
  }, [stateName]);
  return (
    <>
      <h2>Select Location</h2>
      <select
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      >
        <option disabled value="">
          --Select Country--
        </option>
        {countrys.map((c) => {
          return <option key={c}>{c}</option>;
        })}
      </select>
      <select
        disabled={!countryName}
        value={stateName}
        onChange={(e) => setStateName(e.target.value)}
      >
        <option disabled value="">
          --Select State--
        </option>
        {states.map((s) => {
          return <option key={s}>{s}</option>;
        })}
      </select>
      <select
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        disabled={!stateName}
      >
        <option disabled value="">
          --Select City--
        </option>
        {cityNames.map((c) => {
          return <option key={c}>{c}</option>;
        })}
      </select>
      {cityName && (
        <p>
          You selected <strong>{cityName}</strong>, {stateName}, {countryName}
        </p>
      )}
    </>
  );
};
export default Display;
