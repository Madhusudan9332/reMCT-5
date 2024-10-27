import { useContext, useState } from "react";
import { CityContext } from "../context/city/CityContext";
import { Rating } from "@material-tailwind/react";

function CityList() {
  const { cities, fetchCityData, loading, error } = useContext(CityContext);
  const data = ["London", "New York", "Los Angeles", "Las Vegas"];

  const handleAddCity = async (cityName) => fetchCityData(cityName.trim());

  return (
    <div className="city-list md-w-1/2">
      <h2>City</h2>
      <ul>
        {data.map((city, index) => (
          <li key={index} onClick={() => handleAddCity(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
