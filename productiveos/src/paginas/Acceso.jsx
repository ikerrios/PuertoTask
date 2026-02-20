// Acceso.jsx
// Pantalla temporal para login/registro.
// En la Issue 3 la conectaremos a Supabase Auth.
import { Link } from "react-router-dom";

export default function Acceso() {
  return (
    <main className="contenedor">
      <h1 className="titulo">Acceso</h1>
      <p className="texto">Aquí irá el formulario de registro e inicio de sesión.</p>

      <Link className="boton" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}