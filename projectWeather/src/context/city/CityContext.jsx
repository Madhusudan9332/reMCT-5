import React, { createContext, useState } from 'react';

// Create the context
export const CityContext = createContext();

// Provider component
export const CityProvider = ({ children }) => {
  // State to store cities data
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch city data and add it to the cities list
  const deleteCity = (cityName) => setCities(cities.filter((city) => city.name !== cityName));
  const fetchCityData = async (cityName) => {
    for(let citys of cities){
      if(citys.name === cityName){
        citys.repete = citys.repete === true ? false : true;
        setCities([...cities])
        return;
      }else{
        citys.repete = false
        setCities([...cities])
      }
    }
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
      );

      if (!response.ok) throw new Error("Failed to fetch city data");

      const responseData = await response.json();

      // Process data and add it to the list
      const cityData = {
        name: cityName,
        description: responseData.description,
        temperature: responseData.temp_in_celsius,
        pressure: responseData.pressure_in_hPa,
        repete: false,
        dataAge: Math.floor(Math.random() * 12) + 12, // Random age between 12-23
      };

      // Update cities state with the new city data
      setCities((prevCities) => [...prevCities, cityData]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Context value including cities, fetchCityData, loading, and error
  return (
    <CityContext.Provider value={{ cities,deleteCity, fetchCityData, loading, error }}>
      {children}
    </CityContext.Provider>
  );
};
