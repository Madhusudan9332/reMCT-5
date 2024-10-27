import React from "react";

function WeatherRow({ city, deleteCity }) {
  return (
    <tr className={city.repete ? "bg-red-500" : ""}>
      <td>{city.name}</td>
      <td><input type="text" value={city.description} readOnly /></td>
      <td>{city.temperature}</td>
      <td>{city.pressure}</td>
      <td>{city.dataAge}</td>
      <td>
        <button onClick={() => deleteCity(city.name)}>Delete</button>
      </td>
    </tr>
  );
}

export default WeatherRow;
