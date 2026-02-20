// Punto de entrada de la aplicación.
// Aquí montamos React en el div #root del index.html
import React from "react";
import ReactDOM from "react-dom/client";

// Componente principal de la app
import App from "./App";

// Estilos globales (los crearemos en el siguiente paso)
import "./estilos/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode ayuda a detectar errores comunes en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>
);