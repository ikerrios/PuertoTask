// Inicio.jsx
// Temporalmente, esta página actúa como "panel".
// En la Issue 4 pondremos aquí las tarjetas de módulos.

import { useNavigate } from "react-router-dom";
import { supabase } from "../servicios/supabaseCliente";
import { useSesion } from "../servicios/SesionContexto";

export default function Inicio() {
  const navigate = useNavigate();
  const { sesion } = useSesion();

  async function cerrarSesion() {
    await supabase.auth.signOut();
    navigate("/acceso", { replace: true });
  }

  return (
    <main className="contenedor">
      <h1 className="titulo">PuertoTask</h1>

      <p className="texto">
        Sesión iniciada como: <strong>{sesion?.user?.email}</strong>
      </p>

      <button className="boton" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </main>
  );
}