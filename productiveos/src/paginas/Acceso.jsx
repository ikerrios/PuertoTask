// Acceso.jsx
// Pantalla de registro e inicio de sesión (email + contraseña).
// Una vez logeado, redirigimos al inicio (/).

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../servicios/supabaseCliente";

export default function Acceso() {
  const navigate = useNavigate();

  // Estado de formulario (controlado)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI/UX
  const [modo, setModo] = useState("login"); // "login" | "registro"
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    setMensaje(null);
    setCargando(true);

    try {
      if (modo === "registro") {
        // Registro
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMensaje(
          "Registro correcto. Si Supabase requiere confirmación por email, revisa tu correo."
        );
      } else {
        // Login
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Si login ok, al panel
        navigate("/", { replace: true });
      }
    } catch (err) {
      setError(err.message || "Ha ocurrido un error.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="contenedor">
      <h1 className="titulo">{modo === "login" ? "Iniciar sesión" : "Registrarse"}</h1>

      <p className="texto">
        {modo === "login"
          ? "Accede con tu email y contraseña."
          : "Crea tu cuenta para guardar tus datos en la nube."}
      </p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
        <label className="texto">
          Email
          <input
            style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tuemail@gmail.com"
          />
        </label>

        <label className="texto">
          Contraseña
          <input
            style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid #ccc" }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
          />
        </label>

        {error && (
          <div style={{ background: "#ffe3e3", padding: 10, borderRadius: 10 }}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {mensaje && (
          <div style={{ background: "#e6ffea", padding: 10, borderRadius: 10 }}>
            {mensaje}
          </div>
        )}

        <button className="boton" type="submit" disabled={cargando}>
          {cargando
            ? "Procesando..."
            : modo === "login"
            ? "Entrar"
            : "Crear cuenta"}
        </button>

        <button
          type="button"
          onClick={() => setModo(modo === "login" ? "registro" : "login")}
          style={{
            padding: 10,
            borderRadius: 10,
            border: "1px solid #111",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {modo === "login"
            ? "No tengo cuenta → Registrarme"
            : "Ya tengo cuenta → Iniciar sesión"}
        </button>
      </form>
    </main>
  );
}