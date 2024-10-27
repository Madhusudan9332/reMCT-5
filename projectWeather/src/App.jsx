import WeatherForm from "./components/WeatherForm";
import CityList from "./components/CityList";
import WeatherTable from "./components/WeatherTable";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="app-content flex-grow flex-wrap">
        <CityList className="md-inline-block" />
        <div className="main-content">
          <WeatherForm />
          <WeatherTable />
        </div>
      </div>
    </div>
  );
}

export default App;
