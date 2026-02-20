// RutaProtegida.jsx
// Si el usuario NO está logeado, lo manda a /acceso.
// Si está logeado, renderiza la página solicitada.

import { Navigate } from "react-router-dom";
import { useSesion } from "../servicios/SesionContexto";

export default function RutaProtegida({ children }) {
  const { sesion, cargando } = useSesion();

  // Mientras cargamos la sesión inicial, mostramos un estado simple
  if (cargando) {
    return (
      <main className="contenedor">
        <p className="texto">Cargando sesión...</p>
      </main>
    );
  }

  // Si no hay sesión, fuera
  if (!sesion) {
    return <Navigate to="/acceso" replace />;
  }

  // Si hay sesión, se permite
  return children;
}