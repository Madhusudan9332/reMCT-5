import { useContext, useState } from 'react';
import { CityContext } from '../context/city/CityContext';
import { Button } from "@material-tailwind/react";

function WeatherForm() {
  const [cityName, setCityName] = useState("");
  const {fetchCityData } = useContext(CityContext);

  const handleAddCity = async () => {
    if (!cityName) {
      alert("Please enter a city name");
      return;
    }else{
      fetchCityData(cityName.trim());
      setCityName("");
    }
  }
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
