import React from "react";
import WeatherRow from "./WeatherRow";

function WeatherTable({ cities, deleteCity }) {
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
          <WeatherRow key={index} city={city} deleteCity={deleteCity} />
        ))}
      </tbody>
    </table>
  );
}

export default WeatherTable;
