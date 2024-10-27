import MyContext from "./MyContext";
import { useEffect, useState } from "react";

function MyState(props) {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState({ email: "", password: "" });
  const [weatherReport, setWeatherReport] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    updateWeatherReport(city);
  }, [city]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const updateWeatherReport = async (city) => {
    if (city) {
      try {
        const responce = fetch(
          `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`
        );
        const data = await responce.json();
        setWeatherReport(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      setWeatherReport([]);
    }
  };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        weatherReport,
        updateWeatherReport,
        city,
        setCity,
        user,
        setUser,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
