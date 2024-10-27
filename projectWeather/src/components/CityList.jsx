// import React from "react";
import { Rating } from "@material-tailwind/react";

function CityList({ cities , addCity }) {
    const data = ["London", "New York","Los Angeles","Las Vegas"];

    const handleAddCity = async (cityName) => {
        const data = {};
        console.log("hii");
        const responce = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`);
        const responceData = await responce.json();
        console.log(responceData);
        data["name"] = cityName;
        data["description"] = responceData.description;
        data["temperature"] = responceData.temp_in_celsius;
        data["pressure"] = responceData.pressure_in_hPa;
        data["repete"] = false;
        data["dataAge"] = Math.floor(Math.random()*12)+12;

        addCity(data);
        console.log(data);
    }
    
  return (
    <div className="city-list md-w-1/2">
      <h2>City</h2>
      <ul>
        {data.map((city, index) => (
          <li key={index} onClick={() => handleAddCity(city)} >{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
