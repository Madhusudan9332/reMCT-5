import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import CityList from "./components/CityList";
import WeatherTable from "./components/WeatherTable";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [cities, setCities] = useState([]);
  // const [index , setIndex] = useState(-1);

  const addCity = (city) => {
    for(let citys of cities){
      if(citys.name == city.name){
        citys.repete = true
        return
      };
    }
    setCities([...cities, city]);
  }
  const deleteCity = (cityName) => setCities(cities.filter((city) => city.name !== cityName));

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="app-content flex-grow flex-wrap">
        <CityList cities={cities} addCity={addCity} className="md-inline-block" />
        <div className="main-content">
          <WeatherForm addCity={addCity} />
          <WeatherTable cities={cities} deleteCity={deleteCity} />
        </div>
      </div>
    </div>
  );
}

export default App;
