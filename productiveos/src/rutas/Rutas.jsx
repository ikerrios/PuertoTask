// Rutas.jsx
// Centraliza todas las rutas (navegación) de la aplicación.
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Inicio from "../paginas/Inicio";
import Acceso from "../paginas/Acceso";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Inicio />} />

        {/* Página de acceso (login/registro) */}
        <Route path="/acceso" element={<Acceso />} />

        {/* Cualquier ruta no existente -> redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}