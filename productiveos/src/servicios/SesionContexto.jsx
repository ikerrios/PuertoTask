// SesionContexto.jsx
// Contexto global para tener disponible la sesión del usuario en toda la app.
// Esto evita pasar props por todas partes y facilita proteger rutas.

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseCliente";

// Creamos el contexto
const SesionContexto = createContext(null);

// Hook cómodo para consumir el contexto
export function useSesion() {
  return useContext(SesionContexto);
}

export function ProveedorSesion({ children }) {
  // session = null cuando no hay usuario logeado
  const [sesion, setSesion] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // 1) Al cargar la app, pedimos la sesión actual (si existe)
    supabase.auth.getSession().then(({ data }) => {
      setSesion(data.session ?? null);
      setCargando(false);
    });

    // 2) Escuchamos cambios de sesión (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_evento, session) => {
        setSesion(session ?? null);
      }
    );

    // 3) Limpiamos el listener al desmontar el componente
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const valor = { sesion, cargando };

  return (
    <SesionContexto.Provider value={valor}>{children}</SesionContexto.Provider>
  );
}