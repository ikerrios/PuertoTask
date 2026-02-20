import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./estilos/global.css";
import { ProveedorSesion } from "./servicios/SesionContexto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProveedorSesion>
      <App />
    </ProveedorSesion>
  </React.StrictMode>
);