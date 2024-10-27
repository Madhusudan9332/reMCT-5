import React, { useContext, useState } from 'react';
import { CityContext } from '../context/city/CityContext';
import WeatherRow from "./WeatherRow";

function WeatherTable() {
  const { cities, deleteCity} = useContext(CityContext);

  return (
    <table className="weather-table">
      <thead>
        <tr>
          <th>City</th>
          <th>Description</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Data age (hrs)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          console.log(city.name,city.repete),
          <WeatherRow key={index} city={city} deleteCity={deleteCity} />
        ))}
      </tbody>
    </table>
  );
}

export default WeatherTable;
