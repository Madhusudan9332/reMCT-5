import React, { useContext, useState } from 'react';
import { CityContext } from '../context/city/CityContext';

const CityComponent = () => {
  const { cities, fetchCityData, loading, error } = useContext(CityContext);
  const [cityName, setCityName] = useState('');

  // Handle city addition
  const handleAddCity = () => {
    if (cityName.trim()) {
      fetchCityData(cityName);
      setCityName('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={cityName} 
        onChange={(e) => setCityName(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button onClick={handleAddCity} disabled={loading}>
        {loading ? 'Adding...' : 'Add City'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <h3>{city.name}</h3>
            <p>Description: {city.description}</p>
            <p>Temperature: {city.temperature}°C</p>
            <p>Pressure: {city.pressure} hPa</p>
            <p>Data Age: {city.dataAge} hours</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityComponent;
