import { useEffect, useState } from "react";
import "./styles.css";
const Display = () => {
  const [countires, setCountries] = useState([]);
  const [filterCountires, setFilterCountires] = useState([]);
  const [search, setSearch] = useState("");
  let i = 0;
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        const responseData = await response.json();

        setCountries(responseData);
        setFilterCountires(responseData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApi();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    let se = e.target.value;
    setSearch(se);
  };
  useEffect(() => {
    const filter = () => {
      setFilterCountires(
        countires.filter((country) => {
          return country.common.toLowerCase().includes(search.toLowerCase());
        })
      );
    };
    filter();
  }, [search]);
  return (
    <>
      <input
        type="text"
        placeholder="Search for Couuntry"
        id="search"
        onChange={handleChange}
      ></input>
      <hr />
      <div className="countryCard">
        {filterCountires.map((country) => {
          i++;
          return (
            <div key={i} className="card">
              <img src={country.png} alt={country.common} />
              <p>{country.common}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Display;
