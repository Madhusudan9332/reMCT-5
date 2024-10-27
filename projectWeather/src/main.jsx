import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CityProvider } from "./context/city/CityContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </StrictMode>
);
