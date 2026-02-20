// supabaseCliente.js
// Aquí centralizamos la conexión con Supabase para usarla en toda la app.

import { createClient } from "@supabase/supabase-js";

// Vite expone variables de entorno con el prefijo VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validación básica para evitar “pantalla en blanco” si falta algo
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Faltan variables de entorno de Supabase. Revisa el archivo .env (VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY)."
  );
}

// Creamos el cliente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);