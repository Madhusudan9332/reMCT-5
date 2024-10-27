import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

function WeatherForm({ addCity }) {
  const [cityName, setCityName] = useState("");

  const handleAddCity = async () => {
    const data = {};
    console.log("hii");
    const responce = await fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    );
    const responceData = await responce.json();
    console.log(responceData);
    data["name"] = cityName;
    data["description"] = responceData.description;
    data["temperature"] = responceData.temp_in_celsius;
    data["pressure"] = responceData.pressure_in_hPa;
    data["repete"] = false;
    data["dataAge"] = Math.floor(Math.random() * 12) + 12;

    addCity(data);
    console.log(data);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <input
        className="mt-2 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        type="text"
        placeholder="City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <Button
        onClick={handleAddCity}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Weather
      </Button>
    </div>
  );
}

export default WeatherForm;
