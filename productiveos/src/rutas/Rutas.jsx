import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Inicio from "../paginas/Inicio";
import Acceso from "../paginas/Acceso";
import RutaProtegida from "./RutaProtegida";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Inicio ahora será el "panel", así que lo protegemos */}
        <Route path="/" 
          element={
            <RutaProtegida>
              <Inicio />
            </RutaProtegida>
          }
        />

        {/* Acceso es público */}
        <Route path="/acceso" element={<Acceso />} />

        {/* Rutas no existentes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}