import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BusinessPackeages from "./Modal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <BusinessPackeages />
  </StrictMode>
);
